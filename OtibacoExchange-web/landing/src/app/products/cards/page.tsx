import ProductPageHero from "@/components/product-page-hero"
import ProductFeatures from "@/components/product-features"
import ProductBenefits from "@/components/product-benefits"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Virtual Cards | Our Platform",
  description: "Instantly generate virtual cards with customizable spend limits and full control.",
}

export default function CardsPage() {
  const features = [
    {
      title: "Instant Generation",
      description: "Create a virtual card in seconds, no waiting",
      icon: "⚡",
    },
    {
      title: "Full Control",
      description: "Set limits, freeze, or delete cards instantly",
      icon: "🎮",
    },
    {
      title: "Spend Limits",
      description: "Define daily, monthly, or per-transaction limits",
      icon: "💳",
    },
    {
      title: "Transaction Monitoring",
      description: "Real-time alerts for every transaction",
      icon: "👁️",
    },
    {
      title: "Multi-Currency",
      description: "Use cards in any currency, automatically converted",
      icon: "🌐",
    },
    {
      title: "One-Time Use",
      description: "Generate disposable cards for added security",
      icon: "🔐",
    },
  ]

  const benefits = [
    { text: "Protect your primary card with virtual alternatives" },
    { text: "Make online purchases securely without revealing card details" },
    { text: "Control spending with customizable transaction limits" },
    { text: "Freeze or delete cards instantly if compromised" },
    { text: "Generate unique cards for different merchants" },
    { text: "Track spending across multiple virtual cards" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ProductPageHero
        name="Virtual Cards"
        tagline="Security at Your Fingertips"
        description="Issue virtual payment cards instantly with full control. Set custom limits, freeze cards instantly, and enjoy complete transaction monitoring. Perfect for online shopping, business expenses, and secure payments."
        primaryCTA="Get Virtual Card"
        secondaryCTA="Learn More"
      />

      <ProductFeatures features={features} />
      <ProductBenefits benefits={benefits} />
      <CTASection />
    </main>
  )
}
