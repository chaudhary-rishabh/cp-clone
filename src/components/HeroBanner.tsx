"use client";

import Image from "next/image";

type HeroBannerProps = {
  bgImageSrc: string;
  title: string;
  breadcrumbs: string[];
  bgImageAlt?: string;
  cardBg?: string;
};

export default function HeroBanner({
  bgImageSrc,
  bgImageAlt = "",
  title,
  breadcrumbs,
  cardBg = "#e7e6df",
}: HeroBannerProps) {
  return (
    <section className="relative w-full mb-20">
      {/* ── Background ───────────────────────────────────────────── */}
      <div className="relative h-[30vh] min-h-[200px] w-full">
        <Image
          src={bgImageSrc}
          alt={bgImageAlt}
          fill
          priority
          quality={90}
          sizes="
            (max-width: 768px) 400px,
            (max-width: 1024px) 800px,
            2500px
          "
          className="object-cover"
        />
      </div>

      {/* ── Floating card ───────────────────────────────────────── */}
      <div className="absolute inset-x-0 -bottom-12 flex justify-center px-4">
        <div className="border-[3px] border-black w-full max-w-5xl">
          <div
            className="border-[3px] border-black text-center px-6 py-10 sm:py-14"
            style={{ background: cardBg }}
          >
            <h1 className="font-serif text-3xl text-gray-700 sm:text-5xl font-medium mb-4">
              {title}
            </h1>

            <nav
              aria-label="Breadcrumb"
              className="text-sm sm:text-base text-gray-700"
            >
              {breadcrumbs.join(" \u2013 ")}
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer so content below isn’t hidden behind the card */}
      <div className="h-24" />
    </section>
  );
}
