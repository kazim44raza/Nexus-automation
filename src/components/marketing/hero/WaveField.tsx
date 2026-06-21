'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

/* ──────────────────────────────────────────────────────────────
   Flowing wave field — a rippling 3D silk surface in cyan→emerald
   that reacts to the cursor. Real WebGL written directly against
   three.js (no React-reconciler dependency), driven by a custom
   GLSL shader.
   ────────────────────────────────────────────────────────────── */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  varying float vElevation;
  varying vec2 vUv;

  // Simplex 3D noise — Ashima Arts / Stefan Gustavson (public domain)
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main(){
    vUv = uv;
    vec3 pos = position;
    float t = uTime * 0.22;

    float elevation = 0.0;
    elevation += snoise(vec3(pos.x * 0.30, pos.y * 0.30, t))             * 0.95;
    elevation += snoise(vec3(pos.x * 0.70 + 12.0, pos.y * 0.70, t * 1.5)) * 0.32;
    elevation += sin(pos.x * 0.45 + uTime * 0.55) * 0.12;

    // Cursor ripple
    float md = distance(pos.xy, uMouse);
    elevation += sin(md * 1.5 - uTime * 1.6) * 0.28 * smoothstep(5.5, 0.0, md);

    pos.z += elevation;
    vElevation = elevation;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  varying float vElevation;
  varying vec2 vUv;

  void main(){
    float h = smoothstep(-0.8, 1.1, vElevation);
    vec3 color = mix(uColorA, uColorB, h);
    color = mix(color, uColorC, smoothstep(0.55, 1.25, vElevation));

    // Soft edges so the surface melts into the dark hero
    float edge = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x)
               * smoothstep(0.0, 0.10, vUv.y) * smoothstep(1.0, 0.62, vUv.y);

    float glow = 0.24 + 0.58 * h;
    gl_FragColor = vec4(color * glow, edge * 0.80);
  }
`

function webglSupported() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

export function WaveField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !webglSupported()) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = container.clientWidth
    let height = container.clientHeight

    // ─── Renderer / scene / camera ───
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 2.4, 7)
    camera.lookAt(0, 0, 0)

    // ─── Wave surface ───
    const geometry = new THREE.PlaneGeometry(20, 18, 168, 168)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColorA: { value: new THREE.Color('#0F766E') }, // deep cyan
        uColorB: { value: new THREE.Color('#14B8A6') }, // cyan
        uColorC: { value: new THREE.Color('#10B981') }, // emerald
      },
    })
    const wave = new THREE.Mesh(geometry, material)
    wave.rotation.x = -Math.PI / 2.15
    wave.position.y = -1.4
    scene.add(wave)

    // ─── Floating particles ───
    const COUNT = 110
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = Math.random() * 5 + 0.3
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: new THREE.Color('#5eead4'),
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // ─── Pointer tracking (smoothed) ───
    const targetMouse = new THREE.Vector2(0, 0)
    const currentMouse = new THREE.Vector2(0, 0)
    const onPointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -((e.clientY / window.innerHeight) * 2 - 1)
      targetMouse.set(x * 7, y * 7)
    }
    window.addEventListener('pointermove', onPointerMove)

    // ─── Resize ───
    const onResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    // ─── Animation loop ───
    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      if (!reducedMotion) material.uniforms.uTime.value = clock.getElapsedTime()
      currentMouse.lerp(targetMouse, 0.045)
      material.uniforms.uMouse.value.copy(currentMouse)
      particles.rotation.y = clock.getElapsedTime() * 0.02
      renderer.render(scene, camera)
    }
    animate()

    // ─── Cleanup ───
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />
}
