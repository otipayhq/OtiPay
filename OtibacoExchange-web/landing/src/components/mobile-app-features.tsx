"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { easeOut } from "framer-motion"

export function MobileAppFeatures() {
  const features = [
    {
      image: "/mobile-app-user.png",
      title: "Buy. Sell. Go. Instantly.",
      description: "Execute crypto transactions in seconds with our intuitive mobile interface.",
      buttonText: "Buy Crypto",
      buttonVariant: "default" as const,
    },
    {
      image: "/mobile-app-user2.png",
      title: "Deposit and Withdraw",
      description:
        "Move funds your way. Transfer between your bank, card, OtibacoExchange Balance or deposit from another wallet. Always in control of your money.",
      buttonText: "Deposit and Withdraw",
      buttonVariant: "default" as const,
    },
    {
      image: "/mobile-app-user3.png",
      title: "Sell Crypto Instantly",
      description:
        "Sell crypto instantly at the best available rate directly to your bank, card or OtibacoExchange Balance.",
      buttonText: "Sell Crypto",
      buttonVariant: "default" as const,
    },
  ]

  // Variants for parent container
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  // Variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: easeOut } },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  }

  return (
    <section className="py-20 md:py-32 bg-background space-y-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="space-y-20"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              className={idx % 2 === 1 ? "lg:order-2" : ""}
              variants={imageVariants}
            >
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={600}
                height={400}
                className="rounded-2xl object-cover shadow-lg"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className={idx % 2 === 1 ? "lg:order-1" : ""}
              variants={textVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{feature.description}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button size="lg">{feature.buttonText}</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
