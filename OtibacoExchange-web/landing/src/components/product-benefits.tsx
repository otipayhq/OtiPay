import { Check } from "lucide-react"

interface Benefit {
  text: string
}

interface ProductBenefitsProps {
  benefits: Benefit[]
  title?: string
}

export default function ProductBenefits({ benefits, title = "Why Choose Us" }: ProductBenefitsProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{title}</h2>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/5 transition-colors">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
