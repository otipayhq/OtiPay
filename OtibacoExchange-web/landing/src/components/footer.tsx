import type React from "react"
import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-t from-card/50 to-background/50 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
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

            {/* App Store & Google Play Badges */}
            <div className="flex gap-2 mt-6 pt-4 border-t border-border/40">
              <Link href="#" className="inline-block hover:opacity-90 transition">
                <img
                  src="/download-on-the-app-store-apple-logo-svgrepo-com.png"
                  alt="Download on the App Store"
                  width={140}
                  height={45}
                  className="rounded-lg"
                />
              </Link>
              <Link href="#" className="inline-block hover:opacity-90 transition">
                <img
                  src="/google-play-badge-logo-svgrepo-com.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={45}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/company/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/company/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/company/partners" className="text-muted-foreground hover:text-foreground transition-colors">Partners</Link></li>
              <li><Link href="/company/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground mb-4">Subscribe to Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-4">
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

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <FooterColumn title="Products" links={[
            { href: "/products/wallet", label: "Wallet" },
            { href: "/products/exchange", label: "Exchange" },
            { href: "/products/cards", label: "Virtual Cards" },
            { href: "/products/api", label: "API" },
            { href: "/products/mobile-app", label: "Mobile App" },
          ]}/>
          <FooterColumn title="Resources" links={[
            { href: "/resources/blog", label: "Blog" },
            { href: "/resources/developers", label: "Developers" },
            { href: "/resources/docs", label: "Documentation" },
            { href: "/resources/support", label: "Support" },
          ]}/>
          <FooterColumn title="Legal" links={[
            { href: "/legal/terms", label: "Terms" },
            { href: "/legal/privacy", label: "Privacy" },
            { href: "/legal/aml-kyc", label: "AML/KYC" },
            { href: "/legal/cookies", label: "Cookies" },
          ]}/>
          <FooterColumn title="Company" links={[
            { href: "/company/about", label: "About" },
            { href: "/company/careers", label: "Careers" },
            { href: "/company/partners", label: "Partners" },
            { href: "/company/contact", label: "Contact" },
          ]}/>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 OtiBacoExchange. All rights reserved. Regulated in Nigeria.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="p-2 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-colors"
    >
      {icon}
    </Link>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
