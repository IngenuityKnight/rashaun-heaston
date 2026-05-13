export default function Marquee() {
  const items = [
    "Brand Strategy",
    "✦",
    "Civic Communications",
    "✦",
    "Creative Direction",
    "✦",
    "Wellness",
    "✦",
    "Storytelling",
    "✦",
    "Community",
    "✦",
  ];

  return (
    <div className="border-y border-ink/10 py-6 overflow-hidden bg-ink text-bone">
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex shrink-0 gap-12 pr-12">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span key={i} className="display text-2xl md:text-3xl">
              {item === "✦" ? (
                <span className="text-gold">{item}</span>
              ) : (
                <span className="display-italic">{item}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
