import ProductPageHero from "@/components/product-page-hero"
import ProductFeatures from "@/components/product-features"
import ProductBenefits from "@/components/product-benefits"
import CTASection from "@/components/cta-section"
import ExchangeConverter from "@/components/exchange-converter"
import HowItWorks from "@/components/how-it-works"
import ModernVideoEmbed from "@/components/modern-video-embed"

export const metadata = {
  title: "Exchange | Our Platform",
  description: "Seamless currency conversion with no hidden fees and instant transfers.",
}

export default function ExchangePage() {
  const features = [
    {
      title: "Competitive Rates",
      description: "Get the best market rates with transparent pricing",
      icon: "💱",
    },
    {
      title: "No Hidden Fees",
      description: "What you see is what you pay - no surprises",
      icon: "👁️",
    },
    {
      title: "Instant Transfers",
      description: "Convert and transfer money in real-time",
      icon: "⚡",
    },
    {
      title: "Multiple Markets",
      description: "Trade major, minor, and exotic currency pairs",
      icon: "🎯",
    },
    {
      title: "Transaction History",
      description: "Track all your exchanges with detailed records",
      icon: "📋",
    },
    {
      title: "API Integration",
      description: "Integrate currency exchange into your application",
      icon: "🔌",
    },
  ]

  const benefits = [
    { text: "Save money with rates 8-10% better than banks" },
    { text: "Exchange money anytime with 24/7 market access" },
    { text: "Scale your business with reliable currency conversion" },
    { text: "Get instant settlement for time-sensitive transactions" },
    { text: "Access comprehensive reporting for accounting purposes" },
    { text: "Benefit from our expert support team" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ProductPageHero
        name="Currency Exchange"
        tagline="Convert Smarter, Save More"
        description="Exchange currency at competitive market rates with zero hidden fees. Whether you're traveling, doing business internationally, or managing investments, we make currency conversion fast, transparent, and affordable."
        primaryCTA="Start Exchanging"
        secondaryCTA="Compare Rates"
      />

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Try Our Converter</h2>
          <ExchangeConverter />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">See How It Works</h2>
              <p className="text-lg text-muted-foreground">Watch a quick demonstration of our exchange platform</p>
            </div>
            <ModernVideoEmbed
              videoId="dQw4w9WgXcQ"
              title="OtiBacoExchange Platform Tour"
              description="Learn how to exchange crypto to Naira in just 2 minutes"
              thumbnail="/fintech-exchange-demo.jpg"
            />
          </div>
        </div>
      </section>

      <HowItWorks />

      <ProductFeatures features={features} />
      <ProductBenefits benefits={benefits} />
      <CTASection />
    </main>
  )
}
