'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { RateControlSection } from '@/components/buy-sell/rate-control-section'
import { LiquidityDisplay } from '@/components/buy-sell/liquidity-display'
import { OrdersTable } from '@/components/buy-sell/orders-table'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const rateHistory = [
  { time: '00:00', buy: 1640, sell: 1642 },
  { time: '04:00', buy: 1645, sell: 1647 },
  { time: '08:00', buy: 1648, sell: 1650 },
  { time: '12:00', buy: 1650, sell: 1652 },
  { time: '16:00', buy: 1652, sell: 1654 },
  { time: '20:00', buy: 1650, sell: 1652 },
  { time: '23:59', buy: 1650, sell: 1652 },
]

const buyOrders = [
  { id: '1', user: 'John Doe', amount: '500 USDT', rate: '₦1,650.50', time: '2 mins ago', status: 'completed' as const },
  { id: '2', user: 'Jane Smith', amount: '1,200 USDT', rate: '₦1,650.30', time: '5 mins ago', status: 'completed' as const },
  { id: '3', user: 'Mike Johnson', amount: '300 USDT', rate: '₦1,650.50', time: '12 mins ago', status: 'pending' as const },
]

const sellOrders = [
  { id: '1', user: 'Alice Brown', amount: '800 USDT', rate: '₦1,648.20', time: '1 min ago', status: 'completed' as const },
  { id: '2', user: 'Bob Wilson', amount: '2,500 USDT', rate: '₦1,648.50', time: '8 mins ago', status: 'completed' as const },
  { id: '3', user: 'Sarah Lee', amount: '600 USDT', rate: '₦1,648.30', time: '15 mins ago', status: 'failed' as const },
]

export default function BuySellPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Buy & Sell Management</h1>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Manage exchange rates and liquidity</p>
          </div>

          <RateControlSection />
          <LiquidityDisplay />

          <div className="metric-card">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Exchange Rate History</h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-80">
              <LineChart data={rateHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(26, 40, 71, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="buy" stroke="#1E40FF" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sell" stroke="#39FF88" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <OrdersTable title="Recent Buy Orders" orders={buyOrders} />
            <OrdersTable title="Recent Sell Orders" orders={sellOrders} />
          </div>
        </div>
      </main>
    </div>
  )
}
