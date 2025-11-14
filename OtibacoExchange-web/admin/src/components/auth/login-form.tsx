'use client'

import { useState } from 'react'
import { Lock, Mail, AlertCircle, CheckCircle2 } from 'lucide-react'

interface LoginFormProps {
  onSubmit: (step: string) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }
    setError('')
    onSubmit('2fa')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@otipay.com"
            className="w-full pl-10 pr-4 py-3 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-3 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <AlertCircle size={16} className="text-destructive" />
          <span className="text-sm text-destructive">{error}</span>
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="rounded" />
          <span>Remember this device</span>
        </label>
        <button type="button" className="text-primary hover:underline">
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity neon-glow"
      >
        Sign In
      </button>
    </form>
  )
}
