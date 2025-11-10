"use client"

import { motion } from "framer-motion"
import { CreditCard, Zap, Shield, Lock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesGrid() {
  const features = [
    {
      icon: CreditCard,
      title: "Multi-Currency Wallet",
      description:
        "Hold and manage Bitcoin, Ethereum, and other cryptocurrencies securely in Naira-denominated accounts.",
    },
    {
      icon: Zap,
      title: "Instant Naira Conversion",
      description: "Convert crypto to Nigerian Naira in real-time with competitive rates and minimal fees.",
    },
    {
      icon: Lock,
      title: "Virtual Cards",
      description: "Get instant virtual cards to spend your crypto online and in-store across Nigeria.",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Military-grade encryption and AML/KYC compliance to protect your assets.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Why Choose OtiBacoExchange
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Nigeria's most trusted crypto exchange platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-border bg-card hover:bg-secondary/5 transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-foreground">{feature.title}</CardTitle>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
