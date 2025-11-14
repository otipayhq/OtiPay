'use client'

import { AlertCircle, CheckCircle2, Shield } from 'lucide-react'

interface DeviceVerificationProps {
  onSubmit: (step: string) => void
}

export function DeviceVerification({ onSubmit }: DeviceVerificationProps) {
  const deviceInfo = {
    browser: 'Chrome 120.0',
    os: 'macOS Sonoma',
    ip: '192.168.1.100',
    location: 'Lagos, Nigeria',
    time: new Date().toLocaleString(),
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg flex items-start gap-3">
        <AlertCircle size={20} className="text-warning flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-sm mb-1">New Device Detected</p>
          <p className="text-sm text-muted-foreground">This is a new device trying to access your account. Please verify below.</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-sm">Device Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-muted-foreground">Browser</span>
            <span>{deviceInfo.browser}</span>
          </div>
          <div className="flex justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-muted-foreground">Operating System</span>
            <span>{deviceInfo.os}</span>
          </div>
          <div className="flex justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-muted-foreground">IP Address</span>
            <span className="font-mono">{deviceInfo.ip}</span>
          </div>
          <div className="flex justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-muted-foreground">Location</span>
            <span>{deviceInfo.location}</span>
          </div>
          <div className="flex justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-muted-foreground">Time</span>
            <span>{deviceInfo.time}</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
        <p className="text-sm mb-3">A verification code has been sent to your registered email. Enter it below:</p>
        <div className="flex gap-2 mb-3">
          {Array(6).fill('').map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center font-bold bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onSubmit('2fa')}
          className="flex-1 py-3 bg-white/5 border border-white/10 text-foreground rounded-lg font-medium hover:bg-white/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit('approved')}
          className="flex-1 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Approve Device
        </button>
      </div>
    </div>
  )
}
