"use client";

import CaseStudyNav from "@/app/components/CaseStudyNav";
import Link from "next/link";
import { useRef } from "react";

export default function FortunaInsightsCaseStudy() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollImgRef = useRef<HTMLImageElement>(null);

  const scrollHandlers = {
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
      const container = scrollContainerRef.current;
      const img = scrollImgRef.current;
      if (!container || !img) return;
      const rect = container.getBoundingClientRect();
      const progress = (e.clientY - rect.top) / rect.height;
      const scrollable = img.naturalHeight * (rect.width / img.naturalWidth) - rect.height;
      img.style.transform = `translateY(-${Math.max(0, progress * scrollable)}px)`;
    },
    onMouseLeave: () => {
      const img = scrollImgRef.current;
      if (img) img.style.transform = "translateY(0)";
    },
  };

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <CaseStudyNav />

      {/* Hero */}
      <section
        className="px-6 md:px-12 pt-40 pb-16 md:pt-52 md:pb-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
              CASE STUDY 04
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
            <div className="md:col-span-8">
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  lineHeight: 0.95,
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                }}
              >
                Fortuna{" "}
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Insights</span>
              </h1>
            </div>

            <div className="md:col-span-4 pb-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "CLIENT", value: "Fortuna Insights" },
                  { label: "YEAR", value: "2024" },
                  { label: "SCOPE", value: "Website Design · Visual Direction · Product" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "4px" }}>
                      {label}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", fontWeight: 300 }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width hero image */}
      <section className="px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              width: "100%",
              aspectRatio: "16/7",
              borderRadius: "4px",
              overflow: "hidden",
              background: "#16101e",
            }}
          >
            <img
              src="/fortuna_hero.png"
              alt="Fortuna Insights"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(10%)" }}
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                THE CHALLENGE
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "2rem",
              }}
            >
              Powerful technology that needed
              <br />
              <span style={{ fontStyle: "italic" }}>a website to match it.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "Fortuna Insights is an AI-powered legal research platform that helps legal professionals sort through millions of cases, statutes, and regulations in minutes. The product was strong. The website wasn't keeping up.",
                "The brief was to design a product website that simplifies complex AI concepts for a professional audience, establishes a modern and trustworthy brand, showcases key features clearly, and drives conversions through well-placed calls-to-action.",
                "The core tension: legal professionals are sceptical of tech by default. Any hint of overpromise, any visual noise, any unclear copy, and you've lost them. The site had to earn trust before it asked for a signup.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Research & IA */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                RESEARCH & IA
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "3rem",
              }}
            >
              Understanding the space
              <br />
              <span style={{ fontStyle: "italic" }}>before shaping it.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The process started with a thorough audit of the legal tech landscape, reviewing competitors, studying how leading SaaS products in the space were positioning themselves, and identifying the messaging patterns that were actually working. That research became the foundation for every content and design decision that followed.",
                "What came back clearly was that legal professionals respond to specificity and restraint. Benefit-focused copy outperforms feature-led copy. Visual representations of complex functionality reduce friction. And trust signals, case counts, accuracy claims, social proof, need to appear early, not buried below the fold.",
                "With those insights in hand, the website structure was mapped before any visual design began. The information architecture was built around a single user journey: land, understand the value, see it in action, trust it, and sign up. Features, pricing, and CTAs were placed at the exact points where a sceptical user would need them.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                MY APPROACH
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "3rem" }}>
              {[
                {
                  num: "01",
                  title: "Research first",
                  body: "Started with a thorough audit of competitors in the legal tech space: what they were saying, how they were positioning, and where the gaps were. That research shaped every message on the site.",
                },
                {
                  num: "02",
                  title: "Structure before style",
                  body: "Built the information architecture before touching visual design. Mapped the user journey from awareness to signup, placing features, trust signals, and CTAs where they would actually land.",
                },
                {
                  num: "03",
                  title: "Iterate with the client",
                  body: "Ran structured design reviews throughout. Every visual direction decision was walked through with the client, ensuring the final product matched both the brief and the brand's evolving identity.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                    {num}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: "1.375rem", fontWeight: 400, letterSpacing: "-0.01em", color: "var(--fg)", fontStyle: "italic" }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.85, color: "var(--fg-muted)", fontWeight: 300 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website screenshot */}
      <section className="px-6 md:px-12 py-10 md:py-14" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1.25rem" }}>
            THE WEBSITE
          </p>
          <div
            ref={scrollContainerRef}
            {...scrollHandlers}
            style={{
              width: "100%",
              height: "560px",
              borderRadius: "3px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "#16101e",
              cursor: "ns-resize",
            }}
          >
            <img
              ref={scrollImgRef}
              src="/fortuna_full.jpg"
              alt="Fortuna Insights website"
              style={{ width: "100%", height: "auto", display: "block", transform: "translateY(0)", transition: "transform 0.1s ease-out" }}
            />
          </div>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--fg-muted)",
              marginTop: "1.25rem",
              maxWidth: "560px",
            }}
          >
            Chat, Draft, Win. A homepage built to convert from the first scroll.
          </p>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                BRAND GUIDELINES
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "3rem",
              }}
            >
              A visual system built for
              <br />
              <span style={{ fontStyle: "italic" }}>confidence and consistency.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The colour system was built around a deep purple primary palette, chosen for its associations with trust, authority, and innovation, complemented by electric blue accents and strong contrast ratios. Gradient overlays and deliberate white space give the design depth without visual clutter, while accent colours are reserved specifically for CTAs and key milestones.",
                "The visual language leans into abstraction. Geometric patterns reference data complexity without illustrating it literally. Custom iconography was developed to maintain a consistent style across all feature representations, and animation strategies were defined to make interactive moments feel considered rather than decorative.",
                "Every decision was documented. Usage guidelines, scaling rules, grid specifications, and application examples were compiled into a brand guide that any designer or developer could pick up and work from. The implementation phase then translated all of it into a fully responsive dark-theme website, with layouts, component states, and micro-interactions all following the system.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More screenshots */}
      <section className="px-6 md:px-12 py-10 md:py-14" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {[
              { src: "/fortuna_1.png", label: "COLOUR PALETTE" },
              { src: "/fortuna_2.png", label: "TYPOGRAPHY" },
            ].map(({ src, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: "3px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    background: "#16101e",
                  }}
                >
                  <img
                    src={src}
                    alt={label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                </div>
                <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation & Results */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                RESULTS
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "3rem",
              }}
            >
              A product website that
              <br />
              <span style={{ fontStyle: "italic" }}>finally matched the ambition.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The design process was built around close collaboration with the Fortuna team. Regular review sessions kept decisions transparent and grounded: every visual direction was walked through with stakeholders, explained in terms of the brief, and refined based on direct feedback rather than assumption.",
                "The homepage went through multiple iterations before landing. Feature presentation was restructured, visual hierarchy was tightened, and CTA placement was tested and adjusted at each stage. Each round of changes was purposeful, driven by what the client needed the site to do, not just how it looked.",
                "The biggest takeaway from this project was how much clarity matters when the subject matter is complex. Simplifying how AI features were communicated, without dumbing them down, was the most valuable thing the design could do. The collaboration process reinforced that the best outcomes come from keeping the client close throughout, not just at the start and end.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)", maxWidth: "600px" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "0.75rem" }}>
                OUTCOME
              </p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                Delivered a modern website that effectively communicated Fortuna's vision, resulting in improved user engagement and brand consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / next project */}
      <section className="px-6 md:px-12 py-14 md:py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1rem" }}>
              NEXT PROJECT
            </p>
            <Link
              href="/case-study/sriram-emani"
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                textDecoration: "none",
                fontStyle: "italic",
                transition: "color 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg)")}
            >
              Sriram Emani
              <span style={{ fontSize: "1.5rem", fontStyle: "normal" }}>→</span>
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
            <Link
              href="/"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "var(--fg-subtle)",
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-subtle)")}
            >
              BACK TO PORTFOLIO
            </Link>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1152px",
            margin: "3rem auto 0",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span className="font-display" style={{ fontSize: "0.875rem", color: "var(--fg-subtle)", fontWeight: 300 }}>
            Nayaab Anwar &copy; 2026
          </span>
          <span style={{ fontSize: "11px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
            BUILT WITH INTENTION AND RESTRAINT.
          </span>
        </div>
      </section>
    </main>
  );
}
