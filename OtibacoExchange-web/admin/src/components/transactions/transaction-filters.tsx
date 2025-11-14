'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'

export function TransactionFilters() {
  const [dateRange, setDateRange] = useState('today')
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')

  return (
    <div className="metric-card">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-primary" />
        <h3 className="font-semibold">Filters</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Date Range</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="flagged">Flagged</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Transaction Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">All</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
            <option value="withdrawal">Withdrawal</option>
            <option value="deposit">Deposit</option>
          </select>
        </div>
      </div>
    </div>
  )
}
