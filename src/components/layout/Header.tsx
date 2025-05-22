// components/Header.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

/* ─────────────────────────── Icons (inline SVG) ─────────────────────────── */
const Bars3Icon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    width={32}
    height={32}
  >
    <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XMarkIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    width={28}
    height={28}
  >
    <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ─────────────────────────────── Nav links ──────────────────────────────── */
const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/products" },
  { name: "SERVICES", href: "/services" },
  { name: "COLLECTION", href: "/collection" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "BLOGS", href: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();          // ← current route
  const [open, setOpen] = useState(false); // mobile menu state

  /* helper */
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full bg-black relative z-50">
      {/* ─────────────── Top bar ─────────────── */}
      <div className="flex items-center justify-between px-6 py-1 relative z-[60]">
        {/* Logo */}
        <span className="tracking-widest font-semibold text-lg md:text-xl select-none">
          <span className="text-[#CF9E41]">ARABELLA</span>{" "}
          <span className="text-white">PAPERS</span>
        </span>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`md:hidden rounded-full p-1 transition-colors duration-300
            ${open ? "bg-white shadow-md" : "bg-transparent"}`}
        >
          {open ? (
            <XMarkIcon className="text-black" />   
          ) : (
            <Bars3Icon className="text-white" />
          )}
        </button>
      </div>

      {/* ─────────────── Desktop nav ─────────────── */}
      <nav className="hidden md:flex justify-center bg-black">
        {navLinks.map((l) => (
          <a
            key={l.name}
            href={l.href}
            className={`px-6 py-3 text-xs font-medium tracking-[.18em] transition
              ${
                isActive(l.href)
                  ? "bg-black text-white"         /* active link */
                  : "text-gray-300 hover:text-white"
              }`}
          >
            {l.name}
          </a>
        ))}
      </nav>

      {/* ─────────────── Overlay (mobile) ─────────────── */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* ─────────────── Mobile dropdown ─────────────── */}
      <div
        className={`fixed left-0 top-0 w-full md:hidden z-50 overflow-hidden
          transition-all duration-500
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        style={{
          background: "white",
          borderBottomLeftRadius: open ? "0.5rem" : 0,
          borderBottomRightRadius: open ? "0.5rem" : 0,
          boxShadow: open ? "0 12px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <nav className="pt-[72px] flex flex-col">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={closeMenu}         /* closes after click */
              className={`py-3 text-center text-xs font-medium tracking-[.18em] transition-colors
                ${
                  isActive(l.href)
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 hover:text-black"
                }`}
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
