"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left column - label */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "var(--fg-subtle)",
                  fontWeight: 400,
                }}
              >
                ABOUT
              </span>
            </div>
            {/* Vertical decorative element */}
            <div
              className="hidden md:block mt-12"
              aria-hidden="true"
              style={{
                width: "1px",
                height: "120px",
                background: "linear-gradient(to bottom, var(--border), transparent)",
              }}
            />
          </div>

          {/* Right column - content */}
          <div className="md:col-span-9">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "2.5rem",
              }}
            >
              Design is a conversation
              <br />
              <span
                style={{ fontStyle: "italic", transition: "color 0.3s ease", cursor: "default" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg)")}
              >between intention and impact.</span>
            </h2>

            <div style={{ maxWidth: "560px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "I'm Nayaab, a designer and creative focused on work that sits between communication and care.",
                "I believe design is most valuable when it helps people understand, navigate, and access what matters to them. Much of my work lives at the intersection of visual communication and social impact.",
                "I collaborate with NGOs, nonprofits, and mission-driven organisations to create identities, campaigns, and digital experiences that feel clear, considered, and human.",
                "I'm drawn to work that is useful, honest, and built to last.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.8,
                    color: "var(--fg-muted)",
                    fontWeight: 300,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Disciplines */}
            <div
              style={{
                marginTop: "3.5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--border)",
                display: "flex",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              {[
                "Brand Identity",
                "Visual Design",
                "Art Direction",
                "Digital Design",
              ].map((discipline) => (
                <div key={discipline}>
                  <span
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      color: "var(--fg-subtle)",
                      fontWeight: 400,
                    }}
                  >
                    {discipline.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
