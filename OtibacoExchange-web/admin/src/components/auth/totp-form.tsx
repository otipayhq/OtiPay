'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

interface TOTPFormProps {
  onSubmit: (step: string) => void
}

export function TOTPForm({ onSubmit }: TOTPFormProps) {
  const [totp, setTotp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newTotp = [...totp]
    newTotp[index] = value.slice(-1)
    setTotp(newTotp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement
      nextInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = totp.join('')
    if (code.length !== 6) {
      setError('Please enter a complete 6-digit code')
      return
    }
    setError('')
    onSubmit('device-verification')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Enter the 6-digit code from your authenticator app</p>
        <div className="flex gap-2 justify-center mb-6">
          {totp.map((digit, index) => (
            <input
              key={index}
              data-index={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-bold bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          ))}
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <AlertCircle size={16} className="text-destructive" />
          <span className="text-sm text-destructive">{error}</span>
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onSubmit('login')}
          className="flex-1 py-3 bg-white/5 border border-white/10 text-foreground rounded-lg font-medium hover:bg-white/10 transition-all"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity neon-glow"
        >
          Verify
        </button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Don't have your authenticator app? <button type="button" className="text-primary hover:underline">Use backup code</button>
      </div>
    </form>
  )
}
