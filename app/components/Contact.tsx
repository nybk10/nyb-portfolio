"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-44 px-6 md:px-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">

          {/* Left */}
          <div className="md:col-span-9">
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: "20px", height: "1px", background: "var(--accent)" }} />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "var(--fg-subtle)",
                  fontWeight: 400,
                }}
              >
                GET IN TOUCH
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "2.5rem",
              }}
            >
              If the work <span style={{ fontStyle: "italic" }}>matters,</span>
              <br />
              I&apos;d like to hear about it.
            </h2>

            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                fontWeight: 300,
                maxWidth: "440px",
                marginBottom: "3rem",
              }}
            >
              I&apos;m open to collaborations with NGOs, nonprofits, and
              mission-driven organisations. If you have a project that
              could use thoughtful design, I&apos;d love to hear from you.
            </p>

            <a
              href="mailto:nybkazi@gmail.com"
              className="email-link"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: "4px",
                fontSize: "0.9375rem",
                color: "var(--fg)",
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                const line = e.currentTarget.querySelector(".email-underline") as HTMLElement;
                if (line) line.style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
                const line = e.currentTarget.querySelector(".email-underline") as HTMLElement;
                if (line) line.style.transform = "scaleX(0)";
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                nybkazi@gmail.com
                <span style={{ fontSize: "18px", transition: "transform 0.3s ease" }}>→</span>
              </span>
              <span
                className="email-underline"
                style={{
                  display: "block",
                  height: "1px",
                  background: "var(--accent)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
            </a>
          </div>

        </div>

        {/* Footer bar */}
        <div
          style={{
            marginTop: "6rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: "0.875rem",
              color: "var(--fg-subtle)",
              fontWeight: 300,
            }}
          >
            Nayaab Anwar &copy; 2026
          </span>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "var(--fg-subtle)",
              fontWeight: 400,
            }}
          >
            BUILT WITH INTENTION AND RESTRAINT.
          </span>
        </div>
      </div>
    </section>
  );
}
