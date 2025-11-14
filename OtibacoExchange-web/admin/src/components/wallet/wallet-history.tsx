'use client'

import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

interface WalletTransaction {
  id: string
  type: 'inflow' | 'outflow'
  amount: string
  description: string
  timestamp: string
  txHash: string
}

export function WalletHistory() {
  const transactions: WalletTransaction[] = [
    {
      id: '1',
      type: 'inflow',
      amount: '₦5,000,000',
      description: 'User deposits from bank transfers',
      timestamp: '2 hours ago',
      txHash: '0x742d...e4a2',
    },
    {
      id: '2',
      type: 'outflow',
      amount: '₦2,500,000',
      description: 'Payout to users',
      timestamp: '4 hours ago',
      txHash: '0x8eff...a1c3',
    },
    {
      id: '3',
      type: 'inflow',
      amount: '₦8,250,000',
      description: 'Liquidity injection',
      timestamp: '1 day ago',
      txHash: '0x3421...b9f0',
    },
  ]

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4">Wallet History</h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                tx.type === 'inflow' ? 'bg-accent/20' : 'bg-amber/20'
              }`}>
                {tx.type === 'inflow' ? (
                  <ArrowDownLeft size={20} className="text-accent" />
                ) : (
                  <ArrowUpRight size={20} className="text-amber" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{tx.description}</p>
                <p className="text-xs text-muted-foreground font-mono">{tx.txHash}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold text-sm ${tx.type === 'inflow' ? 'text-accent' : 'text-amber'}`}>
                {tx.type === 'inflow' ? '+' : '-'}{tx.amount}
              </p>
              <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
