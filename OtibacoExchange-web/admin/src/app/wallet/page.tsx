'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { WalletOverview } from '@/components/wallet/wallet-overview'
import { ReserveLiquidity } from '@/components/wallet/reserve-liquidity'
import { WalletHistory } from '@/components/wallet/wallet-history'

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Wallet & Liquidity Management</h1>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Real-time wallet balances and reserve monitoring</p>
          </div>

          <WalletOverview />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <ReserveLiquidity />
            <WalletHistory />
          </div>
        </div>
      </main>
    </div>
  )
}
