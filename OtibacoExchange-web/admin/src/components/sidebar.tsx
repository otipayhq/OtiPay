'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, TrendingUp, Users, Wallet, BarChart3, Zap, Ticket, Bell, LogOut, Settings, Shield, Menu, X } from 'lucide-react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: TrendingUp, label: 'Transactions', href: '/transactions' },
    { icon: Users, label: 'Users & KYC', href: '/users' },
    { icon: Zap, label: 'Buy/Sell', href: '/buy-sell' },
    { icon: Wallet, label: 'Wallet', href: '/wallet' },
    { icon: BarChart3, label: 'Rates', href: '/rates' },
    { icon: Ticket, label: 'Support', href: '/tickets' },
    { icon: Bell, label: 'Alerts', href: '/notifications' },
    { icon: Shield, label: 'Audit', href: '/audit-logs' },
    { icon: Users, label: 'Admin', href: '/admin-management' },
  ]

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 glass-panel backdrop-blur-xl bg-card/50 border-r border-white/10 transition-transform duration-300 transform lg:translate-x-0 z-40 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 sm:p-6 pt-16 lg:pt-4 sm:pt-6">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">OP</span>
            </div>
            <span className="font-bold text-sm sm:text-base">OtiPay</span>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 group ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                }`}
              >
                <item.icon size={18} className={isActive(item.href) ? 'text-primary flex-shrink-0' : 'group-hover:text-primary transition-colors flex-shrink-0'} />
                <span className="text-xs sm:text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-white/10 bg-gradient-to-t from-card/50 space-y-2">
          <Link href="/settings" className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all duration-200">
            <Settings size={18} className="flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Settings</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-foreground/70 hover:text-destructive hover:bg-destructive/5 transition-all duration-200">
            <LogOut size={18} className="flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
