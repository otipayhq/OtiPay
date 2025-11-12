"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, CheckCircle2 } from "lucide-react"

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Freelancer",
      quote:
        "OtiPayis quick, simple, and easy to use. The whole process took less than 10 minutes from start to finish.",
      rating: 5,
      verified: true,
    },
    {
      name: "Tunde Ibrahim",
      role: "Business Owner",
      quote:
        "I've used OtiPayseveral times, and it's nice and easy to use. Just a couple of clicks and the transaction completes straight from my phone, with email notifications and a status screen showing progress from start to finish.",
      rating: 5,
      verified: true,
    },
    {
      name: "Amara Ejiro",
      role: "Crypto Investor",
      quote:
        "I've used OtiPayseveral times to buy crypto. It's fast, efficient, easy to use, and the fees are reasonable. I've had no issues connecting with my bank account.",
      rating: 5,
      verified: true,
    },
    {
      name: "Ibrahim Hassan",
      role: "Remote Worker",
      quote:
        "OtiPayis a reliable, cost-effective way to turn fiat to crypto. It's the only service that worked with my bank debit card, with reasonable fees and a straightforward process.",
      rating: 5,
      verified: true,
    },
    {
      name: "Zainab Oluwaseun",
      role: "Student",
      quote:
        "Very straightforward transfer from my Revolut virtual card. ID checks were completed with a valid driving licence and a quick selfie confirmation on first use.",
      rating: 5,
      verified: true,
    },
    {
      name: "Hassan Malik",
      role: "Entrepreneur",
      quote:
        "OtiPaymakes buying crypto in Nigeria easy. I bought XRP and it was in my wallet within 2 minutes, with an excellent exchange rate.",
      rating: 5,
      verified: true,
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials.length])

  const getVisibleTestimonials = () => {
    const visibleCount = 3
    const indices = []
    for (let i = 0; i < visibleCount; i++) {
      indices.push((current + i) % testimonials.length)
    }
    return indices
  }

  const visibleIndices = getVisibleTestimonials()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of happy customers who trust OtiPay for their crypto needs
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visibleIndices.map((idx, position) => (
              <motion.div
                key={`${idx}-${position}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: position * 0.1 }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="h-full"
              >
                <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                  {/* Rating and Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" strokeWidth={0} />
                      ))}
                    </div>
                    {testimonials[idx].verified && (
                      <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 rounded-full px-3 py-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2} />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    "{testimonials[idx].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{testimonials[idx].name}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[idx].role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setCurrent(idx)
                  setIsAutoPlay(true)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "bg-primary w-8"
                    : "bg-slate-300 dark:bg-slate-700 w-2 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
