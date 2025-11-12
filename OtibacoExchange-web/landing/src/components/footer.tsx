"use client"
import type React from "react"
import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-t from-card/40 to-background/80 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Branding & App Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-lg">
                OB
              </div>
              <span className="font-bold text-lg text-foreground">OtiBaco</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Bridging crypto and traditional finance for Africa. Licensed and regulated in Nigeria.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
            </div>

            {/* App Store Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
              <Link href="#" className="inline-block hover:opacity-90 transition">
                <img
                  src="/download-on-the-app-store-apple-logo-svgrepo-com.png"
                  alt="Download on the App Store"
                  width={130}
                  height={40}
                  className="rounded-lg"
                />
              </Link>
              <Link href="#" className="inline-block hover:opacity-90 transition">
                <img
                  src="/google-play-badge-logo-svgrepo-com.png"
                  alt="Get it on Google Play"
                  width={130}
                  height={40}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-2">
            <FooterColumn
              title="Products"
              links={[
                { href: "/products/wallet", label: "Wallet" },
                { href: "/products/exchange", label: "Exchange" },
                { href: "/products/cards", label: "Virtual Cards" },
                { href: "/products/api", label: "API Access" },
                { href: "/products/mobile-app", label: "Mobile App" },
              ]}
            />
            <FooterColumn
              title="Resources"
              links={[
                { href: "/resources/blog", label: "Blog" },
                { href: "/resources/developers", label: "Developers" },
                { href: "/resources/docs", label: "Documentation" },
                { href: "/resources/support", label: "Support" },
              ]}
            />
            <FooterColumn
              title="Legal"
              links={[
                { href: "/legal/terms", label: "Terms" },
                { href: "/legal/privacy", label: "Privacy" },
                { href: "/legal/aml-kyc", label: "AML/KYC" },
                { href: "/legal/cookies", label: "Cookies" },
              ]}
            />
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Subscribe to our Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest trends, features, and insights from OtiBaco.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2025 <span className="font-semibold">OtiPay</span>. All rights reserved. Regulated in Nigeria.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm">
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

/* ==== Components ==== */
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="p-2 rounded-md bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-colors"
    >
      {icon}
    </Link>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold text-foreground mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
