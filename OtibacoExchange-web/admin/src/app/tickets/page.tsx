'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { TicketList } from '@/components/support/ticket-list'
import { TicketDetail } from '@/components/support/ticket-detail'

type SupportTicket = {
  id: string
  subject: string
  message?: string
  status?: 'open' | 'closed' | 'pending' | 'in-progress' | 'resolved'
  createdAt?: string
}

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Support Tickets</h1>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Manage customer support requests</p>
          </div>

          <TicketList onTicketClick={setSelectedTicket} />
        </div>
      </main>

      {selectedTicket && (
        <TicketDetail ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
      )}
    </div>
  )
}
