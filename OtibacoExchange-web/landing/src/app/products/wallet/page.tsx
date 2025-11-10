import ProductPageHero from "@/components/product-page-hero"
import ProductFeatures from "@/components/product-features"
import ProductBenefits from "@/components/product-benefits"
import CTASection from "@/components/cta-section"
import ModernVideoEmbed from "@/components/modern-video-embed"

export const metadata = {
  title: "Digital Wallet | Our Platform",
  description: "Manage your money across 40+ currencies with zero fees and real-time rates.",
}

export default function WalletPage() {
  const features = [
    {
      title: "40+ Currencies",
      description: "Access a wide range of currencies for global transactions",
      icon: "🌍",
    },
    {
      title: "Real-Time Rates",
      description: "Always get the best exchange rates with live market data",
      icon: "📊",
    },
    {
      title: "Zero Fees",
      description: "No hidden charges or conversion fees on transfers",
      icon: "💰",
    },
    {
      title: "Instant Transfers",
      description: "Send money instantly to any wallet in seconds",
      icon: "⚡",
    },
    {
      title: "Secure Storage",
      description: "Bank-level encryption protects your funds 24/7",
      icon: "🔒",
    },
    {
      title: "Mobile Access",
      description: "Manage your wallet anytime, anywhere from your phone",
      icon: "📱",
    },
  ]

  const benefits = [
    { text: "Spend less on international transactions with competitive rates" },
    { text: "Monitor all your money in one place across multiple currencies" },
    { text: "Send remittances to family and friends worldwide instantly" },
    { text: "Get access to exclusive rewards and cashback programs" },
    { text: "Set up automatic transfers for recurring payments" },
    { text: "Receive alerts for every transaction to stay secure" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ProductPageHero
        name="Digital Wallet"
        tagline="Manage Your Global Money"
        description="Store, send, and receive money across 40+ currencies with zero fees and real-time exchange rates. Perfect for travelers, remote workers, and international businesses."
        primaryCTA="Create Your Wallet"
        secondaryCTA="Watch Demo"
      />

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Easy Money Management</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ModernVideoEmbed
                videoId="9bZkp7q19f0"
                title="Multi-Currency Wallet Demo"
                description="Manage multiple currencies in one secure wallet"
                thumbnail="/wallet-management-interface.jpg"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Complete Control, Zero Hassle</h3>
                <ul className="space-y-3">
                  {[
                    "View real-time balance in your preferred currency",
                    "Send money instantly across the globe",
                    "Convert between 40+ currencies on demand",
                    "Track spending with detailed analytics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductFeatures features={features} />
      <ProductBenefits benefits={benefits} />
      <CTASection />
    </main>
  )
}
