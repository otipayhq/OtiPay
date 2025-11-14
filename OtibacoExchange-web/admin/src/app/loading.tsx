import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse shadow-lg shadow-primary/50">
            <span className="text-white font-bold text-3xl sm:text-4xl">OP</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-cyan bg-clip-text text-transparent">
            OtiPay
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Loading your dashboard...</p>
        </div>

        {/* Spinner */}
        <div className="flex justify-center">
          <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 animate-spin text-primary" />
        </div>

        {/* Loading Bar Animation */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-8">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-cyan rounded-full animate-pulse" style={{ animation: 'slide 2s infinite' }} />
        </div>

        <style>{`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  )
}
