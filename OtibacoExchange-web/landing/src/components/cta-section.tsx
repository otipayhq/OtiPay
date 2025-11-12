"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to Start Trading Crypto?</h2>
          <p className="text-lg text-muted-foreground">
            Join 500K+ Nigerians converting crypto to Naira. Secure, fast, and regulated.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/products/mobile-app">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Start Trading Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Schedule Demo
            </Button> */}
            <Link href="/legal/terms">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          No credit card required. KYC verification takes 5 minutes.
        </motion.p>
      </div>
    </section>
  )
}
