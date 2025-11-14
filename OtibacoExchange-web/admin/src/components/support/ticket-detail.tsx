'use client'

import { X, Send, AlertTriangle, User } from 'lucide-react'
import { useState } from 'react'

interface TicketDetailProps {
  ticket: any
  onClose: () => void
}

export function TicketDetail({ ticket, onClose }: TicketDetailProps) {
  const [reply, setReply] = useState('')

  if (!ticket) return null

  const messages = [
    {
      id: '1',
      author: ticket.user,
      isAdmin: false,
      message: 'My transaction has been stuck in pending for over 2 hours. Can you help?',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      author: 'Admin User',
      isAdmin: true,
      message: 'We are looking into this. Can you provide the transaction ID?',
      timestamp: '1.5 hours ago',
    },
    {
      id: '3',
      author: ticket.user,
      isAdmin: false,
      message: 'TXN-0001. I also have a screenshot if needed.',
      timestamp: '1 hour ago',
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-2xl w-full max-h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-card">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-mono text-sm text-muted-foreground">{ticket.id}</p>
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
                {ticket.status}
              </span>
            </div>
            <p className="font-bold text-lg">{ticket.subject}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Ticket Info */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg border border-white/10 mb-4">
            <div>
              <p className="text-xs text-muted-foreground">User</p>
              <p className="font-medium">{ticket.user}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Category</p>
              <p className="font-medium">{ticket.category}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Assigned To</p>
              <p className="font-medium">{ticket.assignedAdmin}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Priority</p>
              <p className="font-medium capitalize">{ticket.priority}</p>
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.isAdmin ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.isAdmin ? 'bg-primary/20' : 'bg-muted/20'
              }`}>
                <User size={16} />
              </div>
              <div className={msg.isAdmin ? 'text-right' : ''}>
                <p className="text-xs text-muted-foreground mb-1">
                  {msg.author} • {msg.timestamp}
                </p>
                <div className={`p-3 rounded-lg ${
                  msg.isAdmin
                    ? 'bg-primary/20 border border-primary/30'
                    : 'bg-white/5 border border-white/10'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply Box */}
        <div className="sticky bottom-0 p-6 border-t border-white/10 bg-card">
          <div className="flex gap-2">
            <input
              type="text"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply..."
              className="flex-1 px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
              <Send size={18} />
              Send
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-all">
              Close Ticket
            </button>
            <button className="flex-1 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium hover:bg-accent/30 transition-all">
              Mark as Resolved
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
