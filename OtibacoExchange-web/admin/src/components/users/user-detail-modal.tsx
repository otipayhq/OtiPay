'use client'

import { X, Lock, Shield, Trash2, RotateCcw } from 'lucide-react'

interface UserDetailModalProps {
  user: any
  onClose: () => void
}

export function UserDetailModal({ user, onClose }: UserDetailModalProps) {
  if (!user) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-card">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Profile Info */}
          <div>
            <h3 className="font-semibold mb-3">Profile Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Account Status</p>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  user.status === 'active' ? 'bg-accent/20 text-accent' : 'bg-destructive/20 text-destructive'
                }`}>
                  {user.status}
                </span>
              </div>
              <div>
                <p className="text-muted-foreground">Balance</p>
                <p className="font-medium">{user.balance}</p>
              </div>
            </div>
          </div>

          {/* KYC Details */}
          <div>
            <h3 className="font-semibold mb-3">KYC Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">KYC Status</p>
                <p className="font-medium capitalize">{user.kycStatus}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Submitted</p>
                <p className="font-medium">2024-01-15</p>
              </div>
            </div>
          </div>

          {/* Device & Security */}
          <div>
            <h3 className="font-semibold mb-3">Device & Security</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Last Device</p>
                <p className="font-medium">{user.device}</p>
              </div>
              <div>
                <p className="text-muted-foreground">IP Address</p>
                <p className="font-mono text-xs">{user.ip}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Login</p>
                <p className="font-medium">{user.lastLogin}</p>
              </div>
              <div>
                <p className="text-muted-foreground">2FA Status</p>
                <span className="flex items-center gap-1 text-accent font-medium">
                  <Shield size={14} /> Enabled
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-destructive/20 text-destructive rounded-lg hover:bg-destructive/30 transition-all text-sm font-medium">
              <Lock size={16} /> Freeze User
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-amber/20 text-amber rounded-lg hover:bg-amber/30 transition-all text-sm font-medium">
              <RotateCcw size={16} /> Reset 2FA
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-foreground rounded-lg hover:bg-white/10 transition-all text-sm font-medium">
              <Trash2 size={16} /> Delete Withdrawals
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
