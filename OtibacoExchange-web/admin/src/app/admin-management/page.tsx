'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { MetricCard } from '@/components/metric-card'
import { Shield, UserPlus, Eye, ChevronRight, Lock, Trash2 } from 'lucide-react'

interface Admin {
  id: string
  name: string
  email: string
  role: 'super-admin' | 'admin' | 'moderator'
  ipWhitelist: string[]
  lastLogin: string
  status: 'active' | 'suspended'
  twoFa: boolean
}

export default function AdminManagementPage() {
  const [admins] = useState<Admin[]>([
    {
      id: 'ADM-001',
      name: 'Admin User',
      email: 'admin@otipay.com',
      role: 'super-admin',
      ipWhitelist: ['192.168.1.1', '203.0.113.45'],
      lastLogin: '2 mins ago',
      status: 'active',
      twoFa: true,
    },
    {
      id: 'ADM-002',
      name: 'Sarah Admin',
      email: 'sarah@otipay.com',
      role: 'admin',
      ipWhitelist: ['192.168.1.100'],
      lastLogin: '30 mins ago',
      status: 'active',
      twoFa: true,
    },
    {
      id: 'ADM-003',
      name: 'Mike Admin',
      email: 'mike@otipay.com',
      role: 'moderator',
      ipWhitelist: ['192.168.1.101', '198.51.100.32'],
      lastLogin: '2 hours ago',
      status: 'active',
      twoFa: false,
    },
  ])

  const roleColors = {
    'super-admin': 'bg-destructive/20 text-destructive',
    'admin': 'bg-primary/20 text-primary',
    'moderator': 'bg-accent/20 text-accent',
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Management</h1>
              <p className="text-muted-foreground">Manage administrator accounts and permissions</p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <UserPlus size={18} />
              Add New Admin
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              title="Total Admins"
              value="3"
              icon={<Shield size={24} />}
              glow
            />
            <MetricCard
              title="Super Admins"
              value="1"
              icon={<Lock size={24} />}
              glow
            />
            <MetricCard
              title="Active Sessions"
              value="2"
              icon={<Eye size={24} />}
              glow
            />
          </div>

          {/* Admin List */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4">Administrator Accounts</h3>
            <div className="space-y-3">
              {admins.map((admin) => (
                <div key={admin.id} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold">{admin.name}</p>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${roleColors[admin.role]}`}>
                          {admin.role.replace('-', ' ')}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          admin.status === 'active'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-destructive/20 text-destructive'
                        }`}>
                          {admin.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{admin.email}</p>
                      <div className="grid grid-cols-3 gap-3 text-xs">
                        <div>
                          <p className="text-muted-foreground">Last Login</p>
                          <p className="font-medium">{admin.lastLogin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">2FA Status</p>
                          <p className={admin.twoFa ? 'text-accent' : 'text-destructive'}>
                            {admin.twoFa ? 'Enabled' : 'Disabled'}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">IPs Whitelisted</p>
                          <p className="font-medium">{admin.ipWhitelist.length}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="p-2 hover:bg-white/10 rounded transition-all">
                        <Eye size={18} className="text-primary" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded transition-all">
                        <Trash2 size={18} className="text-destructive" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
