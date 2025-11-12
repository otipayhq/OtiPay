"use client"
import { motion } from "framer-motion"
import { Apple, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileShowcase } from "@/components/mobile-showcase"
import { MobileAppHero } from "@/components/mobile-app-hero"
import { MobileAppFeatures } from "@/components/mobile-app-features"
import { MobileAppCTA } from "@/components/mobile-app-cta"

export default function MobileAppPage() {
  const screenshots = [
    {
      title: "Wallet Balance",
      description: "See all your funds across 40+ currencies at a glance",
      image: "📱",
      features: ["Real-time rates", "Multi-currency display", "Quick access"],
    },
    {
      title: "Exchange Rates",
      description: "Live conversion rates with one-tap exchange",
      image: "💱",
      features: ["Live updates", "Chart history", "Favorites"],
    },
    {
      title: "Transaction History",
      description: "Track all your transactions with detailed records",
      image: "📋",
      features: ["Export receipts", "Filter by type", "Search transactions"],
    },
    {
      title: "Buy & Sell",
      description: "Quick buy/sell interface with real-time confirmation",
      image: "🛒",
      features: ["1-tap buying", "Instant confirmation", "Multiple payment methods"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <MobileAppHero />

      <MobileAppFeatures />

      {/* Mobile Showcase Section */}
      <MobileShowcase />

      {/* App Screenshots Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features in Your Pocket</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for seamless crypto and currency management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((screenshot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="text-6xl mb-6 inline-block">{screenshot.image}</div>
                <h3 className="text-2xl font-bold mb-3">{screenshot.title}</h3>
                <p className="text-muted-foreground mb-6">{screenshot.description}</p>
                <ul className="space-y-2">
                  {screenshot.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Users Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground">
              Join our growing community of crypto enthusiasts managing their assets with ease
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "😊", title: "Easy to Use", desc: "Intuitive interface makes crypto management simple" },
              { emoji: "⚡", title: "Lightning Fast", desc: "Real-time updates and instant transactions" },
              { emoji: "🔒", title: "Secure & Safe", desc: "Bank-level encryption protects your assets" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-all"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MobileAppCTA />

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Download OtiPay today and start managing your crypto with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="gap-2">
              <Apple className="w-5 h-5" />
              App Store
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Play className="w-5 h-5" />
              Google Play
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
