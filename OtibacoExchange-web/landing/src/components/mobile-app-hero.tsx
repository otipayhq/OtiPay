"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MobileAppHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-background">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Your Passport to Crypto
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Your universal account to buy, sell, trade and pay with crypto. Download the OtibacoExchange app today
                and manage your digital assets on the go.
              </p>
            </div>

            {/* App Store Ratings */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">4.5★ on App Store</div>
                  <div className="text-sm text-muted-foreground">iOS App</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">4.5★ on Google Play</div>
                  <div className="text-sm text-muted-foreground">Android App</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.75c-.1-.4-.45-.65-.85-.65h-1.5v-3h1.5c.4 0 .75-.25.85-.65l1.15-4.1c.05-.25-.05-.5-.25-.65-.2-.1-.45-.1-.65 0l-1.6.65c-.3.1-.5.4-.5.7v2.05h-1.5V5.3c0-.3-.2-.6-.5-.7L13.5 3.95c-.2-.1-.45-.1-.65 0-.2.15-.3.4-.25.65l1.15 4.1c.1.4.45.65.85.65h1.5v3h-1.5c-.4 0-.75.25-.85.65l-1.15 4.1c-.05.25.05.5.25.65.2.1.45.1.65 0l1.6-.65c.3-.1.5-.4.5-.7v-2.05h1.5v2.05c0 .3.2.6.5.7l1.6.65c.2.1.45.1.65 0 .2-.15.3-.4.25-.65l-1.15-4.1z" />
                </svg>
                Download on App Store
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v8H3zm4-8h2V4H7zm10-2h2v20h-2zm4-2h2v24h-2z" />
                </svg>
                Get it on Google Play
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-full"
          >
            <Image
              src="/mobile-app-hero.png"
              alt="OtibacoExchange App Screenshot"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
