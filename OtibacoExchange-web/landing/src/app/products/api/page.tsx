import ProductPageHero from "@/components/product-page-hero"
import ProductFeatures from "@/components/product-features"
import ProductBenefits from "@/components/product-benefits"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Developer API | Our Platform",
  description: "Powerful API for enterprise financial integration and custom solutions.",
}

export default function APIPage() {
  const features = [
    {
      title: "RESTful API",
      description: "Industry-standard API design for easy integration",
      icon: "🔗",
    },
    {
      title: "Webhooks",
      description: "Real-time events for payment processing and updates",
      icon: "🔔",
    },
    {
      title: "Rate Limiting",
      description: "Flexible rate limits that scale with your needs",
      icon: "📊",
    },
    {
      title: "Developer Dashboard",
      description: "Manage keys, view usage, and monitor transactions",
      icon: "📈",
    },
    {
      title: "SDKs & Libraries",
      description: "Official SDKs for popular programming languages",
      icon: "📚",
    },
    {
      title: "Documentation",
      description: "Comprehensive docs with code examples",
      icon: "📖",
    },
  ]

  const benefits = [
    { text: "Build payment solutions faster with our well-documented API" },
    { text: "Scale to millions of transactions with our infrastructure" },
    { text: "Get 99.9% uptime guarantee with enterprise SLA" },
    { text: "Access real-time analytics and reporting" },
    { text: "Integrate wallet, exchange, and card features seamlessly" },
    { text: "Receive priority support from our technical team" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ProductPageHero
        name="Developer API"
        tagline="Build on Financial Infrastructure"
        description="Access our powerful APIs to build custom financial applications. From payment processing to wallet management, our comprehensive API suite gives developers everything needed to create the next generation of fintech solutions."
        primaryCTA="Get API Key"
        secondaryCTA="View Documentation"
      />

      <ProductFeatures features={features} />
      <ProductBenefits benefits={benefits} />
      <CTASection />
    </main>
  )
}
