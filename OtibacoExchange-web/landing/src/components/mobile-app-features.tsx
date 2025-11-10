"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MobileAppFeatures() {
  const features = [
    {
      image: "/mobile-app2.png",
      title: "Buy. Sell. Go. Instantly.",
      description: "Execute crypto transactions in seconds with our intuitive mobile interface.",
      buttonText: "Buy Crypto",
      buttonVariant: "default" as const,
    },
    {
      image: "/mobile-app3.png",
      title: "Deposit and Withdraw",
      description:
        "Move funds your way. Transfer between your bank, card, OtibacoExchange Balance or deposit from another wallet. Always in control of your money.",
      buttonText: "Deposit and Withdraw",
      buttonVariant: "default" as const,
    },
    {
      image: "/mobile-app4.png",
      title: "Sell Crypto Instantly",
      description:
        "Sell crypto instantly at the best available rate directly to your bank, card or OtibacoExchange Balance.",
      buttonText: "Sell Crypto",
      buttonVariant: "default" as const,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background space-y-20">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            idx % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
            <Image
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{feature.description}</p>
            <Button size="lg">{feature.buttonText}</Button>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
