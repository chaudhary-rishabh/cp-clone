"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

type Slide = {
  id: number;
  tag: string;
  title: string;
  description: string;
  media: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
};

const slides: Slide[] = [
  {
    id: 1,
    tag: "CREATING LASTING MEMORIES",
    title: "Where Every Invitation is a Masterpiece",
    description:
      "We work with design enthusiasts and design studio owners who are eager to push boundaries without delays or inconsistencies.",
    media: {
      type: "image",
      src: "/cpbig1.jpeg",
    },
  },
  {
    id: 2,
    tag: "EVENT ELEVATION",
    title: "Elevate Your Events with Arabella's Signature Stationery",
    description:
      "Transform your special moments into spectacular events with uniquely crafted, elegant invitations.",
    media: {
      type: "video",
      src: "/cp1.jpeg",
      poster: "/hero/slide2-poster.webp",
    },
  },
  {
    id: 3,
    tag: "BUILDING A LEGACY",
    title: "Craft Your Legacy with Arabella's Luxurious Paper Creations",
    description:
      "Leave a lasting impression with our meticulously designed invitations, where quality meets timeless elegance.",
    media: {
      type: "image",
      src: "/cpbig2.jpeg",
    },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDir, setSwipeDir] = useState<"left" | "right" | null>(null);
  const touchStartX = useRef<number | null>(null);
  const swipeThreshold = 50;

  const next = useCallback(() => {
    setSwipeDir("left");
    setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      setSwipeDir(null);
    }, 250);
  }, []);
  const prev = useCallback(() => {
    setSwipeDir("right");
    setTimeout(() => {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
      setSwipeDir(null);
    }, 250);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Swipe gesture handlers
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(false);
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const deltaX = e.touches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 5) setIsSwiping(true);
    }
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX < 0) next(); // swipe left
        else prev(); // swipe right
      }
    }
    touchStartX.current = null;
    setIsSwiping(false);
  }

  const activeSlide = slides[index];

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden select-none touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => { touchStartX.current = null; setIsSwiping(false); }}
    >
      {/* Slide layers with swipe animation */}
      {slides.map((slide, i) => {
        let state = "";
        if (i === index) state = "active";
        else if ((i + 1) % slides.length === index) state = "prev";
        else if ((i - 1 + slides.length) % slides.length === index) state = "next";

        return (
          <div
            key={slide.id}
            className={
              `absolute inset-0 transition-all duration-700 ease-in-out z-20
              ${i === index ? "opacity-100" : "opacity-0"}
              ${
                isSwiping && swipeDir === "left" && i === index
                  ? "-translate-x-1/2 scale-95"
                  : isSwiping && swipeDir === "right" && i === index
                  ? "translate-x-1/2 scale-95"
                  : "translate-x-0 scale-100"
              }
              `
            }
            style={{ willChange: "opacity, transform" }}
          >
            {slide.media.type === "image" ? (
              <Image
                src={slide.media.src}
                alt=""
                fill
                priority={i === index}
                className="object-contain"
              />
            ) : (
               <Image
                src={slide.media.src}
                alt=""
                fill
                priority={i === index}
                className="object-contain"
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        );
      })}

      {/* Text content */}
      <div className="relative z-30 flex flex-col justify-center h-full px-6 sm:px-12 max-w-3xl">
        <p className="text-gold uppercase text-[10px] tracking-widest mb-2">
          {activeSlide.tag}
        </p>
        <h1 className="text-white font-serif text-3xl sm:text-5xl leading-snug whitespace-pre-line">
          {activeSlide.title}
        </h1>
      </div>

      {/* Bottom bar with slide index, description, nav buttons */}
      <div className="absolute bottom-0 left-0 w-full flex items-stretch text-white bg-[#1d1d1dcc]">
        <div className="px-6 py-4 text-gold font-serif text-2xl tracking-widest min-w-[72px] text-center">
          {String(activeSlide.id).padStart(2, "0")}
        </div>
        <div className="flex-1 px-4 py-4 text-[12px] sm:text-sm leading-snug">
          {activeSlide.description}
        </div>
        <div className="flex flex-col">
          <button
            aria-label="Next slide"
            onClick={next}
            className="h-1/2 w-10 bg-[#1d1d1d]/90 flex items-center justify-center hover:bg-[#2b2b2b]"
          >
            <span className="rotate-90 text-lg select-none">›</span>
          </button>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="h-1/2 w-10 bg-[#1d1d1d]/90 flex items-center justify-center hover:bg-[#2b2b2b]"
          >
            <span className="-rotate-90 text-lg select-none">›</span>
          </button>
        </div>
      </div>

      {/* Bottom right slide counter */}
      <div className="absolute bottom-4 right-4 z-30 text-sm tracking-widest text-white select-none">
        {String(activeSlide.id).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
