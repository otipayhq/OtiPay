import { Card } from "@/components/ui/card"
import CTASection from "@/components/cta-section"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Partners | Collaborate With Us",
  description: "Strategic partnerships and integrations for mutual growth.",
}

export default function PartnersPage() {
  const partners = [
    {
      name: "Global Banks",
      description: "Integrating with leading financial institutions worldwide",
      icon: "🏦",
    },
    {
      name: "Payment Networks",
      description: "Partnerships with Visa, Mastercard, and regional networks",
      icon: "💳",
    },
    {
      name: "Fintech Ecosystem",
      description: "Collaborating with innovative fintech companies globally",
      icon: "🚀",
    },
    {
      name: "Technology Partners",
      description: "Building on cutting-edge cloud and security infrastructure",
      icon: "☁️",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Partner With Us</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Strategic partnerships for mutual growth and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partners.map((partner) => (
              <Card key={partner.name} className="p-8 border-0 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </Card>
            ))}
          </div>

          {/* Partnership Types */}
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Partnership Opportunities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "API Integration Partners",
                  description:
                    "Embed our services into your platform using our comprehensive APIs. Get technical support, documentation, and dedicated partnership teams.",
                },
                {
                  title: "Technology Partners",
                  description:
                    "Collaborate on infrastructure, security, or innovation projects. Share expertise and co-develop solutions.",
                },
                {
                  title: "Distribution Partners",
                  description:
                    "Resell our products and services to your customers. Benefit from competitive margins and marketing support.",
                },
                {
                  title: "Strategic Alliances",
                  description:
                    "Partner with us on special initiatives, market expansion, or joint ventures. Create unique value propositions.",
                },
              ].map((type) => (
                <div
                  key={type.title}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
