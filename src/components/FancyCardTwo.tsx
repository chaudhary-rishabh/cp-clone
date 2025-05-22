"use client";

import Image from "next/image";
import type { ReactNode } from "react";

export type FancyCardProps = {
  /** Blurred / covered image shown on the left (or on top on small screens) */
  bgImageSrc: string;
  /** Fore-ground “polaroid” image that half-overlaps the divider */
  focusImageSrc: string;
  /** Accessible alt text for the foreground image */
  focusImageAlt?: string;
  /** Card heading */
  title: ReactNode;
  /** Card body text */
  description: ReactNode;
};

export default function FancyCardTwo({
  bgImageSrc,
  focusImageSrc,
  focusImageAlt = "",
  title,
  description,
}: FancyCardProps) {
  return (
    <article className="relative w-3/4 mx-auto h-96 bg-white my-20 isolate overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 flex flex-col md:flex-row">
      {/* ——— Text block ——— */}
      <div className="flex-1 px-6 pt-20 pb-8 md:p-10 md:pl-28">
        <h2 className="font-serif text-gray-700 text-2xl md:text-3xl font-semibold mb-3">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
      {/* ——— Foreground “polaroid” photo ——— */}
      <figure
  className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    md:absolute  md:top-1/2 md:left-[60%]   /* example tweak */
    md:-translate-x-1/2 md:-translate-y-1/2 md:-ml-20
    w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40
    rounded-2xl overflow-hidden ring-4 ring-white shadow-lg z-10
  "
>
        <Image
          src={focusImageSrc}
          alt={focusImageAlt}
          fill
          className="object-cover"
          sizes="128px"
        />
      </figure>
      {/* ——— Left / Top background image ——— */}
      <div className="relative md:w-6/12">
        <Image
          src={bgImageSrc}
          alt=""
          fill
          sizes="100vw, 33vw"
          priority
        />
        {/* subtle blur / tint */}
      </div>

    </article>
  );
}
