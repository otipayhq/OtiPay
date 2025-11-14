'use client'

import { Bell, AlertTriangle, CheckCircle2, Info, Zap } from 'lucide-react'

interface Notification {
  id: string
  type: 'fraud' | 'kyc' | 'transaction' | 'system' | 'admin'
  title: string
  message: string
  timestamp: string
  read: boolean
  actionable?: boolean
}

export function NotificationCenter() {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'fraud',
      title: 'Fraud Alert',
      message: 'Suspicious login detected from Singapore IP address',
      timestamp: '5 mins ago',
      read: false,
      actionable: true,
    },
    {
      id: '2',
      type: 'kyc',
      title: 'KYC Update',
      message: 'New KYC submissions require review (5 pending)',
      timestamp: '12 mins ago',
      read: false,
      actionable: true,
    },
    {
      id: '3',
      type: 'transaction',
      title: 'Transaction Flagged',
      message: 'High-value transaction needs admin approval',
      timestamp: '28 mins ago',
      read: true,
    },
    {
      id: '4',
      type: 'admin',
      title: 'Admin Activity',
      message: 'Exchange rate updated by Sarah Admin',
      timestamp: '1 hour ago',
      read: true,
    },
    {
      id: '5',
      type: 'system',
      title: 'System Update',
      message: 'Scheduled maintenance completed successfully',
      timestamp: '3 hours ago',
      read: true,
    },
  ]

  const notificationConfig = {
    fraud: { icon: AlertTriangle, color: 'bg-destructive/20 text-destructive' },
    kyc: { icon: Info, color: 'bg-primary/20 text-primary' },
    transaction: { icon: Zap, color: 'bg-amber/20 text-amber' },
    system: { icon: CheckCircle2, color: 'bg-accent/20 text-accent' },
    admin: { icon: Bell, color: 'bg-secondary/20 text-secondary' },
  }

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell size={20} className="text-primary" />
          <h3 className="font-semibold">Notifications</h3>
          <span className="px-2 py-0.5 rounded-full text-xs bg-destructive/20 text-destructive font-medium">
            {notifications.filter(n => !n.read).length} unread
          </span>
        </div>
        <button className="text-xs text-primary hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {notifications.map((notif) => {
          const config = notificationConfig[notif.type]
          const Icon = config.icon

          return (
            <div
              key={notif.id}
              className={`p-3 rounded-lg border transition-all ${
                notif.read
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/10 border-white/20'
              } hover:bg-white/15 cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${config.color}`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{notif.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.timestamp}</p>
                  {notif.actionable && (
                    <button className="text-xs text-primary hover:underline mt-1">
                      Take action
                    </button>
                  )}
                </div>
                {!notif.read && (
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                )}
              </div>
            </div>
          )
        })}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-primary hover:bg-white/5 rounded-lg transition-all">
        View all notifications
      </button>
    </div>
  )
}
