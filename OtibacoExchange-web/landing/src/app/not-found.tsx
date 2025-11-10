"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-5" />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center space-y-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 404 Number with animation */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative h-32 md:h-40 flex items-center justify-center">
            {/* Large 404 text */}
            <motion.div
              className="text-8xl md:text-9xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent opacity-20 absolute"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              404
            </motion.div>

            {/* Icon overlay */}
            <motion.div
              className="relative z-10 flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Home className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Headings */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Don't worry! Get back to buying, selling, and managing your crypto with OtibacoExchange.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary font-medium hover:bg-primary/5 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Links grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { href: "/products/wallet", label: "Wallet" },
            { href: "/products/exchange", label: "Exchange" },
            { href: "/products/cards", label: "Cards" },
            { href: "/support", label: "Support" },
            { href: "/company/contact", label: "Contact" },
            { href: "/company/about", label: "About" },
          ].map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
            >
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
