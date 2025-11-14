'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { Lock, Key, Bell, Zap, Save } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />

      <main className="ml-0 lg:ml-64 mt-16 p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Configure system and security settings</p>
          </div>

          {/* Security Settings */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Lock size={20} className="text-primary" />
              Security Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Allowed IP Addresses</label>
                <textarea
                  className="w-full px-4 py-3 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  rows={4}
                  placeholder="192.168.1.1&#10;203.0.113.45&#10;198.51.100.32"
                />
                <p className="text-xs text-muted-foreground mt-2">Enter one IP per line</p>
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm font-medium">Require CAPTCHA on login</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm font-medium">Enforce 2FA for all admins</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm font-medium">Enable session timeout (30 mins)</span>
                </label>
              </div>
            </div>
          </div>

          {/* API & Webhooks */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Key size={20} className="text-secondary" />
              API Keys & Webhooks
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">API Keys</label>
                <div className="space-y-2">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-mono">api_key_1a2b3c...</p>
                      <p className="text-xs text-muted-foreground">Created Jan 15, 2024</p>
                    </div>
                    <button className="text-destructive hover:text-destructive/70 text-sm">Revoke</button>
                  </div>
                </div>
                <button className="mt-3 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-all">
                  Generate New Key
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Webhook URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/webhooks"
                  className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Rate Engine */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Zap size={20} className="text-amber" />
              Exchange Rate Configuration
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rate Update Mode</label>
                <select className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Manual</option>
                  <option>Automatic (Binance)</option>
                  <option>Automatic (CoinGecko)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Update Frequency (Auto Mode)</label>
                <select className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Every 5 minutes</option>
                  <option>Every 15 minutes</option>
                  <option>Every 30 minutes</option>
                  <option>Every hour</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Max Spread Allowed (%)</label>
                <input
                  type="number"
                  defaultValue="2"
                  className="w-full px-4 py-2 bg-input/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="metric-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Bell size={20} className="text-secondary" />
              Email Notifications
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Fraud alerts</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">KYC updates</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">High-value transactions</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Admin activity logs</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 neon-glow">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
