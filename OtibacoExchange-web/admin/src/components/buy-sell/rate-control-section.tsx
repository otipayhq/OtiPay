'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, Settings } from 'lucide-react'

export function RateControlSection() {
  const [buyRate, setBuyRate] = useState(1650.50)
  const [sellRate, setSellRate] = useState(1652.30)
  const [spread, setSpread] = useState(0.11)
  const [autoAdjust, setAutoAdjust] = useState(true)
  const [message, setMessage] = useState('')

  const handleBuyIncrease = () => {
    setBuyRate(prev => prev + 1)
    setMessage('✓ Buy rate increased')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleBuyDecrease = () => {
    setBuyRate(prev => prev - 1)
    setMessage('✓ Buy rate decreased')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleSellIncrease = () => {
    setSellRate(prev => prev + 1)
    setMessage('✓ Sell rate increased')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleSellDecrease = () => {
    setSellRate(prev => prev - 1)
    setMessage('✓ Sell rate decreased')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
      {/* Buy Rate Card */}
      <div className="metric-card neon-glow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">Current Buy Rate</p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">₦{buyRate.toFixed(2)}</p>
          </div>
          <TrendingUp size={20} className="text-accent flex-shrink-0" />
        </div>
        <div className="flex gap-2 mt-4">
          <button 
            onClick={handleBuyIncrease}
            className="flex-1 py-2 text-xs sm:text-sm bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition-all"
          >
            Increase
          </button>
          <button 
            onClick={handleBuyDecrease}
            className="flex-1 py-2 text-xs sm:text-sm bg-destructive/20 text-destructive rounded-lg font-medium hover:bg-destructive/30 transition-all"
          >
            Decrease
          </button>
        </div>
      </div>

      {/* Sell Rate Card */}
      <div className="metric-card neon-glow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">Current Sell Rate</p>
            <p className="text-2xl sm:text-3xl font-bold text-secondary">₦{sellRate.toFixed(2)}</p>
          </div>
          <TrendingDown size={20} className="text-secondary flex-shrink-0" />
        </div>
        <div className="flex gap-2 mt-4">
          <button 
            onClick={handleSellIncrease}
            className="flex-1 py-2 text-xs sm:text-sm bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition-all"
          >
            Increase
          </button>
          <button 
            onClick={handleSellDecrease}
            className="flex-1 py-2 text-xs sm:text-sm bg-destructive/20 text-destructive rounded-lg font-medium hover:bg-destructive/30 transition-all"
          >
            Decrease
          </button>
        </div>
      </div>

      {/* Spread & Auto-Adjust */}
      <div className="metric-card">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2">Spread Percentage</p>
        <p className="text-xl sm:text-2xl font-bold text-primary mb-4">{spread.toFixed(2)}%</p>
        <input
          type="range"
          min="0"
          max="2"
          step="0.01"
          value={spread}
          onChange={(e) => setSpread(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Auto Adjustment */}
      <div className="metric-card">
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Settings size={18} className="text-primary flex-shrink-0" />
            <p className="font-medium text-xs sm:text-sm truncate">Automated Rate</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
            <input
              type="checkbox"
              checked={autoAdjust}
              onChange={(e) => setAutoAdjust(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {autoAdjust ? 'Using Binance API data' : 'Manual control mode'}
        </p>
      </div>

      {message && (
        <div className="md:col-span-2 p-3 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium animate-pulse text-center">
          {message}
        </div>
      )}
    </div>
  )
}
