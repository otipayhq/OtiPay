'use client'

import { useState } from 'react'
import { Ticket, ChevronRight, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react'

interface SupportTicket {
  id: string
  user: string
  category: string
  subject: string
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignedAdmin: string
  lastUpdated: string
  messageCount: number
}

interface TicketListProps {
  onTicketClick: (ticket: SupportTicket) => void
}

export function TicketList({ onTicketClick }: TicketListProps) {
  const tickets: SupportTicket[] = [
    {
      id: 'TKT-0001',
      user: 'John Doe',
      category: 'Transaction Issue',
      subject: 'Transaction stuck in pending status',
      status: 'in-progress',
      priority: 'high',
      assignedAdmin: 'Admin User',
      lastUpdated: '15 mins ago',
      messageCount: 5,
    },
    {
      id: 'TKT-0002',
      user: 'Jane Smith',
      category: 'KYC Verification',
      subject: 'KYC document rejected, need guidance',
      status: 'open',
      priority: 'medium',
      assignedAdmin: 'Unassigned',
      lastUpdated: '45 mins ago',
      messageCount: 2,
    },
    {
      id: 'TKT-0003',
      user: 'Mike Johnson',
      category: 'Account Access',
      subject: 'Cannot login to account',
      status: 'open',
      priority: 'urgent',
      assignedAdmin: 'Unassigned',
      lastUpdated: '2 hours ago',
      messageCount: 3,
    },
    {
      id: 'TKT-0004',
      user: 'Alice Brown',
      category: 'Withdrawal Request',
      subject: 'Withdrawal taking longer than usual',
      status: 'resolved',
      priority: 'low',
      assignedAdmin: 'Sarah Admin',
      lastUpdated: '3 hours ago',
      messageCount: 8,
    },
  ]

  const statusConfig = {
    open: { icon: AlertTriangle, color: 'bg-amber/20 text-amber' },
    'in-progress': { icon: Clock, color: 'bg-primary/20 text-primary' },
    resolved: { icon: CheckCircle2, color: 'bg-accent/20 text-accent' },
    closed: { icon: CheckCircle2, color: 'bg-muted/20 text-muted' },
  }

  const priorityConfig = {
    low: 'bg-muted/20 text-muted',
    medium: 'bg-primary/20 text-primary',
    high: 'bg-amber/20 text-amber',
    urgent: 'bg-destructive/20 text-destructive',
  }

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Ticket size={20} className="text-primary" />
        Support Tickets
      </h3>
      <div className="space-y-3">
        {tickets.map((ticket) => {
          const statusConfig_ = statusConfig[ticket.status]
          const StatusIcon = statusConfig_.icon

          return (
            <div
              key={ticket.id}
              onClick={() => onTicketClick(ticket)}
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-mono text-xs text-muted-foreground">{ticket.id}</p>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusConfig_.color} flex items-center gap-1`}>
                      <StatusIcon size={12} />
                      {ticket.status}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${priorityConfig[ticket.priority]}`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="font-medium text-sm line-clamp-1">{ticket.subject}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {ticket.user} • {ticket.category} • {ticket.messageCount} messages
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Assigned: {ticket.assignedAdmin} • Updated: {ticket.lastUpdated}
                  </p>
                </div>
                <ChevronRight size={20} className="text-muted-foreground flex-shrink-0 mt-1" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
