"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProductPageHero from "@/components/product-page-hero"
import ProductFeatures from "@/components/product-features"
import ProductBenefits from "@/components/product-benefits"
import CTASection from "@/components/cta-section"
import ExchangeConverter from "@/components/exchange-converter"
import HowItWorks from "@/components/how-it-works"

export const metadata = {
  title: "Exchange | Our Platform",
  description: "Seamless currency conversion with no hidden fees and instant transfers.",
}

export default function ExchangePage() {
  const features = [
    {
      title: "Competitive Rates",
      description: "Get the best market rates with transparent pricing",
      icon: "💱",
    },
    {
      title: "No Hidden Fees",
      description: "What you see is what you pay - no surprises",
      icon: "👁️",
    },
    {
      title: "Instant Transfers",
      description: "Convert and transfer money in real-time",
      icon: "⚡",
    },
    {
      title: "Multiple Markets",
      description: "Trade major, minor, and exotic currency pairs",
      icon: "🎯",
    },
    {
      title: "Transaction History",
      description: "Track all your exchanges with detailed records",
      icon: "📋",
    },
    {
      title: "API Integration",
      description: "Integrate currency exchange into your application",
      icon: "🔌",
    },
  ]

  const benefits = [
    { text: "Save money with rates 8-10% better than banks" },
    { text: "Exchange money anytime with 24/7 market access" },
    { text: "Scale your business with reliable currency conversion" },
    { text: "Get instant settlement for time-sensitive transactions" },
    { text: "Access comprehensive reporting for accounting purposes" },
    { text: "Benefit from our expert support team" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ProductPageHero
        name="Currency Exchange"
        tagline="Convert Smarter, Save More"
        description="Exchange currency at competitive market rates with zero hidden fees. Whether you're traveling, doing business internationally, or managing investments, we make currency conversion fast, transparent, and affordable."
        primaryCTA="Start Exchanging"
        secondaryCTA="Compare Rates"
      />

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Try Our Converter</h2>
          <ExchangeConverter />
        </div>
      </section>

      {/* Video Hero Section */}
      <section className="relative overflow-hidden min-h-[100vh] md:min-h-[120vh] flex items-center justify-center rounded-3xl px-4 md:px-12">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Background Video */}
          <video
            src="/video/Exchange_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center text-white px-6 py-32 md:py-48"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Fast, clear, and reliable exchange.
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Instant conversions with full control and zero surprises.
            </p>
          </motion.div>
        </div>
      </section>


      <HowItWorks />

      <ProductFeatures features={features} />
      <ProductBenefits benefits={benefits} />
      <CTASection />
    </main>
  )
}
