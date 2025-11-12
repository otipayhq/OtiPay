"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function MobileShowcase() {
  const [mounted, setMounted] = useState(false)
  const [currentPhone, setCurrentPhone] = useState(0)

  const phoneScreens = [
    {
      image: "/crypto-mobile-app-Iphone14.png",
      title: "Advanced Trading",
      description: "Execute trades with professional-grade tools",
    },
    {
      image: "/crypto-mobile-app-Iphone14.png",
      title: "Real-time Analytics",
      description: "Monitor your portfolio with live market data",
    },
    {
      image: "/crypto-mobile-app-Iphone14.png",
      title: "Global Markets",
      description: "Access worldwide crypto markets 24/7",
    },
  ]

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentPhone((prev) => (prev + 1) % phoneScreens.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [phoneScreens.length])

  if (!mounted) return null

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute top-10 left-5 w-48 h-48 rounded-full blur-3xl animate-pulse bg-primary/10 dark:bg-primary/20" />
      <div className="absolute bottom-10 right-5 w-48 h-48 rounded-full blur-3xl animate-pulse bg-accent/10 dark:bg-accent/20 animate-delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                Trade on the Go
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                OtiPay Mobile App
              </h3>
              <p
                className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mx-auto max-w-md
                sm:max-w-lg lg:mx-0 lg:max-w-none text-center lg:text-left">
                Experience the full power of <span className="font-semibold text-foreground">OtiPay</span> in your pocket.
                Our mobile app delivers professional trading tools, real-time market data, and secure wallet management
                wherever you are.
              </p>

              {/* <p
                className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mx-auto max-w-md
  sm:max-w-lg lg:mx-0 lg:max-w-none text-center lg:text-left"
              >
                Manage, trade, and grow with <span className="font-semibold text-foreground">OtiPay</span> — all in one secure mobile app.
              </p> */}


            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Intuitive Design */}
              <div className="p-5 sm:p-6 rounded-xl border border-border bg-card text-card-foreground flex flex-col items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-primary-foreground mb-3 sm:mb-4">
                  {/* Star Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  ⭐ Intuitive Design
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground/70">
                  Clean, modern interface designed for users
                </p>
              </div>

              {/* Good Rating */}
              <div className="p-5 sm:p-6 rounded-xl border border-border bg-card text-card-foreground flex flex-col items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600 text-white mb-3 sm:mb-4">
                  {/* Star Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  ⭐ 5-Star Rated
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground/70">
                  Trusted by millions of users worldwide
                </p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-start gap-4 pt-6">
              <Link href="/download/ios" className="flex justify-center sm:justify-start">
                <Image
                  src="/download-on-the-app-store-apple-logo-svgrepo-com.png"
                  alt="Download on App Store"
                  width={180}
                  height={55}
                  className="rounded-md hover:opacity-90 transition duration-200"
                />
              </Link>
              <Link href="/download/android" className="flex justify-center sm:justify-start">
                <Image
                  src="/google-play-badge-logo-svgrepo-com.png"
                  alt="Download on Google Play"
                  width={180}
                  height={55}
                  className="rounded-md hover:opacity-90 transition duration-200"
                />
              </Link>
            </div>
          </div>

          {/* Right: Phone Mockups */}
          <div className="relative flex justify-center items-center h-full pt-10 lg:pt-0">
            <div className="relative w-56 h-[440px] sm:w-64 sm:h-[480px] lg:w-72 lg:h-[560px]">
              {phoneScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${index === currentPhone
                    ? "opacity-100 scale-100 rotate-0"
                    : index === (currentPhone + 1) % phoneScreens.length
                      ? "opacity-60 scale-95 rotate-3 translate-x-4 lg:translate-x-8"
                      : "opacity-30 scale-90 -rotate-3 -translate-x-4 lg:-translate-x-8"
                    }`}
                  style={{
                    zIndex: phoneScreens.length - Math.abs(index - currentPhone),
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-transparent">
                    <Image
                      src={screen.image || "/placeholder.svg"}
                      alt={screen.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating brand shapes */}
            <div className="absolute -top-5 -right-5 w-16 h-16 lg:w-20 lg:h-20 rounded-full animate-float blur-sm bg-primary/20 dark:bg-primary/40" />
            <div className="absolute -bottom-5 -left-5 w-12 h-12 lg:w-16 lg:h-16 rounded-full animate-float blur-sm bg-accent/20 dark:bg-accent/40 animate-delay-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}
