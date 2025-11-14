'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { MetricCard } from '@/components/metric-card'
import { ChartTransactionFlow } from '@/components/dashboard/chart-transaction-flow'
import { ChartBuySell } from '@/components/dashboard/chart-buy-sell'
import { LiveActivityFeed } from '@/components/dashboard/live-activity-feed'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { DollarSign, TrendingUp, Users, Zap, Wallet, AlertTriangle } from 'lucide-react'

export default function DashboardPage() {
  const [metrics] = useState([
    { title: 'Total Transactions Today', value: '₦2.4M', icon: DollarSign, trend: { value: 12, isPositive: true }, color: 'primary' as const, glow: true },
    { title: 'Total Volume (24h)', value: '₦8.9M', icon: TrendingUp, trend: { value: 8, isPositive: true }, color: 'cyan' as const, glow: true },
    { title: 'Pending KYC', value: '142', icon: Users, trend: { value: 5, isPositive: false }, color: 'warning' as const, glow: true },
    { title: 'Active Users', value: '8,234', icon: Users, trend: { value: 15, isPositive: true }, color: 'success' as const, glow: true },
    { title: 'Liquidity Pool', value: '₦45.2M', icon: Wallet, trend: { value: 3, isPositive: true }, color: 'cyan' as const, glow: true },
    { title: 'Risk Alerts', value: '8', icon: AlertTriangle, trend: { value: 2, isPositive: false }, color: 'danger' as const, glow: true },
  ])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Dashboard</h1>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Real-time overview of your platform</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {metrics.map((metric, idx) => (
              <MetricCard
                key={idx}
                title={metric.title}
                value={metric.value}
                icon={<metric.icon size={24} />}
                trend={metric.trend}
                color={metric.color}
                glow={metric.glow}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 overflow-hidden rounded-lg">
              <ChartTransactionFlow />
            </div>
            <div className="overflow-hidden rounded-lg">
              <LiveActivityFeed />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg">
              <ChartBuySell />
            </div>
            <div className="overflow-hidden rounded-lg">
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
