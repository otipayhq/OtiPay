"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Get In Touch</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Have questions? Contact our team in Lagos. We're here to help you trade crypto with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: "Email",
                value: "support@otibacoexchange.com",
                icon: Mail,
              },
              {
                title: "Phone",
                value: "+234 (901) 234-5678",
                icon: Phone,
              },
              {
                title: "Address",
                value: "Lagos, Nigeria",
                icon: MapPin,
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 border-0 text-center hover:shadow-lg transition-shadow h-full">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-1">{contact.title}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Visit Us in Lagos</h2>
              <div className="h-96 rounded-lg overflow-hidden border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3247165230707!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ce9e0b0c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OtiBacoExchange Location in Lagos, Nigeria"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Reach out to our Lagos-based team for any inquiries about trading, partnerships, or support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
