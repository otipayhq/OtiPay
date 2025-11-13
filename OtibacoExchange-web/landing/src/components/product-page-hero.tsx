import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductPageHeroProps {
  name: string
  tagline: string
  description: string
  primaryCTA: string
  secondaryCTA?: string
}

export default function ProductPageHero({
  name,
  tagline,
  description,
  primaryCTA,
  secondaryCTA,
}: ProductPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-primary/20">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">Premium Product</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">{name}</h1>

          <p className="text-xl text-primary font-semibold">{tagline}</p>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              {primaryCTA}
              <ArrowRight className="w-4 h-4" />
            </Button>

            {secondaryCTA && (
              <Link href="/legal/terms">
                <Button size="lg" variant="outline">
                  {secondaryCTA}
                </Button>
              </Link>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
