"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Freelancer",
      image: "/professional-woman-smiling-nigerian.jpg",
      quote:
        "OtiBacoExchange made it so easy to convert my crypto earnings to Naira instantly. No hidden fees, and the rates are amazing!",
      rating: 5,
    },
    {
      name: "Tunde Ibrahim",
      role: "Business Owner",
      image: "/professional-man-business-nigerian.jpg",
      quote:
        "Fast, reliable, and secure. I've been using this for my international transactions and haven't looked back. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amara Ejiro",
      role: "Crypto Investor",
      image: "/woman-entrepreneur-happy-african.jpg",
      quote:
        "The app is incredibly smooth and intuitive. I can manage multiple currencies in one place. This is exactly what I was looking for!",
      rating: 5,
    },
    {
      name: "Ibrahim Hassan",
      role: "Remote Worker",
      image: "/man-working-professional-smiling.jpg",
      quote:
        "Getting paid in USD and converting to NGN used to be a hassle. Now it takes 2 taps. OtiBaco is a game-changer!",
      rating: 5,
    },
    {
      name: "Zainab Oluwaseun",
      role: "Student",
      image: "/young-woman-student-confident.jpg",
      quote:
        "Sending money to my family abroad has never been easier or cheaper. OtiBaco beats every other service I've tried.",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
    setAutoPlay(true)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(true)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground">Join thousands of happy customers worldwide</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border backdrop-blur-sm shadow-lg"
            >
              {/* Avatar and Stars */}
              <div className="flex items-start gap-4 mb-6">
                <motion.img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-xl md:text-2xl font-medium mb-4 text-pretty">"{testimonials[current].quote}"</p>
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-bold text-lg">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx)
                    setAutoPlay(true)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? "bg-primary w-8" : "bg-muted-foreground/30 w-2 hover:w-4"
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
