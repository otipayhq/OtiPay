'use client'

import { Activity, AlertTriangle, FileCheck, Settings, Zap } from 'lucide-react'

interface ActivityItem {
  id: string
  type: 'transaction' | 'kyc' | 'alert' | 'update' | 'fraud'
  message: string
  timestamp: string
  color: string
  icon: React.ReactNode
}

export function LiveActivityFeed() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'transaction',
      message: 'User bought 200 USDT at ₦1,850/USDT',
      timestamp: '2 mins ago',
      color: 'text-primary',
      icon: <Zap size={18} />,
    },
    {
      id: '2',
      type: 'kyc',
      message: 'New KYC submitted by John Doe (User ID: USR-2847)',
      timestamp: '5 mins ago',
      color: 'text-secondary',
      icon: <FileCheck size={18} />,
    },
    {
      id: '3',
      type: 'alert',
      message: 'Suspicious device login attempt blocked from Singapore IP',
      timestamp: '12 mins ago',
      color: 'text-amber',
      icon: <AlertTriangle size={18} />,
    },
    {
      id: '4',
      type: 'update',
      message: 'Admin updated USDT exchange rate to ₦1,652.30',
      timestamp: '18 mins ago',
      color: 'text-accent',
      icon: <Settings size={18} />,
    },
    {
      id: '5',
      type: 'fraud',
      message: 'Fraud risk detected: Multiple failed KYC attempts from same IP',
      timestamp: '28 mins ago',
      color: 'text-destructive',
      icon: <AlertTriangle size={18} />,
    },
  ]

  return (
    <div className="metric-card h-full">
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
        <Activity size={20} className="text-primary" />
        Live Activity Feed
      </h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer border border-white/5">
            <div className={`flex-shrink-0 ${activity.color} mt-1`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium line-clamp-2">{activity.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
