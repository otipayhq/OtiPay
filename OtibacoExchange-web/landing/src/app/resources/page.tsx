import type React from "react"
import Link from "next/link"
import { FileText, Code, HelpCircle, MessageSquare, BookOpen } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border/40 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Resources & Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get started, integrate, and succeed with OtiBacoExchange.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ResourceCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Blog"
              description="Stay updated with the latest news, insights, and updates from OtiBacoExchange."
              href="/resources/blog"
            />
            <ResourceCard
              icon={<Code className="w-8 h-8" />}
              title="Developer Docs"
              description="Comprehensive API documentation and integration guides for developers."
              href="/resources/developers"
            />
            <ResourceCard
              icon={<FileText className="w-8 h-8" />}
              title="Documentation"
              description="Detailed guides and tutorials for using all OtiBacoExchange features."
              href="/resources/docs"
            />
            <ResourceCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="Support"
              description="Get help from our support team. We're here to assist you 24/7."
              href="/resources/support"
            />
            <ResourceCard
              icon={<HelpCircle className="w-8 h-8" />}
              title="FAQ"
              description="Frequently asked questions and answers about our products and services."
              href="/resources/faq"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ResourceCard({
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
      <div className="p-6 rounded-lg border border-border/40 bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
