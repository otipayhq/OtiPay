'use client'

import { useState } from 'react'
import { Eye, Check, X } from 'lucide-react'

interface Order {
  id: string
  user: string
  amount: string
  rate: string
  time: string
  status: 'completed' | 'pending' | 'failed'
}

interface OrdersTableProps {
  title: string
  orders: Order[]
}

export function OrdersTable({ title, orders: initialOrders }: OrdersTableProps) {
  const [orders, setOrders] = useState(initialOrders)
  const [message, setMessage] = useState('')

  const statusColors = {
    completed: 'bg-accent/20 text-accent',
    pending: 'bg-amber/20 text-amber',
    failed: 'bg-destructive/20 text-destructive',
  }

  const handleApprove = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'completed' as const } : o))
    setMessage('✓ Order approved')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleReject = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'failed' as const } : o))
    setMessage('✓ Order rejected')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-3 text-xs sm:text-base">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">User</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Amount</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden sm:table-cell">Rate</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden md:table-cell">Time</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Status</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <p className="font-medium truncate text-xs sm:text-sm">{order.user}</p>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">{order.amount}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-secondary hidden sm:table-cell">{order.rate}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground hidden md:table-cell text-xs">{order.time}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium inline-block whitespace-nowrap ${statusColors[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center justify-center gap-1">
                    {order.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleApprove(order.id)}
                          className="p-1 text-accent hover:bg-accent/10 rounded transition-all"
                          title="Approve"
                        >
                          <Check size={16} />
                        </button>
                        <button 
                          onClick={() => handleReject(order.id)}
                          className="p-1 text-destructive hover:bg-destructive/10 rounded transition-all"
                          title="Reject"
                        >
                          <X size={16} />
                        </button>
                      </>
                    )}
                    {order.status !== 'pending' && (
                      <button className="p-1 text-primary hover:text-primary/70 transition-colors">
                        <Eye size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {message && (
        <div className="mt-3 p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs text-center animate-pulse">
          {message}
        </div>
      )}
    </div>
  )
}
