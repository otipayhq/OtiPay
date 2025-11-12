"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "How to Convert Bitcoin to Naira on OtiPay",
    excerpt: "Step-by-step guide to convert your Bitcoin holdings to Nigerian Naira in minutes.",
    date: "2025-01-15",
    category: "Guide",
    image: "/bitcoin-to-naira-conversion-guide.jpg",
  },
  {
    id: 2,
    title: "Crypto Security Best Practices for Nigerians",
    excerpt: "Essential security tips to protect your digital assets from scams and fraud.",
    date: "2025-01-10",
    category: "Security",
    image: "/cryptocurrency-security-protection.jpg",
  },
  {
    id: 3,
    title: "Virtual Cards: Spend Your Crypto Anywhere in Nigeria",
    excerpt: "Use your crypto holdings with our virtual cards at any merchant accepting card payments.",
    date: "2025-01-05",
    category: "Product",
    image: "/virtual-card-cryptocurrency-payments.jpg",
  },
  {
    id: 4,
    title: "Nigeria's Growing Crypto Market in 2025",
    excerpt: "Analysis of the explosive growth in crypto adoption across Nigeria and Africa.",
    date: "2024-12-28",
    category: "Market",
    image: "/nigeria-cryptocurrency-market-growth.jpg",
  },
  {
    id: 5,
    title: "Getting Started: Your First Crypto Trade",
    excerpt: "Complete beginner's guide to creating an account and making your first cryptocurrency trade.",
    date: "2024-12-20",
    category: "Beginner",
    image: "/cryptocurrency-trading-beginner-guide.jpg",
  },
  {
    id: 6,
    title: "Regulatory Compliance: Stay Safe While Trading",
    excerpt: "Understanding AML/KYC regulations and how we keep your account secure and compliant.",
    date: "2024-12-15",
    category: "Compliance",
    image: "/cryptocurrency-compliance-regulations.jpg",
  },
]

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/40 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">Latest insights and guides for crypto traders in Nigeria.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="overflow-hidden rounded-lg border border-border/40 bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-0">
                  <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <time className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-primary hover:translate-x-1 transition-transform cursor-pointer">
                      <span className="text-sm font-medium">Read More</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
