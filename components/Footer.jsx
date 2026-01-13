import Image from "next/image";
import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="border-t border-ui-border bg-ui-bg/80">
      <div className="container-base grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Image src="/logo.png" alt="Prem Industries" width={160} height={40} />
          <p className="text-muted text-sm">
            Precision injection moulding partner for high-volume manufacturing, tooling support, and turnkey assembly.
          </p>
          <div className="flex gap-3 text-xs uppercase tracking-[0.3em] text-ui-muted">
            <span>LinkedIn</span>
            <span>Youtube</span>
            <span>Instagram</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-ui-text">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-ui-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-ui-muted">
          <p className="text-sm font-semibold text-ui-text">Contact</p>
          <p>Prem Industries, Industrial Zone, Pune, India</p>
          <p>+91 90000 00000</p>
          <p>sales@premindustries.com</p>
        </div>
      </div>
      <div className="border-t border-ui-border/60 py-4 text-center text-xs text-ui-muted">
        © 2024 Prem Industries. All rights reserved.
      </div>
    </footer>
  );
}
