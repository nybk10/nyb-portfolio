"use client";

import CaseStudyNav from "@/app/components/CaseStudyNav";
import Link from "next/link";
import { useRef } from "react";

export default function StyleAICaseStudy() {
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
              CASE STUDY 03
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
                Style{" "}
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>AI</span>
              </h1>
            </div>

            <div className="md:col-span-4 pb-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "CLIENT", value: "Style AI" },
                  { label: "YEAR", value: "2024" },
                  { label: "SCOPE", value: "UX/UI Design · Mobile App · AI Product" },
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
              background: "#0f0f0f",
            }}
          >
            <img
              src="/styleai_hero.png"
              alt="Style AI"
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
              Most people own enough clothes.
              <br />
              <span style={{ fontStyle: "italic" }}>They just can't see it.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The brief was to design an AI-driven mobile app that simplifies outfit planning and improves shopping decisions, not by adding more to the wardrobe, but by making better use of what already exists. The target was everyday users who shop monthly but wear the same handful of outfits.",
                "The core problem wasn't a lack of clothes. It was a lack of visibility and confidence. People struggle to create outfits efficiently, underestimate the range of their existing wardrobe, and default to buying something new when they feel stuck. A smarter, more intuitive tool was the solution.",
                "The design challenge was making AI feel like a helpful friend, not a feature list. The app needed to guide users naturally through cataloguing, outfit building, and styling decisions, with as little friction as possible at every step.",
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
              Understanding how people
              <br />
              <span style={{ fontStyle: "italic" }}>actually get dressed.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "User research with participants aged 18–45 surfaced a consistent pattern: 65% shop monthly but don't maximise their existing wardrobe, and 55% struggle with outfit creation despite owning plenty of clothes. The pain wasn't quantity. It was organisation and confidence.",
                "People want personalised guidance, but they don't want to work hard for it. The effort of cataloguing a wardrobe, filtering by occasion, and cross-referencing the weather is exactly what prevents most users from engaging with existing tools. The research made it clear that the app had to do more of the thinking.",
                "On the market side, AI-powered personal styling remains a largely unsolved problem. Demand for sustainable fashion choices is growing, and interest in personalised shopping experiences is rising, but very few products had successfully bridged the gap between AI capability and everyday usability. That gap was the opportunity.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                DESIGN PROCESS
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
              Removing friction
              <br />
              <span style={{ fontStyle: "italic" }}>at every decision point.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The user journey was mapped from first open to habitual daily use. Onboarding was streamlined into a style quiz that gathered preferences without feeling like a form. Wardrobe digitisation was made as quick as possible: the fewer taps between a user and a catalogued item, the more likely they are to actually do it.",
                "The interface was built on a clean, minimalist design language with intuitive navigation patterns and a clear visual hierarchy that surfaces the most useful features first. Accessible and inclusive design principles were applied throughout, ensuring the app worked for a broad range of users without compromise.",
                "Social and community features were woven into the experience rather than bolted on. Sharing outfits and receiving feedback sits naturally within the same flows as outfit generation, making the social layer feel like a natural extension of the styling experience, not a separate product.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
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
              Four systems working
              <br />
              <span style={{ fontStyle: "italic" }}>as one experience.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The app is built around four interconnected systems. A simple digital wardrobe lets users catalogue and visualise everything they own, designed to be fast enough that adding a new item never becomes a task in itself. From there, the AI generates personalised outfit suggestions based on style preferences, occasion, and weather, surfacing combinations users wouldn't have reached on their own.",
                "A style community layer adds a social dimension: users can share outfits and gather feedback from other fashion enthusiasts, creating a loop of discovery and validation that keeps the experience feeling alive. Underpinning all of it is a personalised style journey: recommendations that evolve over time, learning from choices and continuously refining the picture of who each user is.",
                "Together, these four systems work as a single coherent experience rather than a set of disconnected features. The goal was for users to move fluidly between them, from cataloguing to generating to sharing to discovering, without ever feeling like they'd changed modes.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App screens */}
      <section className="px-6 md:px-12 py-10 md:py-14" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--fg-subtle)", fontWeight: 400, marginBottom: "1.25rem" }}>
            THE SCREENS
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", alignItems: "start" }}>

            {/* Screen 1 — Splash */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "9/16",
                  borderRadius: "3px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "#0f0f0f",
                }}
              >
                <img
                  src="/styleai_1.png"
                  alt="Style AI splash screen"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
              <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                SPLASH / INTRO
              </span>
            </div>

            {/* Screen 2 — Digital Wardrobe (scrollable) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div
                ref={scrollContainerRef}
                {...scrollHandlers}
                style={{
                  width: "100%",
                  aspectRatio: "9/16",
                  borderRadius: "3px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "#0f0f0f",
                  cursor: "ns-resize",
                }}
              >
                <img
                  ref={scrollImgRef}
                  src="/styleai_2.png"
                  alt="Style AI digital wardrobe"
                  style={{ width: "100%", height: "auto", display: "block", transform: "translateY(0)", transition: "transform 0.1s ease-out" }}
                />
              </div>
              <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                YOUR DIGITAL WARDROBE
              </span>
            </div>

            {/* Screen 3 — Body Measurements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "9/16",
                  borderRadius: "3px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "#0f0f0f",
                }}
              >
                <img
                  src="/styleai_3.png"
                  alt="Style AI body measurements"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
              <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                BODY MEASUREMENTS
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Key Touchpoints */}
      <section
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--fg-subtle)", fontWeight: 400 }}>
                KEY TOUCHPOINTS
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
              From first open to
              <br />
              <span style={{ fontStyle: "italic" }}>confident daily use.</span>
            </h2>

            <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "The experience was designed as a journey with five clear stages. Onboarding walks users through a style quiz and captures measurements, so the AI has what it needs to make personalised recommendations from the very first session.",
                "Wardrobe management comes next, where users digitise their clothing for tailored outfit ideas. Daily outfit planning then uses that data alongside occasions, weather, and style goals to serve up suggestions that feel considered rather than random.",
                "Social engagement lets users share outfits and receive feedback within the community, deepening their engagement with the app beyond solo use. Advanced features, including an AI chatbot for styling advice, build confidence over time and keep experienced users invested in the product.",
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
                Developed an intuitive styling assistant that combines AI with user-friendly features to help users maximise their wardrobes and make more informed fashion choices.
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
              <span style={{ fontSize: "1.5rem", fontStyle: "normal" }}>←</span>
              Neighbors Immigration Clinic
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
