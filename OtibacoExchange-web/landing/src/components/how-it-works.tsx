"use client"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description: "Sign up with your email or phone number in seconds",
      icon: "✍️",
    },
    {
      number: 2,
      title: "Verify Identity (KYC)",
      description: "Complete quick identity verification for security",
      icon: "🆔",
    },
    {
      number: 3,
      title: "Deposit or Connect Wallet",
      description: "Add funds from your bank or connect your crypto wallet",
      icon: "💳",
    },
    {
      number: 4,
      title: "Buy or Sell Instantly",
      description: "Exchange crypto to fiat or vice versa in real-time",
      icon: "⚡",
    },
    {
      number: 5,
      title: "Withdraw to Bank or Wallet",
      description: "Receive your funds instantly to your preferred destination",
      icon: "🏦",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Get started in 5 simple steps</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-secondary" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl shadow-lg"
                >
                  {step.icon}
                </motion.div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
