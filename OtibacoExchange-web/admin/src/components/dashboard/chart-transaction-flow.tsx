'use client'

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { time: '00:00', value: 12 },
  { time: '04:00', value: 18 },
  { time: '08:00', value: 35 },
  { time: '12:00', value: 28 },
  { time: '16:00', value: 42 },
  { time: '20:00', value: 38 },
  { time: '23:59', value: 45 },
]

export function ChartTransactionFlow() {
  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 text-sm sm:text-base">Real-time Transaction Flow</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorFlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E40FF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#1E40FF" stopOpacity={0.0} />
            </linearGradient>
          </defs>
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
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1E40FF"
            fillOpacity={1}
            fill="url(#colorFlow)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
