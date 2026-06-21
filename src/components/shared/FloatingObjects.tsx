'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

/* ──────────────────────────────────────────────────────────────
   Ambient 3D background — a cluster of glassy cyan/emerald solids
   that slowly bob, rotate, and parallax toward the cursor. Real
   WebGL via three.js (no React-reconciler). Drop it behind any
   dark section as an absolutely-positioned layer.
   ────────────────────────────────────────────────────────────── */

function webglSupported() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

interface FloatingObjectsProps {
  className?: string
  /** Number of floating solids */
  count?: number
}

export function FloatingObjects({ className = '', count = 9 }: FloatingObjectsProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || !webglSupported()) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = container.clientWidth
    let height = container.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 0, 9)

    // Lighting — soft fill + two coloured rim lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45))
    const cyanLight = new THREE.PointLight(0x14b8a6, 20, 60)
    cyanLight.position.set(-6, 5, 6)
    scene.add(cyanLight)
    const emeraldLight = new THREE.PointLight(0x10b981, 16, 60)
    emeraldLight.position.set(7, -4, 5)
    scene.add(emeraldLight)

    // Geometry pool
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TorusGeometry(0.7, 0.28, 16, 40),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.1, 0),
    ]
    const colors = [0x14b8a6, 0x0d9488, 0x10b981, 0x2dd4bf, 0x34d399]

    const group = new THREE.Group()
    scene.add(group)

    interface Solid { mesh: THREE.Mesh; spin: THREE.Vector3; floatPhase: number; floatAmp: number; baseY: number }
    const solids: Solid[] = []

    for (let i = 0; i < count; i++) {
      const geo = geometries[i % geometries.length]
      const color = colors[i % colors.length]
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.14,
        metalness: 0.35,
        roughness: 0.3,
        transparent: true,
        opacity: 0.78,
        flatShading: true,
      })
      const mesh = new THREE.Mesh(geo, material)

      const x = (Math.random() - 0.5) * 13
      const y = (Math.random() - 0.5) * 7
      const zPos = (Math.random() - 0.5) * 5 - 1
      mesh.position.set(x, y, zPos)
      const s = 0.35 + Math.random() * 0.75
      mesh.scale.setScalar(s)
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      // Faint wireframe shell for a techy edge
      const wire = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color: 0x5eead4, wireframe: true, transparent: true, opacity: 0.12 })
      )
      wire.scale.setScalar(1.04)
      mesh.add(wire)

      group.add(mesh)
      solids.push({
        mesh,
        spin: new THREE.Vector3((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.3),
        floatPhase: Math.random() * Math.PI * 2,
        floatAmp: 0.18 + Math.random() * 0.32,
        baseY: y,
      })
    }

    // Pointer parallax
    const targetRot = new THREE.Vector2(0, 0)
    const currentRot = new THREE.Vector2(0, 0)
    const onPointerMove = (e: PointerEvent) => {
      targetRot.set(
        ((e.clientX / window.innerWidth) * 2 - 1) * 0.25,
        ((e.clientY / window.innerHeight) * 2 - 1) * 0.25
      )
    }
    window.addEventListener('pointermove', onPointerMove)

    const onResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      if (!reducedMotion) {
        for (const s of solids) {
          s.mesh.rotation.x += s.spin.x * 0.01
          s.mesh.rotation.y += s.spin.y * 0.01
          s.mesh.rotation.z += s.spin.z * 0.01
          s.mesh.position.y = s.baseY + Math.sin(t * 0.6 + s.floatPhase) * s.floatAmp
        }
      }

      currentRot.lerp(targetRot, 0.04)
      group.rotation.y = currentRot.x
      group.rotation.x = currentRot.y

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      geometries.forEach((g) => g.dispose())
      solids.forEach((s) => {
        ;(s.mesh.material as THREE.Material).dispose()
        s.mesh.children.forEach((c) => {
          if (c instanceof THREE.Mesh) (c.material as THREE.Material).dispose()
        })
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement)
    }
  }, [count])

  return <div ref={ref} aria-hidden="true" className={`absolute inset-0 ${className}`} />
}
