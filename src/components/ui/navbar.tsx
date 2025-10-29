"use client"

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-background/60 border-b border-border">
      <Container className="flex h-14 items-center justify-between">
        <Link href="#hero" className="font-bold">
          Arif
        </Link>

        <nav>
          <ul className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "text-sm font-medium hover:underline hover:underline-offset-4 px-2 py-1 rounded hover:text-orange-600"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* mobile: simple menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer">Menu</summary>
              <div className="absolute right-0 mt-2 w-40 rounded-md border bg-popover p-2">
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="block px-2 py-1 rounded hover:bg-muted hover:text-orange-600">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </nav>
      </Container>
    </header>
  );
}
