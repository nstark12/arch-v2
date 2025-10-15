"use client";
import { useEffect, useRef, useState } from "react";

const MIN_SCALE = 0.9;
const MAX_SCALE = 1.6;
const STEP = 0.1;

export default function AccessibilityControls() {
  const [scale, setScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const liveRef = useRef(null);

  // Load saved settings
  useEffect(() => {
    const savedScale = parseFloat(localStorage.getItem("fontScale") || "1");
    const savedContrast = localStorage.getItem("contrast") === "high";
    setScale(Number.isFinite(savedScale) ? savedScale : 1);
    setHighContrast(savedContrast);
  }, []);

  // Apply settings to <html> dataset / CSS vars
  useEffect(() => {
    const html = document.documentElement;
    html.style.setProperty("--font-scale", String(scale));
    localStorage.setItem("fontScale", String(scale));

    html.dataset.contrast = highContrast ? "high" : "normal";
    localStorage.setItem("contrast", highContrast ? "high" : "normal");

    if (liveRef.current) {
      liveRef.current.textContent = `Text size ${Math.round(
        scale * 100
      )}% and ${highContrast ? "high contrast on" : "high contrast off"}.`;
    }
  }, [scale, highContrast]);

  function dec() {
    setScale((s) => Math.max(MIN_SCALE, Math.round((s - STEP) * 10) / 10));
  }
  function inc() {
    setScale((s) => Math.min(MAX_SCALE, Math.round((s + STEP) * 10) / 10));
  }
  function reset() {
    setScale(1);
  }
  function toggleContrast() {
    setHighContrast((v) => !v);
  }

  return (
    <div className="a11y-controls flex items-center gap-2">
      <div className="hidden md:block text-xs text-white" aria-hidden="true">
        Accessibility:
      </div>

      <div
        role="group"
        aria-label="Text size controls"
        className="flex items-center gap-1"
      >
        <button
          type="button"
          onClick={dec}
          aria-label="Decrease text size"
          className={`${
            scale <= MIN_SCALE ? "opacity-60 cursor-not-allowed" : ""
          }`}
          disabled={scale <= MIN_SCALE}
        >
          A-
        </button>
        <button
          type="button"
          onClick={reset}
          aria-label="Reset text size"
          className={`${scale === 1 ? "is-active" : ""}`}
        >
          100%
        </button>
        <button
          type="button"
          onClick={inc}
          aria-label="Increase text size"
          className={`${
            scale >= MAX_SCALE ? "opacity-60 cursor-not-allowed" : ""
          }`}
          disabled={scale >= MAX_SCALE}
        >
          A+
        </button>
      </div>

      <div className="h-4 w-px bg-gray-300 mx-1" aria-hidden="true" />

      <button
        type="button"
        onClick={toggleContrast}
        aria-pressed={highContrast}
        aria-label="Toggle high contrast mode"
        className={`border ${highContrast ? "is-active" : ""}`}
      >
        {highContrast ? "Normal Contrast" : "High Contrast"}
      </button>

      {/* Screen-reader live region for confirmation */}
      <span
        ref={liveRef}
        className="sr-only"
        role="status"
        aria-live="polite"
      />
    </div>
  );
}
