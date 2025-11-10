"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageCircle, Phone, Clock } from "lucide-react"

export default function SupportPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setMessage("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Support Center</h1>
          <p className="text-lg text-muted-foreground">We're here to help. Get in touch with our support team.</p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <SupportChannel
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              description="support@otibaco.com"
              subtitle="Response within 24 hours"
            />
            <SupportChannel
              icon={<MessageCircle className="w-6 h-6" />}
              title="Live Chat"
              description="Available 24/7"
              subtitle="Instant support"
            />
            <SupportChannel
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              description="+234 (0) 123-456-7890"
              subtitle="Business hours"
            />
            <SupportChannel
              icon={<Clock className="w-6 h-6" />}
              title="Status"
              description="System Status"
              subtitle="Check service health"
            />
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="p-8 rounded-lg border border-border/40 bg-card">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
            {submitted && <p className="mt-4 text-center text-accent">Thank you! We'll get back to you soon.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}

function SupportChannel({
  icon,
  title,
  description,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  description: string
  subtitle: string
}) {
  return (
    <div className="p-6 rounded-lg border border-border/40 bg-card text-center">
      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  )
}
