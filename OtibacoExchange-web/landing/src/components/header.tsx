"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export function Header({ theme, onThemeToggle }: { theme: "light" | "dark"; onThemeToggle: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="rounded-2xl backdrop-blur-md bg-background/80 border border-border/40 shadow-lg transition-all">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-sm">
                OB
              </div>
              <span className="hidden sm:inline font-bold text-lg text-foreground">OtiBacoExchange</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>

              {/* Products Dropdown */}
              <div className="group relative">
                <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg">
                  Products
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <NavLink href="/products/wallet" className="block px-4 py-3 text-sm hover:bg-muted rounded-t-xl">
                    Wallet
                  </NavLink>
                  <NavLink href="/products/exchange" className="block px-4 py-3 text-sm hover:bg-muted">
                    Exchange
                  </NavLink>
                  <NavLink href="/products/cards" className="block px-4 py-3 text-sm hover:bg-muted">
                    Virtual Cards
                  </NavLink>
                  <NavLink href="/products/api" className="block px-4 py-3 text-sm hover:bg-muted">
                    API
                  </NavLink>
                  <NavLink
                    href="/products/mobile-app"
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-b-xl border-t border-border"
                  >
                    Mobile App
                  </NavLink>
                </div>
              </div>

              <NavLink href="/company/about">About</NavLink>
              <NavLink href="/company/careers">Careers</NavLink>
              <NavLink href="/company/partners">Partners</NavLink>
              <NavLink href="/resources">Resources</NavLink>
            </div>

            {/* CTA + Theme + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link
                href="/company/contact"
                className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Contact Us
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 rounded-xl backdrop-blur-md bg-card border border-border/40 shadow-lg px-4 py-4 space-y-2">
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/products/wallet" onClick={() => setIsOpen(false)}>
            Wallet
          </MobileNavLink>
          <MobileNavLink href="/products/exchange" onClick={() => setIsOpen(false)}>
            Exchange
          </MobileNavLink>
          <MobileNavLink href="/products/cards" onClick={() => setIsOpen(false)}>
            Virtual Cards
          </MobileNavLink>
          <MobileNavLink href="/products/api" onClick={() => setIsOpen(false)}>
            API
          </MobileNavLink>
          <MobileNavLink href="/products/mobile-app" onClick={() => setIsOpen(false)}>
            Mobile App
          </MobileNavLink>
          <MobileNavLink href="/company/about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="/company/careers" onClick={() => setIsOpen(false)}>
            Careers
          </MobileNavLink>
          <MobileNavLink href="/company/partners" onClick={() => setIsOpen(false)}>
            Partners
          </MobileNavLink>
          <MobileNavLink href="/resources" onClick={() => setIsOpen(false)}>
            Resources
          </MobileNavLink>
          <Link
            href="/company/contact"
            className="block w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50 ${className}`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
    >
      {children}
    </Link>
  )
}
