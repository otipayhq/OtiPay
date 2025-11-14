'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', buy: 4200, sell: 2400 },
  { day: 'Tue', buy: 3200, sell: 1398 },
  { day: 'Wed', buy: 2290, sell: 9800 },
  { day: 'Thu', buy: 2290, sell: 3908 },
  { day: 'Fri', buy: 2000, sell: 4800 },
  { day: 'Sat', buy: 2181, sell: 3800 },
  { day: 'Sun', buy: 2500, sell: 4300 },
]

export function ChartBuySell() {
  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 text-sm sm:text-base">Buy vs Sell Volume</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
          <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(26, 40, 71, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Bar dataKey="buy" fill="#1E40FF" radius={[8, 8, 0, 0]} />
          <Bar dataKey="sell" fill="#39FF88" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
