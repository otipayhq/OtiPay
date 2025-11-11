"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileAppCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-card">
      {/* Background Glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                The future of money starts with you.
              </h2>
              <p className="text-lg text-muted-foreground">
                Always connected. Always in control. OtibacoExchange.
              </p>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Download the App
            </Button>
          </motion.div>

          {/* Video / GIF Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full"
          >
            {/* For a GIF */}
            {/* <img src="/mobile-app-cta.gif" alt="OtibacoExchange App Users" className="object-cover rounded-2xl w-full h-full" /> */}

            {/* For a muted video */}
            <video
              src="/mobile-app-cta.mp4" // replace with your mp4 path
              autoPlay
              loop
              muted
              playsInline
              className="object-cover rounded-2xl w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
    
  )
}
