import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsYoutube, BsArrowUp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer role="contentinfo" className="full-bleed text-white">
      {/* Accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: "var(--color-secondary)" }}
      />

      {/* Main footer gradient */}
      <div
        className="py-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,94,138,1) 0%, rgba(0,131,192,1) 60%, rgba(0,131,192,0.95) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-10 md:gap-12 md:grid-cols-5">
            {/* Brand + short mission */}
            <div className="md:col-span-2 space-y-4">
              <Link href="/" aria-label="ARCh home">
                {/* Use your existing logo */}
                <Image
                  src="/logo.webp"
                  width={220}
                  height={70}
                  className="h-auto w-40 sm:w-48"
                  alt="ARCh logo"
                />
              </Link>
              <p className="text-white/90 mt-6">
                Empowering children and adults with disabilities and growing
                prevention & awareness across our community.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-1">
                <Social href="https://facebook.com" label="Facebook">
                  <BsFacebook className="h-5 w-5" />
                </Social>
                <Social href="https://instagram.com" label="Instagram">
                  <BsInstagram className="h-5 w-5" />
                </Social>
                <Social href="https://youtube.com" label="YouTube">
                  <BsYoutube className="h-5 w-5" />
                </Social>
              </div>
            </div>

            {/* Quick links */}
            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3"
            >
              <div>
                <h3 className="font-semibold mb-3">Explore</h3>
                <ul className="space-y-2">
                  <li>
                    <FooterLink href="/about">About</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/services">Services</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/events">Events & Camps</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/resources">Resources</FooterLink>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Get Involved</h3>
                <ul className="space-y-2">
                  <li>
                    <FooterLink href="/get-involved/volunteer">
                      Volunteer
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/donate">Donate</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/jobs">Jobs</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/partners">Partner with ARCh</FooterLink>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <FooterLink href="/contact">Contact</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/prevention">Prevention</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/stories">Stories</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/privacy">Privacy</FooterLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} ARCh. All rights reserved.
            </p>

            {/* Back to top + Donate CTA */}
            <div className="flex items-center gap-3">
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 border border-white/30 hover:bg-white/10"
                aria-label="Back to top"
              >
                <BsArrowUp className="h-4 w-4" />
                <span className="text-sm">Back to top</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable styled link */
function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-white/90 hover:text-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
    >
      {children}
    </Link>
  );
}

/* Reusable social icon button */
function Social({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
    >
      {children}
    </a>
  );
}
