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
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Parallax background elements with OtibacoExchange brand colors */}
      <div
        className="absolute top-10 left-5 w-48 h-48 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: "rgba(0, 71, 255, 0.08)" }}
      />
      <div
        className="absolute bottom-10 right-5 w-48 h-48 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: "rgba(0, 255, 178, 0.08)", animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-balance" style={{ color: "#0A0A2A" }}>
                Trade on the Go
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: "#0047FF" }}>
                OtibacoExchange Mobile App
              </h3>
              <p className="text-base md:text-xl text-pretty leading-normal" style={{ color: "#0A0A2A" }}>
                Experience the full power of OtibacoExchange in your pocket. Our mobile app delivers professional
                trading tools, real-time market data, and secure wallet management wherever you are.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div
                className="p-5 sm:p-6 rounded-xl border"
                style={{ borderColor: "#00C2FF", backgroundColor: "rgba(0, 194, 255, 0.04)" }}
              >
                <Image
                  src="/user-interface.png"
                  alt="Intuitive Design"
                  width={40}
                  height={40}
                  className="mb-3 sm:mb-4 md:size-16"
                />
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: "#0A0A2A" }}>
                  Intuitive Design
                </h4>
                <p className="text-sm sm:text-base" style={{ color: "#0A0A2A", opacity: 0.7 }}>
                  Clean, modern interface designed for users
                </p>
              </div>
              <div
                className="p-5 sm:p-6 rounded-xl border"
                style={{ borderColor: "#00FFB2", backgroundColor: "rgba(0, 255, 178, 0.04)" }}
              >
                <Image
                  src="/good-rating.png"
                  alt="Good Rating"
                  width={40}
                  height={40}
                  className="mb-3 sm:mb-4 md:size-16"
                />
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: "#0A0A2A" }}>
                  5-Star Rated
                </h4>
                <p className="text-sm sm:text-base" style={{ color: "#0A0A2A", opacity: 0.7 }}>
                  Trusted by millions of users worldwide
                </p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#" className="block">
                <Image
                  src="/playstore-download.png"
                  alt="Download on Google Play"
                  width={200}
                  height={60}
                  className="rounded-md"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/appstore-download.png"
                  alt="Download on App Store"
                  width={200}
                  height={60}
                  className="rounded-md"
                />
              </Link>
            </div>
          </div>

          {/* Phone Mockups Container */}
          <div className="relative flex justify-center items-center h-full pt-10 lg:pt-0">
            <div className="relative w-64 h-[480px] lg:w-80 lg:h-[600px]">
              {phoneScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentPhone
                      ? "opacity-100 scale-100 rotate-0"
                      : index === (currentPhone + 1) % phoneScreens.length
                        ? "opacity-60 scale-95 rotate-3 translate-x-4 lg:translate-x-8"
                        : "opacity-30 scale-90 -rotate-3 -translate-x-4 lg:-translate-x-8"
                  }`}
                  style={{ zIndex: phoneScreens.length - Math.abs(index - currentPhone) }}
                >
                  <div className="w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-none">
                    <Image src={screen.image || "/placeholder.svg"} alt={screen.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating elements with OtibacoExchange brand colors */}
            <div
              className="absolute -top-5 -right-5 w-16 h-16 lg:w-20 lg:h-20 rounded-full animate-float blur-sm"
              style={{ backgroundColor: "rgba(0, 71, 255, 0.2)" }}
            />
            <div
              className="absolute -bottom-5 -left-5 w-12 h-12 lg:w-16 lg:h-16 rounded-full animate-float blur-sm"
              style={{ backgroundColor: "rgba(0, 255, 178, 0.2)", animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
