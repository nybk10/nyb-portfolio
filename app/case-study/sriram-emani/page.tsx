"use client";

import CaseStudyNav from "@/app/components/CaseStudyNav";
import Link from "next/link";

export default function SriramEmaniCaseStudy() {
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
              CASE STUDY 05
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
                Sriram{" "}
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Emani</span>
              </h1>
            </div>

            <div className="md:col-span-4 pb-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "CLIENT", value: "Sriram Emani" },
                  { label: "YEAR", value: "2023" },
                  { label: "SCOPE", value: "Portfolio Design · UX Leadership · Brand Identity" },
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
              background: "#111111",
            }}
          >
            <img
              src="/sriram_hero.png"
              alt="Sriram Emani"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(10%)" }}
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
              A multifaceted career that needed
              <br />
              <span style={{ fontStyle: "italic" }}>a stage of its own.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "Sriram Emani is an actor, singer, and dancer building his career in Hollywood. He came in with a clear goal: a portfolio that could hold its own with industry professionals, something sleek and confident that communicated the full range of his talents without asking visitors to dig for it.",
                "The challenge was scope. Acting credits, singing reels, dance work, press coverage, media appearances: all of it needed to coexist in one place without feeling cluttered. The site had to work for casting directors landing on it for the first time just as easily as it worked for press contacts already familiar with his name.",
                "A dark, theatrical visual language was established from the start. The entertainment industry responds to atmosphere, and every design decision, from the film strip motif to the typography, was chosen to feel like Sriram's world, not just a template with his name on it.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Research & Analysis */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                RESEARCH & ANALYSIS
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
              Understanding what the
              <br />
              <span style={{ fontStyle: "italic" }}>industry actually looks for.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The research started with a thorough look at how the entertainment industry navigates artist portfolios online, what casting directors and press contacts respond to, and where most artist websites fall short. Competitor sites in the Hollywood space were reviewed alongside successful examples to identify patterns worth following and conventions worth breaking.",
                "What emerged was clear: industry professionals want information fast and want it to feel credible. Clean, intuitive layouts with immediate access to key work outperform anything that asks visitors to search. Visual storytelling, the ability to convey presence through the screen, is the most important factor for entertainment portfolios specifically.",
                "Press coverage and media mentions needed their own space. They're not supporting content in this context. They're proof. That insight shaped how the site was structured, with media visibility treated as a primary feature rather than an afterthought buried in a sidebar.",
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
        style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}
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
                  title: "Story first",
                  body: "Before mapping any structure, the focus was on identifying the narrative: who Sriram is, what he's done, and what he wants next. The site needed to tell that story in the right order, not just display credentials.",
                },
                {
                  num: "02",
                  title: "Content hierarchy",
                  body: "Acting, singing, dance, press, and media were each given their own architectural layer. The navigation was built to serve both first-time visitors exploring and returning contacts looking for something specific.",
                },
                {
                  num: "03",
                  title: "Visual direction",
                  body: "A film strip motif was introduced as the connective tissue of the visual language, a nod to his world that felt natural rather than literal. Dark backgrounds, strong typographic contrast, and deliberate whitespace were used to create theatrical presence without melodrama.",
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

      {/* Photo grid */}
      <section className="px-6 md:px-12 py-10 md:py-14" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1.25rem" }}>
            THE PORTFOLIO
          </p>
          <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border)" }}>
            <img
              src="/se_portfolio.png"
              alt="Sriram Emani Portfolio"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Results */}
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
                marginBottom: "2rem",
              }}
            >
              A portfolio that performs
              <br />
              <span style={{ fontStyle: "italic" }}>as well as its subject does.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
              {[
                "The final site was built in close collaboration with Sriram and the development team, with structured review sessions at each stage ensuring his voice stayed in the work. Media content was integrated seamlessly, visual hierarchy was refined through multiple iterations, and the design held up consistently across every breakpoint.",
                "The result is a portfolio that earns attention and holds it, one that communicates the breadth of Sriram's career without ever feeling like a list of credentials. Industry visibility increased measurably, and the site has continued to support new performance and press opportunities since launch.",
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
                Built an engaging portfolio that effectively communicates Sriram's diverse talents, leading to increased industry visibility and potentially new performance opportunities.
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
              PREVIOUS PROJECT
            </p>
            <Link
              href="/case-study/fortuna-insights"
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
              <span style={{ fontSize: "1.5rem", fontStyle: "normal" }}>←</span>
              Fortuna Insights
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
