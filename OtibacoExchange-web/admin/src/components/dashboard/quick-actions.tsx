'use client'

import { useState } from 'react'
import { AlertCircle, Lock, TrendingUp, Activity } from 'lucide-react'

export function QuickActions() {
  const [actionStatus, setActionStatus] = useState('')
  const [notifications, setNotifications] = useState<string[]>([])

  const actions = [
    {
      icon: TrendingUp,
      label: 'Adjust USDT Rate',
      description: 'Update exchange rates',
      color: 'primary',
      action: 'Rate Updated Successfully',
    },
    {
      icon: Lock,
      label: 'Pause Buy/Sell',
      description: 'Freeze trading temporarily',
      color: 'amber',
      action: 'Trading Paused',
    },
    {
      icon: AlertCircle,
      label: 'Freeze User',
      description: 'Suspend account access',
      color: 'destructive',
      action: 'User Account Frozen',
    },
    {
      icon: Activity,
      label: 'View Fraud Analysis',
      description: 'Check suspicious activity',
      color: 'secondary',
      action: 'Fraud Report Generated',
    },
  ]

  const handleAction = (action: string) => {
    setActionStatus(`✓ ${action}`)
    setNotifications([...notifications, action])
    setTimeout(() => setActionStatus(''), 2000)
  }

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={() => handleAction(action.action)}
            className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-left group"
          >
            <action.icon size={18} className="mb-2 text-primary group-hover:scale-110 transition-transform" />
            <p className="text-xs sm:text-sm font-medium line-clamp-1">{action.label}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">{action.description}</p>
          </button>
        ))}
      </div>

      {actionStatus && (
        <div className="mt-4 p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm animate-pulse">
          {actionStatus}
        </div>
      )}

      {notifications.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs font-semibold text-muted-foreground mb-2">Recent Actions</p>
          <div className="space-y-1 max-h-16 overflow-y-auto">
            {notifications.slice(-3).reverse().map((notif, idx) => (
              <p key={idx} className="text-xs text-muted-foreground">✓ {notif}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
