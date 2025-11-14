'use client'

import { useState } from 'react'
import { Search, Bell, User, Power, Menu, X } from 'lucide-react'

export function TopNav() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 glass-panel backdrop-blur-xl bg-card/50 border-b border-white/10 z-30">
      <div className="h-full px-3 sm:px-4 md:px-6 flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
        {/* Search - Hidden on mobile by default */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-4 py-2 bg-input/50 border border-white/10 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          {/* Mobile Search Toggle */}
          <button className="sm:hidden p-2 text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200">
            <Search size={18} />
          </button>

          <button className="relative p-2 text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </button>

          <div className="hidden md:flex items-center gap-2 pl-3 md:pl-4 border-l border-white/10">
            <div className="flex flex-col items-end text-right">
              <span className="font-medium text-xs sm:text-sm">Admin User</span>
              <span className="text-xs text-muted-foreground">2m ago</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">AU</span>
            </div>
          </div>

          {/* Mobile avatar only */}
          <div className="md:hidden w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">AU</span>
          </div>

          <button className="p-2 text-foreground/70 hover:text-destructive hover:bg-destructive/5 rounded-lg transition-all duration-200">
            <Power size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
