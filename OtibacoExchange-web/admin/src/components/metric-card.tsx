import { ReactNode } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  icon: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'cyan'
  glow?: boolean
}

export function MetricCard({
  title,
  value,
  icon,
  trend,
  color = 'primary',
  glow = true,
}: MetricCardProps) {
  const colorClasses = {
    primary: 'text-primary',
    success: 'text-accent',
    warning: 'text-amber',
    danger: 'text-destructive',
    cyan: 'text-secondary',
  }

  return (
    <div className={`metric-card ${glow ? 'neon-glow' : ''} ${glow ? 'neon-border-blue' : ''}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-xl sm:text-2xl font-bold">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 mt-2 text-xs">
              {trend.isPositive ? (
                <>
                  <TrendingUp size={14} className="text-accent" />
                  <span className="text-accent">+{trend.value}%</span>
                </>
              ) : (
                <>
                  <TrendingDown size={14} className="text-destructive" />
                  <span className="text-destructive">{trend.value}%</span>
                </>
              )}
            </div>
          )}
        </div>
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  )
}
