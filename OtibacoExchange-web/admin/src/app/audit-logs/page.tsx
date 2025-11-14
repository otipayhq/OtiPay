'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { AuditTable } from '@/components/audit-logs/audit-table'

export default function AuditLogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Audit Logs</h1>
            <p className="text-muted-foreground">Track all admin actions and system changes</p>
          </div>

          <AuditTable />
        </div>
      </main>
    </div>
  )
}
