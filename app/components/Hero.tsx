"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    eyebrow: "New Season — SS25",
    headline: ["Dressed", "to linger."],
    sub: "Pieces built for the unhurried. Fabricated slowly, worn indefinitely.",
    cta: "Shop new arrivals",
    bg: "radial-gradient(ellipse at 60% 40%, var(--accent-gold-soft) 0%, var(--background) 70%)",
    accentColor: "var(--accent-gold)",
  },
  {
    id: 2,
    eyebrow: "The Coat Edit",
    headline: ["Wear it", "all winter."],
    sub: "Outerwear designed to outlast the season — and every trend within it.",
    cta: "Shop coats",
    bg: "radial-gradient(ellipse at 40% 60%, var(--card-bg-alt) 0%, var(--background) 70%)",
    accentColor: "var(--text-muted)",
  },
  {
    id: 3,
    eyebrow: "Limited Drop",
    headline: ["Only a", "few remain."],
    sub: "Our most-requested silhouettes, back in limited quantities.",
    cta: "Shop limited",
    bg: "radial-gradient(ellipse at 50% 30%, var(--accent-gold-soft) 0%, var(--background) 65%)",
    accentColor: "var(--accent-gold)",
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = (index: number, direction: "next" | "prev") => {
    if (animating) return;
    setDirection(direction);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % SLIDES.length, "next");
  const prev = () =>
    goTo((current - 1 + SLIDES.length) % SLIDES.length, "prev");

  const slide = SLIDES[current];

  return (
    <div className="relative h-[70vh] min-h-125 flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: slide.bg }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 bottom-0 border-l border-(--card-border)"
          style={{ left: "20%" }}
        />
        <div
          className="absolute top-0 bottom-0 border-l border-(--card-border)"
          style={{ left: "80%" }}
        />
      </div>
      <div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? direction === "next"
              ? "translateX(-40px)"
              : "translateX(40px)"
            : "translateX(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <p
          className="text-xs tracking-[0.25em] uppercase mb-6 transition-colors duration-700"
          style={{ color: slide.accentColor }}
        >
          {slide.eyebrow}
        </p>
        <h1 className="tracking-tight text-(--text-primary mb-8">
          {slide.headline[0]}
          <br />
          <em style={{ fontStyle: "italic" }}>{slide.headline[1]}</em>
        </h1>
        <p className="text-sm text-(--text-secondary) max-w-xs mx-auto mb-10 leading-relaxed">
          {slide.sub}
        </p>
      </div>
      <button
        onClick={prev}
        className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center border border-[var(--card-border)] bg-[var(--background)] hover:border-[var(--accent-gold)] transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-3.5 w-3.5 text-(--text-secondary)" />
      </button>
      <button
        onClick={next}
        className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center border border-[var(--card-border)] bg-[var(--background)] hover:border-[var(--accent-gold)] transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight className="h-3.5 w-3.5 text-(--text-secondary)" />
      </button>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? "48px" : "20px",
              height: "3px",
              position: "relative",
              overflow: "hidden",
              background: "var(--accent-gold-border)",
              transition: "width 0.3s ease",
            }}
          >
            {i === current ? (
              <span
                key={current}
                className="absolute top-0 left-0 h-full bg-(--accent-gold-border)"
                style={{
                  animation: `progress ${INTERVAL}ms linear forwards`,
                }}
              />
            ) : null}
          </button>
        ))}
      </div>
      ;
    </div>
  );
}
