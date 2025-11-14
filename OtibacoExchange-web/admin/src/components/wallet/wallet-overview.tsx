'use client'

import { Wallet, TrendingDown, TrendingUp, Copy } from 'lucide-react'

export function WalletOverview() {
  const wallets = [
    {
      name: 'Company USDT Wallet',
      balance: '₦45,234,500',
      confirmations: '3/3 confirmed',
      type: 'usdt',
    },
    {
      name: 'Company NGN Float',
      balance: '₦89,450,000',
      confirmations: 'N/A',
      type: 'ngn',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {wallets.map((wallet) => (
        <div key={wallet.name} className="metric-card neon-glow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{wallet.name}</p>
              <p className="text-3xl font-bold">{wallet.balance}</p>
            </div>
            <Wallet size={24} className="text-primary" />
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-2 bg-white/5 rounded">
              <span className="text-muted-foreground">Confirmations</span>
              <span className="font-medium">{wallet.confirmations}</span>
            </div>

            <div className="flex justify-between p-2 bg-white/5 rounded">
              <span className="text-muted-foreground">Wallet Address</span>
              <button className="text-primary hover:text-primary/70 flex items-center gap-1">
                <span className="text-xs font-mono">0x742d...e4a2</span>
                <Copy size={14} />
              </button>
            </div>

            <button className="w-full py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-all text-sm font-medium">
              View Full Address
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
