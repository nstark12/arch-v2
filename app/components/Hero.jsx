"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SLIDE_MS = 6000; // auto-advance timing

const slides = [
  {
    src: "/photos/hero.webp",
    alt: "ARCh summer camp gains group smiling outdoors",
  },
  {
    src: "/photos/hero3.webp",
    alt: "ARCh camp gains program",
  },
  {
    src: "/photos/hero2.webp",
    alt: "ARCh camp gains program girls crafts",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance (respects reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (paused || reduce) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  function goTo(i) {
    setIndex((i + slides.length) % slides.length);
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  return (
    <section
      aria-label="Hero slideshow"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[58vh] md:h-[72vh]">
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* 1) Base vertical scrim (stronger) */}
            {/* 1) Lighter vertical gradient */}
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.18) 100%)",
              }}
            />

            {/* 2) Softer left-to-right gradient (for text side) */}
            <div
              className="absolute inset-0 hidden md:block"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0.0) 100%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Text overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* 3) Mobile 'chip' behind text for readability; remove at md+ */}
          <div className="pointer-events-auto max-w-2xl text-white">
            <div className="md:bg-transparent md:backdrop-blur-0 bg-black/40 backdrop-blur-[2px] rounded-lg p-4 md:p-0 inline-block">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                Every person belongs.{" "}
                <span className="text-secondary">Every family matters.</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                ARCh empowers individuals with disabilities, supports
                caregivers, and educates our community to build a more inclusive
                future.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/get-help"
                  className="bg-primary text-white px-5 py-3 rounded bg-primary-hover"
                >
                  Get Help
                </Link>
                <Link
                  href="https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
                  className="bg-secondary text-black px-5 py-3 rounded font-semibold hover:brightness-95"
                  target="_blank"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Previous / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="rounded bg-black/50 text-white px-3 py-2 hover:bg-black/60 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="rounded bg-black/50 text-white px-3 py-2 hover:bg-black/60 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* SR-only status updates */}
      <p className="sr-only" role="status" aria-live="polite">
        Slide {index + 1} of {slides.length}. {paused ? "Paused." : "Playing."}
      </p>
    </section>
  );
}
