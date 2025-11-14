'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { UserListTable } from '@/components/users/user-list-table'
import { UserDetailModal } from '@/components/users/user-detail-modal'
import { KYCQueue } from '@/components/users/kyc-queue'
import { MetricCard } from '@/components/metric-card'
import { Users, CheckCircle2, AlertTriangle, Clock } from 'lucide-react'

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Users & KYC Management</h1>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Manage user accounts and verification documents</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <MetricCard
              title="Total Users"
              value="8,234"
              icon={<Users size={24} />}
              trend={{ value: 12, isPositive: true }}
              glow
            />
            <MetricCard
              title="KYC Verified"
              value="7,842"
              icon={<CheckCircle2 size={24} />}
              trend={{ value: 8, isPositive: true }}
              glow
            />
            <MetricCard
              title="Pending KYC"
              value="142"
              icon={<Clock size={24} />}
              trend={{ value: 3, isPositive: false }}
              glow
            />
            <MetricCard
              title="Flagged Users"
              value="28"
              icon={<AlertTriangle size={24} />}
              trend={{ value: 2, isPositive: false }}
              glow
            />
          </div>

          {/* KYC Queue */}
          <KYCQueue />

          {/* User List - Horizontal scroll on mobile */}
          <UserListTable onUserClick={setSelectedUser} />
        </div>
      </main>

      {selectedUser && <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  )
}
