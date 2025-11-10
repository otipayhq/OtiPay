"use client"

import { motion } from "framer-motion"
import TeamSection from "@/components/team-section"
import CTASection from "@/components/cta-section"
import Image from "next/image"

export default function AboutClient() {
  // <CHANGE> Updated team info for Nigeria-based company and added images
  const teamMembers = [
    {
      name: "Chinedu Okafor",
      role: "CEO & Co-Founder",
      bio: "Fintech entrepreneur with 12+ years building payment systems across Africa.",
      image: "/professional-ceo-businessman-portrait.jpg",
    },
    {
      name: "Zainab Hassan",
      role: "CTO & Co-Founder",
      bio: "Blockchain architect who led security at major African financial institutions.",
      image: "/tech-cto-engineer-professional-portrait.jpg",
    },
    {
      name: "Amara Okafor",
      role: "Head of Product",
      bio: "Product strategist passionate about accessible financial services in Nigeria.",
      image: "/product-manager-professional-portrait-woman.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Our Story</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Building secure, regulated crypto infrastructure for Nigeria and Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that crypto and traditional finance should work together seamlessly. Our mission is to
                provide Nigerians with a secure, regulated, and user-friendly platform to buy, sell, and trade
                cryptocurrency with confidence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by fintech experts with deep roots in Africa, we understand the unique needs of the Nigerian
                market and are committed to accessibility, transparency, and security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src="/cryptocurrency-fintech-office-team-collaboration.jpg" alt="Our Team" fill className="object-cover" />
            </motion.div>
          </div>

          {/* Values Section */}
          <div className="space-y-4 mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Our Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Transparency",
                  description: "Complete openness about our fees, processes, and regulatory compliance.",
                  icon: "🔍",
                },
                {
                  title: "Security",
                  description: "Bank-level encryption, AML/KYC compliance, and multi-layer protection.",
                  icon: "🔒",
                },
                {
                  title: "Innovation",
                  description: "Continuously building tools that make crypto accessible to Nigerians.",
                  icon: "⚡",
                },
                {
                  title: "Inclusion",
                  description: "Financial services for everyone, regardless of background or location.",
                  icon: "🤝",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              By The Numbers
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500K+", label: "Nigerian Users" },
                { number: "₦500B+", label: "Monthly Volume" },
                { number: "24/7", label: "Support" },
                { number: "100%", label: "Secure" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg bg-card border border-border"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection members={teamMembers} />
      <CTASection />
    </main>
  )
}
