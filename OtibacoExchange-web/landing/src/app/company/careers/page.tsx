import JobListing from "@/components/job-listing"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Careers | Join Our Team",
  description: "Join our team and help build the future of finance.",
}

export default function CareersPage() {
  const jobs = [
    {
      id: "1",
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build scalable payment infrastructure serving millions of users globally.",
    },
    {
      id: "2",
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead product strategy and vision for our core financial products.",
    },
    {
      id: "3",
      title: "Security Engineer",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      description: "Protect our infrastructure with cutting-edge security practices.",
    },
    {
      id: "4",
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Transform data into actionable insights to drive business decisions.",
    },
    {
      id: "5",
      title: "Customer Success Manager",
      department: "Customer Support",
      location: "Multiple",
      type: "Full-time",
      description: "Ensure our customers succeed and have exceptional support experiences.",
    },
    {
      id: "6",
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling campaigns that showcase our innovative solutions.",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Join Our Team</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">Help us build the future of finance</p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Competitive Benefits",
                description: "Industry-leading salaries, equity, health insurance, and retirement plans.",
              },
              {
                title: "Remote Friendly",
                description: "Work from anywhere with flexible working arrangements.",
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning and clear career advancement paths.",
              },
              {
                title: "Inclusive Culture",
                description: "Diverse team celebrating different backgrounds and perspectives.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="space-y-2">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JobListing jobs={jobs} />
      <CTASection />
    </main>
  )
}
