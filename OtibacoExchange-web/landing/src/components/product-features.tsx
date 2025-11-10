import { Card } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  icon: string
}

interface ProductFeaturesProps {
  features: Feature[]
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Key Features</h2>
          <p className="text-muted-foreground text-lg">Everything you need to succeed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 border-0 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
