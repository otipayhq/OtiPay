'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to dashboard on mount
    router.push('/dashboard')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-2xl">OP</span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">OtiPay Admin</h1>
        <p className="text-base sm:text-lg text-muted-foreground">Redirecting to dashboard...</p>
        <div className="flex justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      </div>
    </div>
  )
}
