'use client'

import { useState } from 'react'
import { Eye, AlertTriangle, Check, X } from 'lucide-react'

interface Transaction {
  id: string
  user: string
  type: 'buy' | 'sell' | 'withdrawal' | 'deposit'
  amountUSDT: string
  amountNGN: string
  status: 'completed' | 'pending' | 'failed' | 'flagged'
  rateApplied: string
  timestamp: string
  device: string
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'TXN-0001',
      user: 'John Doe',
      type: 'buy',
      amountUSDT: '500 USDT',
      amountNGN: '₦825,250',
      status: 'completed',
      rateApplied: '₦1,650.50',
      timestamp: '2 mins ago',
      device: 'Chrome/macOS',
    },
    {
      id: 'TXN-0002',
      user: 'Jane Smith',
      type: 'sell',
      amountUSDT: '1,200 USDT',
      amountNGN: '₦1,978,140',
      status: 'completed',
      rateApplied: '₦1,648.45',
      timestamp: '5 mins ago',
      device: 'Safari/iOS',
    },
    {
      id: 'TXN-0003',
      user: 'Mike Johnson',
      type: 'buy',
      amountUSDT: '300 USDT',
      amountNGN: '₦495,150',
      status: 'pending',
      rateApplied: '₦1,650.50',
      timestamp: '12 mins ago',
      device: 'Firefox/Windows',
    },
    {
      id: 'TXN-0004',
      user: 'Alice Brown',
      type: 'withdrawal',
      amountUSDT: '800 USDT',
      amountNGN: '₦1,318,400',
      status: 'flagged',
      rateApplied: '₦1,648.00',
      timestamp: '18 mins ago',
      device: 'Unknown',
    },
  ])
  const [message, setMessage] = useState('')

  const statusColors = {
    completed: 'bg-accent/20 text-accent',
    pending: 'bg-amber/20 text-amber',
    failed: 'bg-destructive/20 text-destructive',
    flagged: 'bg-destructive/20 text-destructive',
  }

  const typeColors = {
    buy: 'text-primary',
    sell: 'text-accent',
    withdrawal: 'text-amber',
    deposit: 'text-secondary',
  }

  const handleApprove = (id: string) => {
    setTransactions(transactions.map(t => t.id === id ? { ...t, status: 'completed' as const } : t))
    setMessage('✓ Transaction approved')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleReject = (id: string) => {
    setTransactions(transactions.map(t => t.id === id ? { ...t, status: 'failed' as const } : t))
    setMessage('✓ Transaction rejected')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <>
      <div className="metric-card overflow-hidden">
        <h3 className="font-semibold mb-3 text-xs sm:text-base">Transactions</h3>
        <div className="overflow-x-auto -mx-4 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">ID</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">User</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden sm:table-cell">Type</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden lg:table-cell">USDT</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">NGN</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-center py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-all"
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono text-xs">{txn.id}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div>
                      <p className="font-medium truncate text-xs sm:text-sm">{txn.user}</p>
                      <p className="text-xs text-muted-foreground hidden sm:block">{txn.device}</p>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 hidden sm:table-cell">
                    <span className={`font-medium capitalize text-xs ${typeColors[txn.type]}`}>{txn.type}</span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 hidden lg:table-cell text-xs">{txn.amountUSDT}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">{txn.amountNGN}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div className="flex items-center gap-1">
                      {txn.status === 'flagged' && <AlertTriangle size={14} className="text-destructive flex-shrink-0" />}
                      <span className={`px-2 py-1 rounded text-xs font-medium inline-block whitespace-nowrap ${statusColors[txn.status]}`}>
                        {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {(txn.status === 'pending' || txn.status === 'flagged') && (
                        <>
                          <button 
                            onClick={() => handleApprove(txn.id)}
                            className="p-1 text-accent hover:bg-accent/10 rounded transition-all"
                            title="Approve"
                          >
                            <Check size={16} />
                          </button>
                          <button 
                            onClick={() => handleReject(txn.id)}
                            className="p-1 text-destructive hover:bg-destructive/10 rounded transition-all"
                            title="Reject"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}
                      {txn.status === 'completed' && (
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
      </div>
      {message && (
        <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm text-center font-medium animate-pulse">
          {message}
        </div>
      )}
    </>
  )
}
