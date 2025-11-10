import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

interface JobListingProps {
  jobs: Job[]
}

export default function JobListing({ jobs }: JobListingProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Open Positions</h2>
          <p className="text-muted-foreground text-lg">Help us build the future of finance</p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 border hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground">
                      {job.department}
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground">{job.location}</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">{job.type}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{job.description}</p>
                </div>
                <Button variant="outline" className="gap-2 whitespace-nowrap bg-transparent">
                  Apply
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
