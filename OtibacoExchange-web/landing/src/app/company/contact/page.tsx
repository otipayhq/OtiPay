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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Get In Touch</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Whether you need help with transactions, account setup, or business inquiries — our Lagos team is here for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: "Email Us",
                value: "support@OtiPay.com",
                icon: Mail,
                description: "Fast response within minutes."
              },
              {
                title: "Call Support",
                value: "+234 901 234 5678",
                icon: Phone,
                description: "Mon – Sat | 9AM – 6PM"
              },
              {
                title: "Office Address",
                value: "Festac Town, Lagos, Nigeria",
                icon: MapPin,
                description: "Visit our Lagos office."
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
                  <Card className="p-6 border-0 text-center hover:shadow-lg transition-shadow h-full rounded-2xl">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-1">{contact.title}</h3>
                    <p className="text-muted-foreground mb-2">{contact.description}</p>
                    <p className="font-medium text-primary">{contact.value}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Visit Us in Festac, Lagos</h2>
              <p className="text-muted-foreground text-sm">
                Our Lagos office serves customers, partners, and businesses across Nigeria.  
                Walk in for support or scheduled meetings.
              </p>

              <div className="h-[450px] rounded-2xl overflow-hidden border border-border shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1178185727956!2d3.2876108747294136!3d6.488549223119861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dcb0e0dc2c5%3A0xc1b686113e5c2c0!2sFestac%20Town%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OtiPay Location - Festac Lagos"
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">📍 Office Location</p>
                <p className="text-sm text-muted-foreground">
                  22 Road, Festac Town, Lagos, Nigeria
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  )
}
