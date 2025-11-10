import Link from "next/link"
import { ChevronRight } from "lucide-react"

const docSections = [
  {
    title: "Getting Started",
    items: [
      "Creating an Account",
      "Verifying Your Identity",
      "Setting Up Two-Factor Authentication",
      "First Transaction Guide",
    ],
  },
  {
    title: "Wallets",
    items: ["Creating Multiple Wallets", "Managing Wallet Settings", "Wallet Security", "Importing Wallets"],
  },
  {
    title: "Trading & Exchange",
    items: ["How to Trade Crypto", "Understanding Exchange Rates", "Limit vs Market Orders", "Trading History"],
  },
  {
    title: "Virtual Cards",
    items: [
      "Creating Virtual Cards",
      "Card Limits and Restrictions",
      "Card Transactions",
      "Troubleshooting Card Issues",
    ],
  },
  {
    title: "Security",
    items: ["Account Security Tips", "Recognizing Phishing", "Recovery Codes", "Reporting Suspicious Activity"],
  },
  {
    title: "Compliance",
    items: ["AML/KYC Requirements", "Tax Information", "User Agreement", "Privacy Policy"],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground">Comprehensive guides and tutorials for using OtiBacoExchange.</p>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href="#"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
