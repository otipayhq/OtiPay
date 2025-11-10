import type React from "react"
import Link from "next/link"
import { Linkedin, Twitter, Github, MapPin, Apple, Smartphone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-t from-card/50 to-background/50 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-border/40">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold">
                OB
              </div>
              <span className="font-bold text-foreground">OtiBaco</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bridging crypto and traditional finance for Africa. Licensed and regulated in Nigeria.
            </p>
            <div className="flex gap-3 mt-4">
              <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
            </div>
            <div className="flex gap-2 mt-6 pt-4 border-t border-border/40">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg transition-all text-sm font-medium"
              >
                <Apple size={16} />
                <div>
                  <div className="text-xs opacity-75">Download on</div>
                  <div className="font-semibold leading-none">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card hover:bg-secondary hover:shadow-lg transition-all text-sm font-medium"
              >
                <Smartphone size={16} />
                <div>
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="font-semibold leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-4">Nigeria Office</h3>
                <p className="text-sm text-muted-foreground mt-1">Lagos, Nigeria</p>
                <p className="text-xs text-muted-foreground mt-1">Licensed by CBN and FMVA</p>
              </div>
            </div>
            <div className="h-40 rounded-lg overflow-hidden border border-border/40 bg-muted shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3247165230707!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ce9e0b0c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground mb-4">Subscribe to Newsletter</h3>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-card text-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-background hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/wallet" className="text-muted-foreground hover:text-foreground transition-colors">
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  href="/products/exchange"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Exchange
                </Link>
              </li>
              <li>
                <Link href="/products/cards" className="text-muted-foreground hover:text-foreground transition-colors">
                  Virtual Cards
                </Link>
              </li>
              <li>
                <Link href="/products/api" className="text-muted-foreground hover:text-foreground transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mobile-app"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/company/partners"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/developers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/resources/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/support"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/aml-kyc" className="text-muted-foreground hover:text-foreground transition-colors">
                  AML/KYC
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 OtiBacoExchange. All rights reserved. Regulated in Nigeria.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-colors"
    >
      {icon}
    </a>
  )
}
