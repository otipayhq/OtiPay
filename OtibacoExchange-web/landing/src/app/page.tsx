"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import VisualFeaturesHero from "@/components/visual-features-hero"
import MobileAppShowcase from "@/components/mobile-app-showcase"
import ProductShowcase from "@/components/product-showcase"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import CTASection from "@/components/cta-section"

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pt-24"
    >
      <HeroSection />
      <FeaturesGrid />
      <VisualFeaturesHero />
      <MobileAppShowcase />
      <ProductShowcase />
      <TestimonialsCarousel />
      <CTASection />
    </motion.main>
  )
}
