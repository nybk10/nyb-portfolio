const items = [
  "Brand Identity",
  "Visual Design",
  "Art Direction",
  "Web Design",
  "NGO",
  "Print",
  "Purpose-Driven",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "var(--fg-subtle)",
              fontWeight: 400,
              whiteSpace: "nowrap",
              padding: "0 2rem",
            }}
          >
            {item.toUpperCase()}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                background: "var(--accent)",
                borderRadius: "50%",
                marginLeft: "2rem",
                verticalAlign: "middle",
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
