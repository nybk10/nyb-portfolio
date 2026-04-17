"use client";

import CaseStudyNav from "@/app/components/CaseStudyNav";
import Link from "next/link";

export default function NeighborsCaseStudy() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <CaseStudyNav />

      {/* Hero */}
      <section
        className="px-6 md:px-12 pt-40 pb-20 md:pt-52 md:pb-28"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "var(--fg-subtle)",
                fontWeight: 400,
              }}
            >
              CASE STUDY 02
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
                Neighbors
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Immigration Clinic</span>
              </h1>
            </div>

            <div className="md:col-span-4 pb-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "CLIENT", value: "Neighbors Immigration Clinic" },
                  { label: "YEAR", value: "2026" },
                  { label: "SCOPE", value: "Brand Identity · Visual System · NGO" },
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
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              width: "100%",
              aspectRatio: "16/7",
              borderRadius: "4px",
              overflow: "hidden",
              background: "#d6e4d9",
            }}
          >
            <img
              src="/neighbors.png"
              alt="Neighbors Immigration Clinic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(10%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section
        className="px-6 md:px-12 py-20 md:py-28"
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
              A trusted organisation without
              <br />
              <span style={{ fontStyle: "italic" }}>a visual identity to match.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "Neighbors Immigration Clinic is a legal services organisation supporting newcomers and vulnerable communities navigate one of the most stressful processes of their lives. Their work is serious, skilled, and deeply human, but their existing materials didn't reflect that.",
                "The identity needed to work across a wide range of contexts: legal documents, community outreach, and digital touchpoints. It had to feel credible enough for institutional partners and warm enough for the families they serve.",
                "The core tension was between professionalism and accessibility. Too corporate and it feels cold. Too casual and it loses credibility. The brief was to find the exact balance between the two.",
                "A key principle from the start: never position clients as helpless. The brand had to signal support and expertise without stripping people of their dignity or agency.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.9,
                    color: "var(--fg-muted)",
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Brief */}
      <section
        className="px-6 md:px-12 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                THE BRIEF
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "They came in knowing what wasn't working: inconsistent logo usage, no clear typography, icons that felt mismatched, and presentations that looked different every time someone made a new slide.",
                "The ask was bigger than a logo refresh. They needed a full visual system, one that could handle a donor deck heavy with data and graphs, and a community flyer in the same breath. Staff were jumping between PowerPoint and Google Slides, so it had to be practical, not just pretty.",
                "Three words kept coming up in the discovery call: empowering, justice-oriented, clarity. That became the filter for every decision.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.9,
                    color: "var(--fg-muted)",
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        className="px-6 md:px-12 py-20 md:py-28"
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
                  title: "Discovery first",
                  body: "Started with a structured client brief to understand not just aesthetics but function. Two distinct audiences, one brand. Every decision had to hold up for both.",
                },
                {
                  num: "02",
                  title: "System over style",
                  body: "The focus was building a cohesive visual system, covering logo, color, typography, and icons, not just making things look nice. Each element had to work independently and together.",
                },
                {
                  num: "03",
                  title: "Designed to be used",
                  body: "The identity had to live in the real world: PowerPoint, Google Slides, legal documents, community materials. If staff couldn't use it consistently, it wasn't working.",
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

      {/* Logo */}
      <section
        className="px-6 md:px-12 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                LOGO
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
              {[
                "The primary logo is the anchor of the identity. Clean, grounded, and built to work across every context, from legal letterheads to community-facing materials.",
                "The full logo system, including variations and usage guidelines, is available in the brand guide.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.9,
                    color: "var(--fg-muted)",
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            <img
              src="/nic_logo.png"
              alt="Neighbors Immigration Clinic logo"
              style={{ width: "clamp(180px, 45%, 380px)", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Brand in Use */}
      <section
        className="px-6 md:px-12 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20" style={{ marginBottom: "3rem" }}>
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                  BRAND IN USE
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {[
              { src: "/nic_1.png", label: "PRESENTATION COVER" },
              { src: "/nic_2.png", label: "PROCESS DIAGRAM" },
              { src: "/nic_3.png", label: "CLIENT DEMOGRAPHICS" },
              { src: "/nic_4.png", label: "COMMUNITY PARTNERSHIPS" },
            ].map(({ src, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: "3px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    background: "var(--bg-alt)",
                  }}
                >
                  <img
                    src={src}
                    alt={`Neighbors Immigration Clinic, ${label.toLowerCase()}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
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

      {/* Brand guidelines CTA */}
      <section className="px-6 md:px-12 py-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                BRAND GUIDELINES
              </span>
            </div>
          </div>

          <div className="md:col-span-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", fontWeight: 300, lineHeight: 1.7 }}>
              The full brand guidelines are available on request.
            </p>
            <a
              href="mailto:hello@nybkazi.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 400,
                color: "var(--fg-subtle)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease",
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-subtle)")}
            >
              REQUEST ACCESS
              <span style={{ fontSize: "12px" }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer / next project */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1rem" }}>
              NEXT PROJECT
            </p>
            <Link
              href="/case-study/style-ai"
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
              Style AI
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
            margin: "4rem auto 0",
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
