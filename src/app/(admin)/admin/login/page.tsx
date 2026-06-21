'use client'

import { Suspense, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2, Lock, Mail, Zap } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const callbackUrl = params.get('callbackUrl') ?? '/admin'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password')
      setLoading(false)
    } else {
      router.push(callbackUrl)
    }
  }

  return (
    <>
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label text-white/70">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input-dark pl-10"
              placeholder="admin@nexusautomation.ai"
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label className="label text-white/70">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="input-dark pl-10"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary-lg w-full mt-2"
        >
          {loading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Signing in…</>
          ) : 'Sign In'}
        </button>
      </form>
    </>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-primary">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-white text-xl">Nexus Automation</span>
          </div>
          <p className="text-white/40 text-sm">Admin Portal</p>
        </div>

        <div className="card-dark rounded-2xl p-8">
          <h1 className="text-white font-bold text-xl mb-6">Sign in to Admin</h1>
          <Suspense fallback={<div className="text-white/30 text-sm">Loading…</div>}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Nexus Automation © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
