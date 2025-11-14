'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { TransactionFilters } from '@/components/transactions/transaction-filters'
import { TransactionTable } from '@/components/transactions/transaction-table'
import { MetricCard } from '@/components/metric-card'
import { TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Transactions Management</h1>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Monitor and manage all platform transactions</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            <MetricCard
              title="Total Today"
              value="₦2.4M"
              icon={<TrendingUp size={24} />}
              trend={{ value: 12, isPositive: true }}
              glow
            />
            <MetricCard
              title="Completed"
              value="1,248"
              icon={<CheckCircle2 size={24} />}
              trend={{ value: 8, isPositive: true }}
              glow
            />
            <MetricCard
              title="Flagged"
              value="14"
              icon={<AlertTriangle size={24} />}
              trend={{ value: 2, isPositive: false }}
              glow
            />
          </div>

          <TransactionFilters />
          <TransactionTable />
        </div>
      </main>
    </div>
  )
}
