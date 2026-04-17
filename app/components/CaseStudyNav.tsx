"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CaseStudyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(247, 245, 242, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-base tracking-wide"
          style={{ color: "var(--fg)", fontWeight: 400, textDecoration: "none" }}
        >
          NK
        </Link>

        <Link
          href="/#work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.8125rem",
            letterSpacing: "0.12em",
            color: "var(--fg-muted)",
            fontWeight: 400,
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          <span style={{ fontSize: "14px" }}>←</span>
          BACK TO WORK
        </Link>
      </div>
    </nav>
  );
}
