import type React from "react"
import Link from "next/link"
import { FileText, Shield, Scale, Cookie } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/40 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Legal</h1>
          <p className="text-lg text-muted-foreground">Our terms, policies, and regulatory information.</p>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <LegalCard
              icon={<Scale className="w-8 h-8" />}
              title="Terms of Service"
              description="Our user agreement and service terms"
              href="/legal/terms"
            />
            <LegalCard
              icon={<Shield className="w-8 h-8" />}
              title="Privacy Policy"
              description="How we collect and use your data"
              href="/legal/privacy"
            />
            <LegalCard
              icon={<FileText className="w-8 h-8" />}
              title="AML/KYC Policy"
              description="Anti-money laundering and know-your-customer procedures"
              href="/legal/aml-kyc"
            />
            <LegalCard
              icon={<Cookie className="w-8 h-8" />}
              title="Cookie Policy"
              description="Information about cookies and tracking technologies"
              href="/legal/cookies"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function LegalCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href}>
      <div className="p-6 rounded-lg border border-border/40 bg-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
