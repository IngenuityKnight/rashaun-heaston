export default function Marquee() {
  const clients = [
    "City of Detroit",
    "On Target Living",
    "NTM",
    "Inner Views",
    "Royal Roots Organics",
  ];

  return (
    <div className="border-t border-b border-ink/10 px-6 md:px-10 py-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="eyebrow text-ink/30">Work includes</span>
        <span className="w-px h-3 bg-ink/15 hidden sm:block" />
        {clients.map((client, i) => (
          <span key={client} className="flex items-center gap-5">
            <span className="text-sm text-ink/50">{client}</span>
            {i < clients.length - 1 && (
              <span className="text-ink/20 text-xs leading-none">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
