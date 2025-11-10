"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ProductShowcase() {
  const products = [
    {
      name: "Wallet",
      description: "Multi-currency digital wallet for crypto storage",
      features: ["Bitcoin, Ethereum & more", "Real-time rates", "Zero trading fees"],
      image: "/cryptocurrency-wallet-digital-storage.jpg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Exchange",
      description: "Instant crypto to Naira conversion",
      features: ["Best rates guaranteed", "No hidden fees", "Instant transfers"],
      image: "/crypto-exchange-platform.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Cards",
      description: "Virtual cards for crypto spending",
      features: ["Instant generation", "Full control", "Spend limits"],
      image: "/virtual-payment-card-cryptocurrency.jpg",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Complete crypto solutions for Nigerian traders
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full gap-2 bg-transparent hover:bg-primary/10">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
