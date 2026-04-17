"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-base tracking-wide"
          style={{ color: "var(--fg)", fontWeight: 400 }}
        >
          NA
        </button>

        <div className="flex items-center gap-8">
          {[
            { label: "Work", id: "work" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="nav-link text-sm tracking-wide"
              style={{ color: "var(--fg-muted)", fontWeight: 400, background: "none", border: "none", cursor: "pointer" }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
