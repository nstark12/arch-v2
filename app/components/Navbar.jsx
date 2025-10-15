"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useRef as useRef2 } from "react";
import AccessibilityControls from "./AccessibilityControls";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const ddRef = useRef(null);
  const hoverTimer = useRef2(null);

  useEffect(() => {
    function onDoc(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setMenu(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const nav = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Events & Camps", href: "/events" },
    { label: "Resources", href: "/resources" },
  ];

  const prevention = [
    { label: "Overview", href: "/prevention" },
    { label: "Shaken Baby Syndrome", href: "/prevention/shaken-baby" },
    { label: "Lead Exposure", href: "/prevention/lead" },
    { label: "Water Beads", href: "/prevention/water-beads" },
    { label: "Safe Sleep", href: "/prevention/safe-sleep" },
    { label: "Medication Safety", href: "/prevention/medication-safety" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      {/* --- Accessibility / Help Bar --- */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-center md:text-left">
            Need help now?{" "}
            <Link href="/contact" className="underline hover:text-secondary">
              Contact ARCh
            </Link>
          </p>
          <AccessibilityControls />
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 
          Mobile: 3-col grid so logo is centered, menu button sits right.
          Desktop (xl+): normal flex row.
        */}
        <nav
          className="py-3 xl:py-4 grid grid-cols-3 items-center xl:flex xl:items-center xl:justify-between"
          aria-label="Main"
        >
          {/* Left spacer on mobile to balance the centered logo */}
          <div className="block xl:hidden" aria-hidden="true" />

          {/* Brand (centered on mobile, left on desktop) */}
          <Link
            href="/"
            className="justify-self-center xl:justify-self-start"
            aria-label="ARCh home"
          >
            <Image
              src={"/logo.webp"}
              alt="ARCh logo"
              width={300}
              height={100}
              className="h-auto w-40 sm:w-48 md:w-56 xl:w-[300px]"
              priority
            />
          </Link>

          {/* Mobile toggle (right side on mobile) */}
          <div className="flex justify-end xl:hidden">
            <button
              onClick={() => setMenu((v) => !v)}
              className="p-2 rounded border"
              aria-expanded={menu}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* Desktop navigation (now xl and up to prevent crowding) */}
          <ul className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {nav.map((n) => (
              <li key={n.href} className="whitespace-nowrap">
                <Link className="hover:text-primary font-medium" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}

            {/* Prevention dropdown: hover open w/ slight closing delay */}
            <li
              className="relative"
              ref={ddRef}
              onMouseEnter={() => {
                clearTimeout(hoverTimer.current);
                setOpen(true);
              }}
              onMouseLeave={() => {
                hoverTimer.current = setTimeout(() => setOpen(false), 150);
              }}
            >
              <button
                className="inline-flex items-center gap-1 hover:text-primary font-medium whitespace-nowrap"
                aria-expanded={open}
                aria-haspopup="true"
                aria-controls="prevention-menu"
              >
                Prevention <span aria-hidden="true">▾</span>
              </button>

              <div
                id="prevention-menu"
                role="menu"
                className={`absolute right-0 mt-3 w-80 bg-white border rounded-xl shadow-soft p-2 transition-all duration-150 ease-out ${
                  open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 gap-1">
                  {prevention.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      role="menuitem"
                      className="px-3 py-2 rounded hover:bg-gray-50 focus:bg-gray-50 focus-visible:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* CTAs with tighter sizing right below xl to prevent collision */}
            <li className="whitespace-nowrap">
              <Link
                href="/get-help"
                className="bg-primary text-white px-3 py-2 rounded bg-primary-hover lg:text-sm xl:text-base"
              >
                Get Help
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link
                href="https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
                className="bg-secondary text-black px-3 py-2 rounded font-semibold hover:brightness-95 lg:text-sm xl:text-base"
                target="blank"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {menu && (
          <div
            id="mobile-menu"
            className="xl:hidden mt-2 mb-4 border rounded-xl p-3 space-y-2"
          >
            {nav.map((n) => (
              <Link
                key={n.href}
                className="block px-2 py-2 rounded hover:bg-gray-50"
                href={n.href}
                onClick={() => setMenu(false)}
              >
                {n.label}
              </Link>
            ))}

            <details className="border rounded">
              <summary className="px-2 py-2 cursor-pointer">Prevention</summary>
              <div className="p-2">
                {prevention.map((p) => (
                  <Link
                    key={p.href}
                    className="block px-2 py-2 rounded hover:bg-gray-50"
                    href={p.href}
                    onClick={() => setMenu(false)}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </details>

            <div className="pt-2">
              <AccessibilityControls />
            </div>

            <div className="flex gap-2 pt-3">
              <Link
                href="/get-help"
                className="flex-1 text-center bg-primary text-white px-4 py-2 rounded bg-primary-hover"
                onClick={() => setMenu(false)}
              >
                Get Help
              </Link>
              <Link
                href="https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
                className="flex-1 text-center bg-secondary text-black px-4 py-2 rounded font-semibold hover:brightness-95"
                onClick={() => setMenu(false)}
                target="blank"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
