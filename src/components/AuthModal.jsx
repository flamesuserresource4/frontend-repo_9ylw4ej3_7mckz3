import { useState } from 'react'

export default function AuthModal({ open, mode = 'login', onClose }) {
  const [authMode, setAuthMode] = useState(mode)
  const [status, setStatus] = useState(null)

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    try {
      const endpoint = authMode === 'signup' ? '/api/auth/signup' : '/api/auth/login'
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Auth failed')
      setStatus('success')
      setTimeout(() => onClose(), 800)
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 backdrop-blur-sm p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{authMode === 'signup' ? 'Create your account' : 'Welcome back'}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
          {authMode === 'signup' && (
            <input name="name" placeholder="Full name" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
          )}
          <input name="email" type="email" placeholder="Email address" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
          <input name="password" type="password" placeholder="Password" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
          <button className="mt-2 px-4 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
            {authMode === 'signup' ? 'Create account' : 'Sign in'}
          </button>
          <div className="text-sm text-slate-600 mt-1">
            {authMode === 'signup' ? (
              <span>
                Already have an account?{' '}
                <button type="button" onClick={() => setAuthMode('login')} className="underline">Sign in</button>
              </span>
            ) : (
              <span>
                New here?{' '}
                <button type="button" onClick={() => setAuthMode('signup')} className="underline">Create an account</button>
              </span>
            )}
          </div>
          {status && (
            <div className="text-sm text-slate-600">
              {status === 'loading' ? 'Working…' : status === 'success' ? 'Success!' : status}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
