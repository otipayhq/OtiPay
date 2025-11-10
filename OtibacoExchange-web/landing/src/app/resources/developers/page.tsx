import Link from "next/link"
import { Code, GitBranch, Zap } from "lucide-react"

const devResources = [
  {
    title: "REST API",
    description: "Complete REST API reference for integrating OtiBacoExchange into your application.",
    icon: <Code className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for JavaScript, Python, Go, and more.",
    icon: <GitBranch className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications for transaction updates and account changes.",
    icon: <Zap className="w-6 h-6" />,
    link: "#",
  },
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Developer Center</h1>
          <p className="text-lg text-muted-foreground">
            Build with OtiBacoExchange. Access APIs, SDKs, and comprehensive documentation.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Get Started in Minutes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {devResources.map((resource, idx) => (
              <Link key={idx} href={resource.link}>
                <div className="p-6 rounded-lg border border-border/40 bg-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 flex items-center justify-center">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Code Example</h2>
          <div className="p-6 rounded-lg bg-card border border-border/40 overflow-x-auto">
            <pre className="text-sm text-muted-foreground font-mono">
              {`// Initialize the SDK
import OtiBaco from '@otibaco/sdk';

const client = new OtiBaco({
  apiKey: process.env.OTIBACO_API_KEY,
});

// Create a wallet
const wallet = await client.wallets.create({
  currency: 'USD',
  type: 'checking',
});

// Get wallet balance
const balance = await client.wallets.getBalance(wallet.id);
console.log(balance);`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
