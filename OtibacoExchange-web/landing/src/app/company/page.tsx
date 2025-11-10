import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CompanyPage() {
  const sections = [
    {
      slug: "about",
      name: "About Us",
      description: "Learn our story and mission",
      icon: "📖",
    },
    {
      slug: "careers",
      name: "Careers",
      description: "Join our growing team",
      icon: "💼",
    },
    {
      slug: "partners",
      name: "Partners",
      description: "Strategic partnerships and integrations",
      icon: "🤝",
    },
    {
      slug: "contact",
      name: "Contact",
      description: "Get in touch with us",
      icon: "📧",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">About Our Company</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">Building the future of finance</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link key={section.slug} href={`/company/${section.slug}`}>
                <div className="group h-full p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <div className="text-5xl mb-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{section.name}</h3>
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
