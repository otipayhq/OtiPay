import { CheckCircle2, ArrowRight } from 'lucide-react'

interface DeviceApprovedProps {
  onContinue: () => void
}

export function DeviceApproved({ onContinue }: DeviceApprovedProps) {
  return (
    <div className="space-y-6 text-center">
      <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center neon-glow">
        <CheckCircle2 size={32} className="text-accent" />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Device Approved</h2>
        <p className="text-muted-foreground">Your device has been successfully verified. You're now logged in securely.</p>
      </div>

      <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm">
        <p className="text-accent font-medium">This device will be trusted for 30 days. After that, you'll need to verify again.</p>
      </div>

      <button
        onClick={onContinue}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 neon-glow"
      >
        Go to Dashboard <ArrowRight size={18} />
      </button>
    </div>
  )
}
