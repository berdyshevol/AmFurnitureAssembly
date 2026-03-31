import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLinks } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + tagline */}
          <div>
            <Image
              src="/photos/logo-vector3.svg"
              alt="AM Furniture Assembly"
              width={400}
              height={120}
              className="h-[70px] w-auto"
            />
            <p className="mt-4 text-sm text-secondary leading-relaxed">
              Professional furniture assembly service you can trust.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary">
              <li>
                <a
                  href={siteConfig.phoneTel}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>

          {/* Col 4: Hours */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
              Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary">
              <li>{siteConfig.hours.weekdays}</li>
              <li>{siteConfig.hours.saturday}</li>
              <li>{siteConfig.hours.sunday}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
