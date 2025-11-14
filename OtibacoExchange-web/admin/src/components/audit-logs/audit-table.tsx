'use client'

import { Shield, Eye } from 'lucide-react'

interface AuditLog {
  id: string
  action: string
  admin: string
  device: string
  ip: string
  timestamp: string
  oldValue?: string
  newValue?: string
  reason?: string
}

export function AuditTable() {
  const logs: AuditLog[] = [
    {
      id: 'LOG-0001',
      action: 'Updated Exchange Rate',
      admin: 'Admin User',
      device: 'Chrome/macOS',
      ip: '192.168.1.100',
      timestamp: '2 mins ago',
      oldValue: '₦1,650.50',
      newValue: '₦1,650.30',
      reason: 'Market adjustment',
    },
    {
      id: 'LOG-0002',
      action: 'Froze User Account',
      admin: 'Sarah Admin',
      device: 'Safari/iOS',
      ip: '192.168.1.101',
      timestamp: '15 mins ago',
      reason: 'Suspicious activity detected',
    },
    {
      id: 'LOG-0003',
      action: 'Approved KYC',
      admin: 'Mike Admin',
      device: 'Firefox/Windows',
      ip: '192.168.1.102',
      timestamp: '1 hour ago',
      oldValue: 'Pending',
      newValue: 'Verified',
    },
    {
      id: 'LOG-0004',
      action: 'Added Liquidity',
      admin: 'Admin User',
      device: 'Chrome/macOS',
      ip: '192.168.1.100',
      timestamp: '3 hours ago',
      oldValue: '₦45.2M',
      newValue: '₦50.5M',
      reason: 'Liquidity injection',
    },
  ]

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Shield size={20} className="text-primary" />
        Audit Logs
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Action</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Admin</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Device</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">IP Address</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Old → New</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium">{log.action}</p>
                    <p className="text-xs text-muted-foreground">{log.reason || 'N/A'}</p>
                  </div>
                </td>
                <td className="py-3 px-4">{log.admin}</td>
                <td className="py-3 px-4 text-xs text-muted-foreground">{log.device}</td>
                <td className="py-3 px-4 text-xs text-muted-foreground font-mono">{log.ip}</td>
                <td className="py-3 px-4 text-xs">
                  {log.oldValue && log.newValue ? (
                    <span>
                      <span className="text-destructive">{log.oldValue}</span>
                      <span className="text-muted-foreground"> → </span>
                      <span className="text-accent">{log.newValue}</span>
                    </span>
                  ) : (
                    'N/A'
                  )}
                </td>
                <td className="py-3 px-4 text-muted-foreground">{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
