'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export function ReserveLiquidity() {
  const data = [
    { name: 'Available', value: 65 },
    { name: 'Reserved', value: 25 },
    { name: 'Pending', value: 10 },
  ]

  const COLORS = ['#39FF88', '#1E40FF', '#F59E0B']

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4">Reserve Liquidity Visualization</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
