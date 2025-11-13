import ProductPageHero from "@/components/product-page-hero"
import ProductFeatures from "@/components/product-features"
import ProductBenefits from "@/components/product-benefits"
import CTASection from "@/components/cta-section"
import ModernVideoEmbed from "@/components/modern-video-embed"

export const metadata = {
  title: "Digital Wallet | Fast NGN & USD Balance",
  description:
    "Your secure NGN & USD in-app wallet for instant deposits, withdrawals, analysis, and seamless crypto-to-fiat transactions.",
}

export default function WalletPage() {
  const features = [
    {
      title: "NGN & USD Balance",
      description: "Hold and manage your money in stable USD and local NGN.",
      icon: "💼",
    },
    {
      title: "Instant Deposits",
      description: "Fund your wallet with bank transfer or supported payment channels.",
      icon: "⚡",
    },
    {
      title: "Fast Withdrawals",
      description: "Withdraw instantly to any Nigerian bank 24/7.",
      icon: "🏦",
    },
    {
      title: "Buy & Sell Crypto",
      description: "Buy USDT with NGN and sell back anytime. Real-time FX rates.",
      icon: "💱",
    },
    {
      title: "Smart Security",
      description: "2FA, biometric lock, device monitoring & fraud protection.",
      icon: "🔐",
    },
    {
      title: "Analytics & Insights",
      description: "Track spending, income, and crypto activity with beautiful insights.",
      icon: "📊",
    },
  ]

  const benefits = [
    { text: "Switch between NGN and USD for stable and flexible spending." },
    { text: "Instant liquidity — deposit, exchange, or withdraw in seconds." },
    { text: "Your wallet powers all OtiPay features: exchange, payments, transfers." },
    { text: "Predictable exchange rates that update in real-time." },
    { text: "Safe storage with encrypted transactions and fraud monitoring." },
    { text: "Perfect for freelancers, traders, and everyday users." },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* HERO SECTION UPDATED FOR YOUR APP */}
      <ProductPageHero
        name="Digital Wallet"
        tagline="Your NGN & USD Smart Wallet"
        description="Store, send, receive, and exchange money with a secure wallet designed for African users. Manage NGN & USD balances, fund and withdraw instantly, and enjoy the fastest crypto-to-fiat experience."
        primaryCTA="Create Your Wallet"
        secondaryCTA="Watch Demo"
      />

      {/* UPDATED MIDDLE SECTION — FINTECH FOCUSED */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Your Money, One Smart Wallet
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ModernVideoEmbed
                videoId="9bZkp7q19f0"
                title="Wallet Overview"
                description="How Digital Wallet helps you manage NGN & USD effortlessly."
                thumbnail="/otibaco-fintech-wallet-ui.jpg"
              />

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  Everything You Need in One Place
                </h3>

                <ul className="space-y-3">
                  {[
                    "Fund with bank transfer and see it reflected instantly",
                    "Hold NGN & USD balances for stability and flexibility",
                    "Buy USDT instantly from your wallet",
                    "Track transactions with clean, modern analytics",
                    "Send money to other users fast and free",
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

      {/* Updated to match fintech features */}
      <ProductFeatures features={features} />
      <ProductBenefits benefits={benefits} />
      <CTASection />
    </main>
  )
}
