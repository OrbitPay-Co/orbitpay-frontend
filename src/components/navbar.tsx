"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Send } from "lucide-react"

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Treasury", href: "/treasury" },
  { label: "Payroll", href: "/payroll" },
  { label: "Vesting", href: "/vesting" },
  { label: "Governance", href: "/governance" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">OrbitPay</Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm">
            <Send data-icon="inline-start" />
            Connect Wallet
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pt-12">
            <SheetHeader><SheetTitle>OrbitPay</SheetTitle></SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === link.href ? "text-foreground bg-muted" : "text-muted-foreground"
                }`}>{link.label}</Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
