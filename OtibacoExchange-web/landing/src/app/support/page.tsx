"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SupportPage() {
  const categories = [
    { title: "Getting Started", articles: 39, icon: "🚀" },
    { title: "Account Management", articles: 5, icon: "👤" },
    { title: "NFT", articles: 4, icon: "🎨" },
    { title: "Privacy & Security", articles: 3, icon: "🔒" },
    { title: "Swaps.xyz", articles: 3, icon: "🔄" },
    { title: "B2B Partner Support", articles: 12, icon: "🤝" },
  ]

  const commonQuestions = [
    "How to stay safe when using cryptocurrency",
    "Security and safety FAQs",
    "When will I receive my cryptocurrency?",
    "How to verify your OtiPay account",
    "What is OtiPay?",
    "How do I manage my OtiPay account?",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/support1-vvPOnePyviVsUHihSwEqENsXU6x9D5.png"
            alt="Support background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Everyone needs a little help sometimes
            </h1>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search for articles..." className="pl-12 h-14 text-lg rounded-full border-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common questions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {commonQuestions.map((question, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{question}</p>
                  <svg
                    className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Browse categories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all text-left"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.articles} articles</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Can't find what you're looking for?</h2>
              <p className="text-lg text-muted-foreground">Nova, your OtiPay AI assistant, is here to help!</p>
            </div>
            <Button size="lg" className="gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Start a conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
