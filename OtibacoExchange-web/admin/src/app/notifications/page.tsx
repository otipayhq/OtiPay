'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { NotificationCenter } from '@/components/notifications/notification-center'

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">System alerts and notifications</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NotificationCenter />
            </div>
            <div className="metric-card">
              <h3 className="font-semibold mb-4">Notification Settings</h3>
              <div className="space-y-3 text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Fraud Alerts</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>KYC Updates</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Transaction Flags</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Admin Activity</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
