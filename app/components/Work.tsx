"use client";

import { useState, useRef } from "react";
import Link from "next/link";

type Project = {
  index: string;
  title: string;
  subtitle: string;
  meaning: string;
  client: string;
  year: string;
  tags: string[];
  description: string;
  scope: string[];
  color: string;
  image?: string;
  imagePosition?: string;
  caseStudyUrl?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Bully No More!",
    subtitle: "The Musical",
    meaning: "Using storytelling to help young people understand and respond to bullying.",
    client: "Bully No More! Musical",
    year: "2026",
    tags: ["Website Design", "UX / UI", "NGO"],
    description:
      "This project focused on rethinking the digital presence of Bully No More! The Musical, an arts\u2011based programme that helps children recognise and respond to bullying.\n\nThe aim was not just to redesign the website, but to make the organisation's purpose immediately clear and felt. The experience was shaped to feel warm, accessible, and easy to navigate for schools, parents, and supporters.\n\nEvery decision, from structure and tone to visual direction, was guided by one focus: making the content feel supportive rather than instructional.",
    scope: ["Website design", "UX thinking", "Visual direction", "Responsive system"],
    color: "#e8ede9",
    image: "/bnm.png",
    caseStudyUrl: "/case-study/bully-no-more",
  },
  {
    index: "02",
    title: "Neighbors",
    subtitle: "Immigration Clinic",
    meaning: "Making legal support clearer and more accessible for immigrant communities.",
    client: "Neighbors Immigration Clinic",
    year: "2026",
    tags: ["Brand Identity", "Visual System", "NGO"],
    description:
      "This project focused on shaping the brand identity for Neighbors Immigration Clinic, a legal services organisation supporting newcomers and vulnerable communities.\n\nThe goal was to create a visual language that feels trustworthy, calm, and accessible, without adding complexity to an already sensitive process.\n\nThe identity needed to work across legal documents and community-facing materials alike. The core challenge was making it feel professional without feeling distant. A key principle was to position clients as capable and informed, never as victims, but as people navigating complex systems with support.",
    scope: ["Brand identity", "Visual direction", "Brand guidelines"],
    color: "#d6e4d9",
    image: "/neighbors.png",
    caseStudyUrl: "/case-study/neighbors",
  },
  {
    index: "03",
    title: "Style AI",
    subtitle: "AI Fashion Assistant",
    meaning: "Designing an AI styling app that helps users make the most of what they already own.",
    client: "Style AI",
    year: "2024",
    tags: ["UX/UI Design", "Mobile App", "AI Product"],
    description:
      "This project focused on designing Style AI, an AI-driven mobile app that simplifies outfit planning and improves shopping decisions through personalised fashion recommendations based on what users already own.\n\nThe challenge was making AI feel useful without making it feel complicated. The app needed to guide users through wardrobe management, outfit generation, and styling choices in a way that felt intuitive, not like operating software.\n\nEvery interaction was designed around one idea: less friction between what you have and what you wear.",
    scope: ["UX/UI design", "Interaction design", "AI and contextual design", "Product strategy"],
    color: "#0f0f0f",
    image: "/styleai_hero.png",
    caseStudyUrl: "/case-study/style-ai",
  },
  {
    index: "04",
    title: "Fortuna Insights",
    subtitle: "AI Legal Research",
    meaning: "Designing a product website that makes AI-powered legal research feel intuitive and credible.",
    client: "Fortuna Insights",
    year: "2024",
    tags: ["Website Design", "Visual Direction", "Product"],
    description:
      "This project focused on designing a product website for Fortuna Insights, an AI-powered legal research platform built to help legal professionals find, draft, and analyse faster.\n\nThe challenge was translating complex AI capabilities into something that felt immediately clear and credible. The site needed to speak to legal professionals who are sceptical of tech, and convert them.\n\nEvery decision was guided by one principle: make the platform feel powerful without feeling overwhelming. Dark, confident, and built to move fast.",
    scope: ["Website design", "Visual direction", "Brand guidelines", "Information architecture"],
    color: "#16101e",
    image: "/fortuna_hero.png",
    caseStudyUrl: "/case-study/fortuna-insights",
  },
  {
    index: "05",
    title: "Sriram Emani",
    subtitle: "Actor & Entertainer",
    meaning: "Designing a portfolio that captures a multifaceted career and opens doors in Hollywood.",
    client: "Sriram Emani",
    year: "2023",
    tags: ["Portfolio Design", "UX Leadership", "Brand Identity"],
    description:
      "This project focused on designing a personal portfolio for Sriram Emani, a Hollywood-based actor, singer, and dancer with a career spanning film, television, and stage.\n\nThe challenge was capturing the range of his work, acting, singing, and dance, in a single site that felt cinematic without becoming cluttered. Industry professionals needed to find what they were looking for quickly, and press coverage needed to be prominently placed.\n\nA dark, theatrical visual language was chosen to reflect the world Sriram works in. Every section was structured to tell his story with the same confidence his career demands.",
    scope: ["Portfolio design", "UX leadership", "Information architecture", "Brand identity"],
    color: "#111111",
    image: "/sriram_hero.png",
    imagePosition: "top",
    caseStudyUrl: "/case-study/sriram-emani",
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-32 md:py-44 px-6 md:px-12 pb-20 md:pb-28"
      style={{ borderTop: "1px solid var(--border)", position: "relative" }}
      onMouseMove={e => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect) setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "var(--fg-subtle)",
                  fontWeight: 400,
                }}
              >
                SELECTED WORK
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.75rem, 6vw, 5rem)",
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
              }}
            >
              Projects that
              <br />
              <span style={{ fontStyle: "italic" }}>made a difference.</span>
            </h2>
          </div>

        </div>

        {/* Projects list */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {projects.map((project, i) => (
            <div
              key={project.index}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Project row */}
              <button
                className="w-full text-left group"
                onClick={() => setExpanded(expanded === i ? null : i)}
                onMouseEnter={(e) => {
                  setHovered(i);
                  const u = e.currentTarget.querySelector(".title-underline") as HTMLElement;
                  if (u) u.style.transform = "scaleX(1)";
                }}
                onMouseLeave={(e) => {
                  setHovered(null);
                  const u = e.currentTarget.querySelector(".title-underline") as HTMLElement;
                  if (u) u.style.transform = "scaleX(0)";
                }}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <div className="py-8 md:py-10 flex items-start md:items-center justify-between gap-6">
                  <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                    {/* Index */}
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        color: "var(--fg-subtle)",
                        fontWeight: 400,
                        minWidth: "24px",
                        paddingTop: "4px",
                      }}
                    >
                      {project.index}
                    </span>

                    {/* Title block */}
                    <div
                      className="flex-1"
                      style={{
                        transform: "translateX(0)",
                        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "translateX(6px)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "translateX(0)")}
                    >
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <h3
                            className="font-display"
                            style={{
                              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                              fontWeight: 400,
                              lineHeight: 1.1,
                              letterSpacing: "-0.02em",
                              color: "var(--fg)",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {project.title}
                          </h3>
                          <span
                            className="title-underline"
                            style={{
                              display: "block",
                              height: "1px",
                              background: "var(--fg)",
                              transform: "scaleX(0)",
                              transformOrigin: "left",
                              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            }}
                          />
                        </div>
                        <span
                          className="font-display"
                          style={{
                            fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                            fontStyle: "italic",
                            color: "var(--fg-subtle)",
                            fontWeight: 300,
                          }}
                        >
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Meaning */}
                      <p
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--fg-subtle)",
                          fontWeight: 300,
                          fontStyle: "italic",
                          marginTop: "0.5rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {project.meaning}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: "10px",
                              letterSpacing: "0.12em",
                              color: "var(--fg-subtle)",
                              border: "1px solid var(--border)",
                              padding: "3px 8px",
                              borderRadius: "2px",
                              opacity: 0.55,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <span
                      className="hidden md:block"
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--fg-subtle)",
                        fontWeight: 300,
                      }}
                    >
                      {project.year}
                    </span>

                    {/* Expand icon */}
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        border: "1px solid var(--border)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s ease",
                        transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)",
                        color: "var(--fg-muted)",
                        fontSize: "16px",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              <div
                style={{
                  maxHeight: expanded === i ? "900px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <div
                  style={{
                    paddingBottom: "2.5rem",
                    paddingLeft: "calc(24px + 2.5rem)",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "720px",
                      aspectRatio: "16/7",
                      borderRadius: "4px",
                      marginTop: "1.5rem",
                      marginBottom: "3rem",
                      overflow: "hidden",
                      background: project.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.client}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: project.imagePosition ?? "center",
                          filter: "grayscale(20%)",
                          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          color: "var(--fg-subtle)",
                        }}
                      >
                        {project.client.toUpperCase()} PROJECT IMAGERY
                      </span>
                    )}
                  </div>

                  <div
                    style={{ maxWidth: "720px", display: "grid", gridTemplateColumns: "1fr 160px", gap: "3rem", alignItems: "start" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {project.description.split("\n\n").map((para, j) => (
                        <p
                          key={j}
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 2,
                            color: "var(--fg-muted)",
                            fontWeight: 300,
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    <div style={{ marginTop: "2.5rem" }}>
                      <p
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.15em",
                          color: "var(--fg-subtle)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        SCOPE OF WORK
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {project.scope.map((item) => (
                          <li
                            key={item}
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--fg-muted)",
                              fontWeight: 300,
                              lineHeight: 2.2,
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <span style={{ color: "var(--accent)", fontSize: "8px" }}>◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case study button */}
                  {project.caseStudyUrl && (
                    <div style={{ maxWidth: "720px", marginTop: "2.5rem" }}>
                      <Link
                        href={project.caseStudyUrl}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "12px",
                          fontSize: "11px",
                          letterSpacing: "0.18em",
                          fontWeight: 400,
                          color: "var(--fg)",
                          textDecoration: "none",
                          border: "1px solid var(--border)",
                          padding: "12px 24px",
                          borderRadius: "2px",
                          transition: "border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.borderColor = "var(--accent)";
                          el.style.color = "var(--accent)";
                          el.style.background = "var(--accent-light)";
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.borderColor = "var(--border)";
                          el.style.color = "var(--fg)";
                          el.style.background = "transparent";
                        }}
                      >
                        VIEW CASE STUDY
                        <span style={{ fontSize: "14px" }}>→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating preview */}
      {projects.map((project, i) => (
        <div
          key={project.index}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: mouse.y - 80,
            left: mouse.x + 24,
            width: "220px",
            aspectRatio: "4/3",
            background: project.color,
            borderRadius: "3px",
            filter: "grayscale(60%) contrast(0.9)",
            opacity: hovered === i ? 1 : 0,
            pointerEvents: "none",
            transition: "opacity 0.35s ease",
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.client}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: project.imagePosition ?? "center" }}
            />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  color: "var(--fg-muted)",
                  opacity: 0.6,
                }}
              >
                {project.client.toUpperCase()}
              </span>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
