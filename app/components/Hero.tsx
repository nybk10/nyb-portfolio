"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.style.width = "100%";
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const vh = window.innerHeight;
      const opacity = Math.max(0, 0.8 - (scrolled / vh) * 1.4);
      grid.style.opacity = String(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-texture"
        aria-hidden="true"
        style={{ opacity: 0.8 }}
      />

      {/* Main content */}
      <div className="relative max-w-6xl w-full">
        {/* Small label */}
        <div className="hero-label flex items-center gap-3 mb-8">
          <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "0.2em",
              color: "var(--fg-subtle)",
              fontWeight: 400,
            }}
          >
            DESIGNER & CREATIVE
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display hero-name"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: 0.9,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "2rem",
          }}
        >
          Nayaab
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 300 }}>Anwar</span>
        </h1>

        {/* Animated line */}
        <div
          style={{
            height: "1px",
            background: "var(--border)",
            width: "0%",
            transition: "width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            marginBottom: "2rem",
          }}
          ref={lineRef}
        />

        {/* Tagline */}
        <div className="hero-tag flex items-end justify-between gap-4">
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "var(--fg-muted)",
              fontWeight: 300,
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Designing brands and digital experiences for organisations and products that have something real to say.
          </p>

          <div className="scroll-hint" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.25em",
                color: "var(--fg-subtle)",
                fontWeight: 300,
                whiteSpace: "nowrap",
              }}
            >
              SCROLL
            </span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
