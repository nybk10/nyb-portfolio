"use client";

import CaseStudyNav from "@/app/components/CaseStudyNav";
import Link from "next/link";
import { useRef } from "react";

export default function BullyNoMoreCaseStudy() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollImgRef = useRef<HTMLImageElement>(null);
  const scrollContainerAfterRef = useRef<HTMLDivElement>(null);
  const scrollImgAfterRef = useRef<HTMLImageElement>(null);

  const makeScrollHandlers = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    imgRef: React.RefObject<HTMLImageElement | null>
  ) => ({
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      const img = imgRef.current;
      if (!container || !img) return;
      const rect = container.getBoundingClientRect();
      const progress = (e.clientY - rect.top) / rect.height;
      const scrollable = img.naturalHeight * (rect.width / img.naturalWidth) - rect.height;
      img.style.transform = `translateY(-${Math.max(0, progress * scrollable)}px)`;
    },
    onMouseLeave: () => {
      const img = imgRef.current;
      if (img) img.style.transform = "translateY(0)";
    },
  });

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
              CASE STUDY 01
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
                Bully No More!
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>The Musical</span>
              </h1>
            </div>

            <div className="md:col-span-4 pb-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "CLIENT", value: "Bully No More! Musical" },
                  { label: "YEAR", value: "2026" },
                  { label: "SCOPE", value: "Website Design · UX / UI · NGO" },
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

      {/* Full-width image */}
      <section className="px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              width: "100%",
              aspectRatio: "16/7",
              borderRadius: "4px",
              overflow: "hidden",
              background: "#e8ede9",
            }}
          >
            <img
              src="/bnm.png"
              alt="Bully No More! The Musical"
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
              A mission without
              <br />
              <span style={{ fontStyle: "italic" }}>a structure to match it.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "Bully No More! The Musical is a nonprofit using arts-based education to help children recognize and respond to bullying. The founder built the website herself, but it wasn't converting. Three goals, licensing the musical, driving merch sales, and attracting donations, were all being missed.",
                "The site had no information architecture, no visual hierarchy, and no clear calls to action. The licensing link was buried at the bottom of the homepage. There was no single place that brought all three conversion goals together.",
                "When asked what the most important action she wanted visitors to take, her answer was: \"We want kids to heal and thrive.\" That's a mission. My job was to turn it into a website.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Existing Site */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-10">
            <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
              THE EXISTING SITE
            </span>
          </div>

          <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1.25rem" }}>
            BEFORE
          </p>

          {/* Screenshots — asymmetric layout */}
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "1rem", alignItems: "start" }}>
            {/* Homepage — large left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div
                ref={scrollContainerRef}
                {...makeScrollHandlers(scrollContainerRef, scrollImgRef)}
                style={{
                  height: "520px",
                  borderRadius: "3px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--bg-alt)",
                  cursor: "ns-resize",
                }}
              >
                <img
                  ref={scrollImgRef}
                  src="/bnm_home.png"
                  alt="Bully No More original homepage"
                  style={{ width: "100%", height: "auto", display: "block", transform: "translateY(0)", transition: "transform 0.1s ease-out" }}
                />
              </div>
              <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                HOMEPAGE
              </span>
            </div>

            {/* Endorsements + About — stacked right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { src: "/bnm_endorsements.png", label: "Endorsements" },
                { src: "/bnm_about.png", label: "About" },
              ].map(({ src, label }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <div
                    style={{
                      height: "245px",
                      borderRadius: "3px",
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      background: "var(--bg-alt)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Bully No More original ${label} page`}
                      style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                    {label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Caption */}
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
            No clear user path. Three conversion goals buried across separate pages.
          </p>

          {/* Issue list */}
          <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem", maxWidth: "560px", display: "flex", flexDirection: "column" }}>
            {[
              "Homepage leads with imagery and text but no clear headline or primary CTA",
              "Licensing link buried at the bottom of the page",
              "Navigation organized around content types, not user goals",
              "No single place to license, donate, or shop together",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "0.875rem 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "0.875rem",
                  color: "var(--fg-muted)",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "8px", marginTop: "6px", flexShrink: 0 }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
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
                  title: "Site audit",
                  body: "Went through every page and documented what wasn't working: no user paths, confusing navigation, buried CTAs, and no visual hierarchy or emotional storytelling.",
                },
                {
                  num: "02",
                  title: "IA first",
                  body: "Mapped the three core goals, licensing, donations, and merch, and rebuilt the navigation and page structure around them before touching visual design.",
                },
                {
                  num: "03",
                  title: "Collaborative refinement",
                  body: "Shared the new IA with the client, incorporated their feedback, then moved into design with a clear, agreed structure as the foundation.",
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

      {/* The Solution */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Label + text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20" style={{ marginBottom: "2.5rem" }}>
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                  THE SOLUTION
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
                A site built around
                <br />
                <span style={{ fontStyle: "italic" }}>what visitors need to do.</span>
              </h2>

              <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  "The redesigned homepage leads with a clear value proposition and a primary CTA above the fold. From there, it tells a story: who they are, what the musical does, who the characters are, and what the organization offers beyond the show itself.",
                  "Navigation was restructured around user goals. The licensing page replaced a buried link with a dedicated space where schools and theatres can understand the process and take action. Donation and shop CTAs appear consistently across the site, so every visitor has a clear next step, wherever they land.",
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* After label */}
          <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1.25rem" }}>
            AFTER
          </p>

          {/* Screenshots — same layout as before section */}
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "1rem", alignItems: "start" }}>
            {/* Homepage — large left, scrollable */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div
                ref={scrollContainerAfterRef}
                {...makeScrollHandlers(scrollContainerAfterRef, scrollImgAfterRef)}
                style={{
                  height: "520px",
                  borderRadius: "3px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--bg-alt)",
                  cursor: "ns-resize",
                }}
              >
                <img
                  ref={scrollImgAfterRef}
                  src="/bnm_new_homepage.jpg"
                  alt="Redesigned homepage"
                  style={{ width: "100%", height: "auto", display: "block", transform: "translateY(0)", transition: "transform 0.1s ease-out" }}
                />
              </div>
              <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>HOMEPAGE</span>
            </div>

            {/* The Musical + About — stacked right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { src: "/bnm_themusical.jpg", label: "The Musical" },
                { src: "/bnm_new_about.jpg", label: "About" },
              ].map(({ src, label }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <div style={{ height: "245px", borderRadius: "3px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-alt)" }}>
                    <img
                      src={src}
                      alt={`Redesigned ${label} page`}
                      style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                    {label.toUpperCase()}
                  </span>
                </div>
              ))}
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
              href="/case-study/neighbors"
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
              Neighbors Immigration Clinic
              <span style={{ fontSize: "1.5rem", fontStyle: "normal" }}>→</span>
            </Link>
          </div>

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
            Nayaab Anwar &copy; 2025
          </span>
          <span style={{ fontSize: "11px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
            BUILT WITH INTENTION AND RESTRAINT.
          </span>
        </div>
      </section>
    </main>
  );
}
