"use client";
import { useEffect, useRef, useState } from "react";
import { BsQuote } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const AUTOPLAY_MS = 7000;

const testimonials = [
  {
    quote:
      "ARCh helped my son find friends and confidence. The staff met him where he was and cheered every step.",
    name: "Jasmine R.",
    role: "Parent of participant",
    org: "Waukesha County",
  },
  {
    quote:
      "The prevention workshop was a game-changer for our school. Clear steps, practical tools, and real impact.",
    name: "Mr. Alvarez",
    role: "School Counselor",
    org: "Crestview Middle",
  },
  {
    quote:
      "Volunteering with ARCh is the best part of my week. I’ve learned so much about inclusion and community.",
    name: "Evan M.",
    role: "Volunteer",
    org: "Community Programs",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    reduceMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const t = testimonials[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="rounded-xl shadow-soft bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="px-6 md:px-10 py-10">
        <header className="flex items-center justify-between gap-4 mb-6">
          <h2
            id="testimonials-heading"
            className="text-2xl md:text-3xl font-semibold"
          >
            What families & volunteers say
          </h2>

          {/* Controls (desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded p-2 border hover:bg-gray-50 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
            >
              <MdArrowBackIosNew className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded p-2 border hover:bg-gray-50 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
            >
              <MdArrowForwardIos className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Slide */}
        <div className="relative">
          {/* Decorative quote icon */}
          <div
            className="absolute -top-2 -left-1 md:-top-3 md:-left-2 text-gray-200"
            aria-hidden="true"
          >
            <BsQuote className="h-16 w-16 md:h-24 md:w-24" />
          </div>

          {/* Quote box */}
          <blockquote
            key={index}
            className="relative z-10 transition-opacity duration-300 ease-out bg-primary/5 rounded-xl p-6 md:p-8"
          >
            <p className="text-lg md:text-xl text-gray-900 relative z-10">
              “{t.quote}”
            </p>
            <footer className="mt-4 text-gray-700 relative z-10">
              <span className="font-semibold">{t.name}</span>
              {t.role ? `, ${t.role}` : ""}
              {t.org ? ` — ${t.org}` : ""}
            </footer>
          </blockquote>

          {/* Dots */}
          <div className="mt-6 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile controls */}
          <div className="mt-4 flex sm:hidden items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded p-2 border hover:bg-gray-50 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
            >
              <MdArrowBackIosNew className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded p-2 border hover:bg-gray-50 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
            >
              <MdArrowForwardIos className="h-5 w-5" />
            </button>
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing testimonial {index + 1} of {testimonials.length}.
        </p>
      </div>
    </section>
  );
}
