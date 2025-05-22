// app/components/Footer.tsx
"use client";
import { useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const IMPORTANT_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Products", href: "#" },
  { label: "Services", href: "#" },
];

const OTHER_LINKS = [
  { label: "Infrastructure", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const CONTACT_INFO = {
  email: "info@arabellapapers.com",
  address: [
    "G1-592, SitaPura",
    "Industrial Area Jaipur,",
    "Rajasthan, India - 302022",
  ],
};

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <footer className="bg-[#232221] text-white w-full pt-10 pb-3 px-2">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-1 gap-10 md:gap-4">
        {/* Left: Logo + About + Socials */}
        <div className="">
          <div className="text-[#B39349] text-3xl font-serif font-medium tracking-widest mb-2 select-none">
            ARABELLA PAPERS
          </div>
          <div className="mt-5 mb-7 text-[1.13rem] leading-relaxed font-medium text-white/90">
            At Arabella Papers, We Specialize In Creating Custom-Designed Stationery That Commemorates Life’s Most Significant Events.
          </div>
          <div className="flex gap-3 mt-2">
            {SOCIALS.map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="h-10 w-10 bg-[#232221] border border-[#474646] rounded-md flex items-center justify-center hover:bg-[#B39349]/10 hover:border-[#B39349] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="text-2xl text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle 2: Links */}
        <div>
          <h4 className="text-xl font-bold mb-3 text-white">Important Links</h4>
          <ul className="space-y-2">
            {IMPORTANT_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg hover:text-[#B39349] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-white">Other Links</h4>
          <ul className="space-y-2">
            {OTHER_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg hover:text-[#B39349] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h4 className="text-xl font-bold mb-3 text-white">Contact Info</h4>
          <div className="mb-3">
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-[#B39349] transition block mb-2">
              {CONTACT_INFO.email}
            </a>
            <div className="text-lg whitespace-pre-line text-white/90">
              {CONTACT_INFO.address.join("\n")}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden mt-8">
        {[
          {
            label: "Important Links",
            content: (
              <ul className="pl-3 pb-2 space-y-2">
                {IMPORTANT_LINKS.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base hover:text-[#B39349] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            label: "Other Links",
            content: (
              <ul className="pl-3 pb-2 space-y-2">
                {OTHER_LINKS.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base hover:text-[#B39349] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            label: "Contact Info",
            content: (
              <div className="pl-3 pb-2 text-base">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#B39349] block mb-1">
                  {CONTACT_INFO.email}
                </a>
                <div className="whitespace-pre-line text-white/90">
                  {CONTACT_INFO.address.join("\n")}
                </div>
              </div>
            ),
          },
        ].map((sec, idx) => (
          <div key={sec.label} className="border-b border-[#474646]">
            <button
              className="flex justify-between items-center w-full py-3 font-bold text-lg"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span>{sec.label}</span>
              <span className="ml-3">
                {openIdx === idx ? "−" : "+"}
              </span>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openIdx === idx ? "max-h-96" : "max-h-0"}`}>
              {sec.content}
            </div>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-base text-white/70">
        ©2025 <span className="font-semibold text-[#B39349]">Arabella Papers.</span> All rights reserved.
      </div>
    </footer>
  );
}
