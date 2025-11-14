'use client'

import { useState } from 'react'
import { MoreVertical, Shield, AlertTriangle, ChevronRight } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  phone: string
  kycStatus: 'verified' | 'pending' | 'rejected' | 'review'
  balance: string
  lastLogin: string
  device: string
  ip: string
  fraudScore: number
  status: 'active' | 'suspended' | 'limited'
}

interface UserListTableProps {
  onUserClick: (user: User) => void
}

export function UserListTable({ onUserClick }: UserListTableProps) {
  const [users, setUsers] = useState<User[]>([
    {
      id: 'USR-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+234 801 234 5678',
      kycStatus: 'verified',
      balance: '₦125,400',
      lastLogin: '2 mins ago',
      device: 'Chrome/macOS',
      ip: '192.168.1.100',
      fraudScore: 2,
      status: 'active',
    },
    {
      id: 'USR-002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+234 802 345 6789',
      kycStatus: 'pending',
      balance: '₦89,200',
      lastLogin: '1 hour ago',
      device: 'Safari/iOS',
      ip: '192.168.1.101',
      fraudScore: 5,
      status: 'active',
    },
    {
      id: 'USR-003',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+234 803 456 7890',
      kycStatus: 'rejected',
      balance: '₦0',
      lastLogin: '3 days ago',
      device: 'Firefox/Windows',
      ip: '192.168.1.102',
      fraudScore: 85,
      status: 'suspended',
    },
    {
      id: 'USR-004',
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      phone: '+234 804 567 8901',
      kycStatus: 'verified',
      balance: '₦256,750',
      lastLogin: '15 mins ago',
      device: 'Chrome/Windows',
      ip: '192.168.1.103',
      fraudScore: 3,
      status: 'active',
    },
  ])

  const kycStatusColors = {
    verified: 'bg-accent/20 text-accent',
    pending: 'bg-amber/20 text-amber',
    rejected: 'bg-destructive/20 text-destructive',
    review: 'bg-primary/20 text-primary',
  }

  const userStatusColors = {
    active: 'text-accent',
    suspended: 'text-destructive',
    limited: 'text-amber',
  }

  const handleStatusChange = (userId: string, newStatus: 'active' | 'suspended' | 'limited') => {
    setUsers(users.map(user => user.id === userId ? { ...user, status: newStatus } : user))
  }

  return (
    <div className="metric-card">
      <h3 className="font-semibold mb-4 text-sm sm:text-base">Users</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Name</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden sm:table-cell">Email</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden lg:table-cell">Phone</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">KYC</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium hidden md:table-cell">Balance</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Risk</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-white/5 hover:bg-white/5 transition-all"
              >
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div>
                    <p className="font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.id}</p>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground hidden sm:table-cell truncate">{user.email}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground hidden lg:table-cell">{user.phone}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium inline-block whitespace-nowrap ${kycStatusColors[user.kycStatus]}`}>
                    {user.kycStatus.charAt(0).toUpperCase() + user.kycStatus.slice(1)}
                  </span>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium hidden md:table-cell">{user.balance}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-1">
                    {user.fraudScore > 50 && <AlertTriangle size={16} className="text-destructive flex-shrink-0" />}
                    <span className={user.fraudScore > 50 ? 'text-destructive font-medium' : 'text-muted-foreground'}>
                      {user.fraudScore}%
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                  <button onClick={() => onUserClick(user)} className="text-primary hover:text-primary/70">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
