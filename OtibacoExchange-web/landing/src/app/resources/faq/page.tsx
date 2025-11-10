"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    category: "Account",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "Visit our website, click Sign Up, and follow the onboarding process. You'll need to verify your email and complete identity verification.",
      },
      {
        question: "What documents do I need for verification?",
        answer:
          "You'll need a valid government-issued ID and proof of address. Our verification process typically takes 24-48 hours.",
      },
      {
        question: "Can I have multiple accounts?",
        answer: "Each user can have one personal account. Business accounts require separate verification.",
      },
    ],
  },
  {
    category: "Transactions",
    items: [
      {
        question: "What are the transaction fees?",
        answer:
          "Fees vary by transaction type. Typically 0.5-2% for exchanges and 1% for withdrawals. Check our pricing page for details.",
      },
      {
        question: "How long do transactions take?",
        answer: "Most transactions complete within 5-30 minutes. Wire transfers may take 1-2 business days.",
      },
      {
        question: "What's the maximum transaction limit?",
        answer: "Limits depend on your verification level. Standard accounts can transact up to $10,000 daily.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        question: "Is my data safe?",
        answer: "Yes. We use bank-level encryption, 2FA, and comply with international security standards.",
      },
      {
        question: "What if I lose access to my account?",
        answer:
          "You can recover your account using your email or recovery codes. Contact support if you need assistance.",
      },
      {
        question: "How does two-factor authentication work?",
        answer:
          "After entering your password, you'll be prompted for a second verification method (authenticator app, SMS, or email).",
      },
    ],
  },
  {
    category: "Compliance",
    items: [
      {
        question: "Is OtiBacoExchange regulated?",
        answer: "Yes, we comply with all applicable Nigerian regulations and international AML/KYC standards.",
      },
      {
        question: "Do I need to report crypto to tax authorities?",
        answer:
          "Yes, crypto transactions are typically taxable. Consult a tax professional for your specific situation.",
      },
      {
        question: "What's your AML policy?",
        answer:
          "We implement comprehensive AML procedures including transaction monitoring and suspicious activity reporting.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about OtiBacoExchange.</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => {
                    const id = `${sectionIdx}-${itemIdx}`
                    const isOpen = openItems.includes(id)

                    return (
                      <button
                        key={id}
                        onClick={() => toggleItem(id)}
                        className="w-full text-left p-6 rounded-lg border border-border/40 bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-foreground pr-4 flex-1">{item.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </div>
                        {isOpen && <p className="mt-4 text-muted-foreground leading-relaxed">{item.answer}</p>}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
