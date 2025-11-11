"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function MobileAppHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background">
      {/* Soft Background Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">

          {/* LEFT SIDE: TEXT + Ratings + Download Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Headline + Subtext */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Experience Instant Crypto to Naira Payments
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Send, receive, and withdraw crypto within seconds. OtiPay makes crypto-to-Naira transfers seamless,
                secure, and built for Nigerians on the go.
              </p>
            </div>

            {/* APP RATINGS: 2 columns on small screens */}
            <div className="grid grid-cols-2 gap-4 justify-items-center sm:flex sm:justify-start sm:gap-8">
              {/* App Store Rating */}
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="font-semibold flex items-center gap-1">
                  ⭐ 4.8<span className="text-sm text-muted-foreground">/5</span>
                </div>
                <div className="text-sm text-muted-foreground">on App Store</div>
              </div>

              {/* Google Play Rating */}
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="font-semibold flex items-center gap-1">
                  ⭐ 4.7<span className="text-sm text-muted-foreground">/5</span>
                </div>
                <div className="text-sm text-muted-foreground">on Google Play</div>
              </div>
            </div>

            {/* DOWNLOAD BUTTONS: 2 columns on small screens */}
            <div className="grid grid-cols-2 gap-4 justify-items-center sm:flex sm:justify-start sm:gap-4 pt-4 ">
              <Link href="/download/ios" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <Image
                  src="/download-on-the-app-store-apple-logo-svgrepo-com.png"
                  alt="Download on the App Store"
                  width={180}
                  height={40}
                  className="hover:opacity-90 transition-all duration-200"
                />
              </Link>
              
              <Link href="/download/android" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <Image
                  src="/google-play-badge-logo-svgrepo-com.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={40}
                  className="hover:opacity-90 transition-all duration-200"
                />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: APP IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex justify-center"
          >
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-full">
              <Image
                src="/crypto-mobile-app-Iphone14.png"
                alt="OtiPay Mobile App Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
