'use client'

export function LiquidityDisplay() {
  const liquidityUSDT = { amount: '₦150,000', percentage: 85 }
  const liquidityNGN = { amount: '₦2,400,000', percentage: 92 }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* USDT Liquidity */}
      <div className="metric-card">
        <p className="text-sm text-muted-foreground mb-2">USDT Liquidity Available</p>
        <p className="text-2xl font-bold text-secondary mb-4">{liquidityUSDT.amount}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Pool Utilization</span>
            <span className="font-medium">{liquidityUSDT.percentage}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-accent"
              style={{ width: `${liquidityUSDT.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* NGN Liquidity */}
      <div className="metric-card">
        <p className="text-sm text-muted-foreground mb-2">NGN Float Available</p>
        <p className="text-2xl font-bold text-primary mb-4">{liquidityNGN.amount}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Pool Utilization</span>
            <span className="font-medium">{liquidityNGN.percentage}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${liquidityNGN.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Add/Remove Liquidity */}
      <div className="md:col-span-2 metric-card">
        <p className="font-semibold mb-4">Liquidity Management</p>
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 bg-accent/20 text-accent rounded-lg font-medium hover:bg-accent/30 transition-all">
            Add Liquidity
          </button>
          <button className="py-3 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition-all">
            Remove Liquidity
          </button>
        </div>
      </div>
    </div>
  )
}
