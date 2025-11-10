"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ImageShowcase from "@/components/image-showcase"

export default function ProductsPage() {
  const products = [
    {
      slug: "wallet",
      name: "Wallet",
      description: "Multi-currency digital wallet with real-time rates",
      fullDescription: "Manage your money across 40+ currencies with industry-leading exchange rates and zero fees.",
      features: ["40+ currencies", "Real-time rates", "Zero fees", "Instant transfers"],
      icon: "💳",
    },
    {
      slug: "exchange",
      name: "Exchange",
      description: "Seamless currency conversion at competitive rates",
      fullDescription: "Convert between currencies instantly with transparent pricing and no hidden fees.",
      features: ["Competitive rates", "No hidden fees", "Instant transfers", "Transaction history"],
      icon: "🔄",
    },
    {
      slug: "cards",
      name: "Virtual Cards",
      description: "Instant virtual card issuance with full control",
      fullDescription: "Generate virtual cards instantly with customizable spend limits and full transaction control.",
      features: ["Instant generation", "Full control", "Spend limits", "Transaction monitoring"],
      icon: "🎴",
    },
    {
      slug: "api",
      name: "API",
      description: "Powerful API for enterprise integration",
      fullDescription: "Build financial applications with our robust, scalable API infrastructure.",
      features: ["RESTful API", "Webhooks", "Rate limiting", "Developer dashboard"],
      icon: "⚙️",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Our Products</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Choose the financial solution that's right for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Product Gallery */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Platform Features in Action</h2>
            <ImageShowcase
              layout="grid"
              images={[
                {
                  src: "/crypto-exchange-interface.jpg",
                  alt: "Exchange Interface",
                  caption: "Intuitive exchange trading interface",
                },
                {
                  src: "/digital-wallet-dashboard.jpg",
                  alt: "Wallet Dashboard",
                  caption: "Multi-currency wallet dashboard",
                },
                {
                  src: "/virtual-debit-card.jpg",
                  alt: "Virtual Cards",
                  caption: "Instant virtual card generation",
                },
              ]}
            />
          </div>

          {/* Products Grid */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="group h-full p-8 rounded-xl border border-border bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer">
                      <div className="text-5xl mb-4">{product.icon}</div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <ul className="space-y-2 mb-6">
                        {product.features.slice(0, 2).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
