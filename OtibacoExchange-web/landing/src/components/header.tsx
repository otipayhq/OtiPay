"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header({ theme, onThemeToggle }: { theme: "light" | "dark"; onThemeToggle: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (name: string) => setActiveDropdown(activeDropdown === name ? null : name)

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    else document.removeEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="rounded-2xl backdrop-blur-md bg-background/80 border border-border/40 shadow-lg transition-all">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-sm">
                OP
              </div>
              <span className="hidden sm:inline font-bold text-lg text-foreground">OtiPay</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 relative">
              <NavLink href="/">Home</NavLink>

              <Dropdown label="Products">
                <DropdownItem href="/products/wallet">Wallet</DropdownItem>
                <DropdownItem href="/products/exchange">Exchange</DropdownItem>
                <DropdownItem href="/products/cards">Virtual Cards</DropdownItem>
                <DropdownItem href="/products/api">API</DropdownItem>
                <DropdownItem href="/products/mobile-app">Mobile App</DropdownItem>
              </Dropdown>

              <Dropdown label="Company">
                <DropdownItem href="/company/about">About</DropdownItem>
                <DropdownItem href="/company/careers">Careers</DropdownItem>
                <DropdownItem href="/company/partners">Partners</DropdownItem>
                <DropdownItem href="/company/contact">Contact</DropdownItem>
              </Dropdown>

              <NavLink href="/resources">Resources</NavLink>
            </div>

            {/* Theme + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <motion.button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors relative"
                aria-label="Toggle menu"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 px-4"
          >
            <div className="rounded-xl backdrop-blur-md bg-card border border-border/40 shadow-lg px-4 py-4 space-y-2">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>

              {/* Products */}
              <MobileDropdown
                title="Products"
                isActive={activeDropdown === "products"}
                toggle={() => toggleDropdown("products")}
              >
                <MobileNavLink href="/products/wallet" onClick={() => setIsOpen(false)}>Wallet</MobileNavLink>
                <MobileNavLink href="/products/exchange" onClick={() => setIsOpen(false)}>Exchange</MobileNavLink>
                <MobileNavLink href="/products/cards" onClick={() => setIsOpen(false)}>Virtual Cards</MobileNavLink>
                <MobileNavLink href="/products/api" onClick={() => setIsOpen(false)}>API</MobileNavLink>
                <MobileNavLink href="/products/mobile-app" onClick={() => setIsOpen(false)}>Mobile App</MobileNavLink>
              </MobileDropdown>

              {/* Company */}
              <MobileDropdown
                title="Company"
                isActive={activeDropdown === "company"}
                toggle={() => toggleDropdown("company")}
              >
                <MobileNavLink href="/company/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="/company/careers" onClick={() => setIsOpen(false)}>Careers</MobileNavLink>
                <MobileNavLink href="/company/partners" onClick={() => setIsOpen(false)}>Partners</MobileNavLink>
                <MobileNavLink href="/company/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              </MobileDropdown>

              <MobileNavLink href="/resources" onClick={() => setIsOpen(false)}>Resources</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- COMPONENTS ---------- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-all rounded-lg hover:bg-muted/50"
    >
      {children}
    </Link>
  )
}

function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-all rounded-lg">
        {label}
        <ChevronDown className="size-4 group-hover:rotate-180 transition-transform" />
      </button>

      <div className="absolute left-0 top-full mt-2 w-56 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className="py-2 flex flex-col">{children}</div>
      </div>
    </div>
  )
}

function DropdownItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-all"
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
      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-muted transition-all"
    >
      {children}
    </Link>
  )
}

function MobileDropdown({
  title,
  children,
  isActive,
  toggle,
}: {
  title: string
  children: React.ReactNode
  isActive: boolean
  toggle: () => void
}) {
  return (
    <div>
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-muted transition-all"
      >
        {title}
        <ChevronDown className={`size-4 transition-transform ${isActive ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pl-4 space-y-1 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
