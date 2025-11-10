"use client"

import { motion } from "framer-motion"
import { Apple, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileAppShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Decorative background elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
              >
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Download on iOS & Android</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground text-balance leading-tight"
              >
                Take Crypto Trading On The Go
              </motion.h2>

              <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                Convert USDT to NGN, check your wallet balance, and execute real-time transactions anywhere, anytime
                with our intuitive mobile app. Lightning-fast, secure, and designed for Nigerian traders.
              </motion.p>
            </motion.div>

            {/* Key Features */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="space-y-3">
                {[
                  "Instant USDT to NGN conversions",
                  "Real-time wallet balance tracking",
                  "One-tap transaction confirmation",
                  "24/7 push notifications for rates",
                  "Face ID & Fingerprint security",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Right: Mobile Phone Mockup with Animation */}
          <motion.div variants={itemVariants} className="relative h-[600px] md:h-[700px]">
            {/* Phone Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="relative w-80 h-96 rounded-3xl bg-black shadow-2xl overflow-hidden border-[8px] border-gray-900"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-7 bg-black rounded-b-3xl z-50" />

                {/* Phone Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden relative">
                  {/* Screen content animations */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 h-full flex flex-col justify-between"
                  >
                    {/* Top Section - Balance */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="space-y-2"
                    >
                      <p className="text-xs text-muted-foreground">Wallet Balance</p>
                      <motion.p
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="text-2xl font-bold text-primary"
                      >
                        ₦2,450,000
                      </motion.p>
                    </motion.div>

                    {/* Middle Section - Transaction */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3 border border-white/20"
                    >
                      <p className="text-xs text-muted-foreground">Quick Convert</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">USDT</span>
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            className="text-xs text-accent"
                          >
                            1,000
                          </motion.span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="h-full bg-accent rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom Section - Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-sm"
                    >
                      Convert Now
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-8 bottom-24 bg-card border border-border rounded-xl p-4 shadow-lg w-56 z-10"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <p className="text-sm font-semibold text-foreground">Real-time Rates</p>
                </div>
                <p className="text-xs text-muted-foreground">Updated every 30 seconds</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -right-8 top-32 bg-card border border-border rounded-xl p-4 shadow-lg w-56 z-10"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <p className="text-sm font-semibold text-foreground">Bank-Grade Security</p>
                </div>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Happy Customers Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 text-center"
        >
          <p className="text-muted-foreground mb-8">Trusted by 500K+ Happy Nigerians</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { emoji: "😊", text: "Easy to Use" },
              { emoji: "⚡", text: "Lightning Fast" },
              { emoji: "🔒", text: "Super Secure" },
              { emoji: "💰", text: "Best Rates" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-4xl">{item.emoji}</div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
