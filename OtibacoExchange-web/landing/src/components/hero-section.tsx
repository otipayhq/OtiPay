"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background accents */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Nigeria's #1 Crypto to Naira Exchange</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground"
          >
            Convert Crypto to Naira Instantly
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Fast, secure, and trusted crypto exchange platform for Nigerians. Convert Bitcoin, Ethereum, and more to
            Nigerian Naira with the best rates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="gap-2">
              Start Trading
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>

          {/* Stats with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-1 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">500K+</div>
              <p className="text-sm text-muted-foreground">Nigerian Users</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-1 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">$2B+</div>
              <p className="text-sm text-muted-foreground">Traded Monthly</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-1 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
