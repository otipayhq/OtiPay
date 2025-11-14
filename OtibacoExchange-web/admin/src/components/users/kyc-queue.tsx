'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Clock, Eye } from 'lucide-react'

interface KYCSubmission {
  id: string
  userName: string
  submittedDate: string
  status: 'pending' | 'reviewing' | 'approved' | 'rejected'
  documentsCount: number
}

export function KYCQueue() {
  const [kycs, setKycs] = useState<KYCSubmission[]>([
    { id: 'KYC-001', userName: 'Sarah Johnson', submittedDate: '2024-01-18', status: 'pending', documentsCount: 3 },
    { id: 'KYC-002', userName: 'Michael Brown', submittedDate: '2024-01-17', status: 'reviewing', documentsCount: 4 },
    { id: 'KYC-003', userName: 'Emma Davis', submittedDate: '2024-01-16', status: 'pending', documentsCount: 2 },
    { id: 'KYC-004', userName: 'James Wilson', submittedDate: '2024-01-15', status: 'reviewing', documentsCount: 3 },
  ])

  const handleApprove = (id: string) => {
    setKycs(kycs.filter(kyc => kyc.id !== id))
  }

  const handleReject = (id: string) => {
    setKycs(kycs.filter(kyc => kyc.id !== id))
  }

  const statusConfig = {
    pending: { icon: Clock, color: 'text-amber', bg: 'bg-amber/20' },
    reviewing: { icon: Eye, color: 'text-primary', bg: 'bg-primary/20' },
    approved: { icon: CheckCircle, color: 'text-accent', bg: 'bg-accent/20' },
    rejected: { icon: XCircle, color: 'text-destructive', bg: 'bg-destructive/20' },
  }

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 text-sm sm:text-base">KYC Queue</h3>
      <div className="space-y-3">
        {kycs.length === 0 ? (
          <p className="text-center text-muted-foreground py-8 text-sm">All KYC verifications completed!</p>
        ) : (
          kycs.map((kyc) => {
            const config = statusConfig[kyc.status]
            const Icon = config.icon

            return (
              <div key={kyc.id} className="p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">{kyc.userName}</p>
                    <p className="text-xs text-muted-foreground">{kyc.id} • {kyc.submittedDate}</p>
                    <p className="text-xs text-muted-foreground mt-1">{kyc.documentsCount} documents submitted</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 whitespace-nowrap ${config.bg} ${config.color}`}>
                      <Icon size={14} />
                      {kyc.status.charAt(0).toUpperCase() + kyc.status.slice(1)}
                    </span>
                    <button 
                      onClick={() => handleApprove(kyc.id)}
                      className="p-1 sm:p-2 hover:bg-white/10 rounded-lg transition-all text-accent text-sm sm:text-base"
                      title="Approve"
                    >
                      <CheckCircle size={18} />
                    </button>
                    <button 
                      onClick={() => handleReject(kyc.id)}
                      className="p-1 sm:p-2 hover:bg-white/10 rounded-lg transition-all text-destructive text-sm sm:text-base"
                      title="Reject"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
