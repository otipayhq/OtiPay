"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileAppCTA() {
  return (
    <section className="relative overflow-hidden h-[90vh] flex items-center justify-center rounded-3xl px-4 md:px-12">
      {/* Centered Video with Controlled Width */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Background Video */}
        <video
          src="/video/happyuser.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl" />

        {/* Text & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-6 py-32 md:py-40"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Fast. Secure. Borderless. The future of everyday finance.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Always connected. Always in control. <span className="font-semibold">OtiPay</span>.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full font-semibold px-8 py-6 text-base"
          >
            Download the App
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
