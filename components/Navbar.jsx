"use client";

import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality" },
  { href: "/facility", label: "Facility" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ui-border/80 bg-ui-bg/80 backdrop-blur">
      <nav className="container-base flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Prem Industries" width={140} height={40} priority />
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-ui-text lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-ui-border p-2 text-ui-text lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-ui-border bg-ui-bg lg:hidden">
          <div className="container-base flex flex-col gap-4 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-ui-text transition hover:text-brand-red"
              >
                {item.label}
              </Link>
            ))}
            <PrimaryButton href="/contact" className="w-full justify-center">
              Get a Quote
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
