'use client'

import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-destructive bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-sm mx-auto">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-destructive/10 border border-destructive/20 rounded-full flex items-center justify-center">
            <span className="text-3xl sm:text-4xl">🔍</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold rounded-lg transition-all duration-200 group text-sm sm:text-base"
          >
            <Home size={18} />
            Back to Dashboard
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-foreground font-semibold rounded-lg transition-all duration-200 border border-white/10 text-sm sm:text-base"
          >
            Go Home
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-white/10 space-y-3">
          <p className="text-xs sm:text-sm text-muted-foreground">Quick Links</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Users', href: '/users' },
              { label: 'Transactions', href: '/transactions' },
              { label: 'Support', href: '/tickets' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/5 hover:bg-primary/20 rounded-lg transition-all duration-200 border border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
