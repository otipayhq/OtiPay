'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { MetricCard } from '@/components/metric-card'
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

const rateHistory = [
  { time: '00:00', rate: 1640 },
  { time: '06:00', rate: 1645 },
  { time: '12:00', rate: 1650 },
  { time: '18:00', rate: 1652 },
  { time: '23:59', rate: 1650 },
]

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Exchange Rate Engine</h1>
            <p className="text-muted-foreground">Monitor and control exchange rates</p>
          </div>

          {/* Current Rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              title="Current Buy Rate"
              value="₦1,650.50"
              icon={<TrendingUp size={24} />}
              color="primary"
              glow
            />
            <MetricCard
              title="Current Sell Rate"
              value="₦1,652.30"
              icon={<TrendingDown size={24} />}
              color="success"
              glow
            />
            <MetricCard
              title="Spread"
              value="0.11%"
              icon={<AlertCircle size={24} />}
              color="cyan"
              glow
            />
          </div>

          {/* Rate Chart */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4">24h Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rateHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(26, 40, 71, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="rate" stroke="#1E40FF" strokeWidth={2} dot={{ fill: '#1E40FF' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Rate Alerts */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4">Rate Alerts</h3>
            <div className="space-y-3">
              <div className="p-4 bg-amber/20 border border-amber/30 rounded-lg">
                <p className="font-medium text-sm">Rate approaching upper threshold</p>
                <p className="text-xs text-muted-foreground mt-1">Current rate is 0.5% below maximum configured rate</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
