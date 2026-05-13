"use client";

import { motion } from "framer-motion";

const placeholders = [
  { client: "City of Detroit", category: "Civic Communications" },
  { client: "Royal Roots Organics", category: "Founder Story" },
  { client: "On Target Living", category: "Brand Video" },
  { client: "NTM", category: "Social Strategy" },
  { client: "Inner Views", category: "Content Production" },
  { client: "Coming Soon", category: "Selected Work" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="eyebrow text-moss">Selected Work</span>
            <h2 className="display text-5xl md:text-7xl mt-6 leading-[1] max-w-3xl">
              Case studies{" "}
              <span className="display-italic text-clay">coming soon.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-md">
            A full portfolio is on the way — featuring campaign work for the
            City of Detroit, On Target Living, NTM, and Royal Roots Organics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-moss to-ink/80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

              <div className="relative h-full p-8 flex flex-col justify-between text-bone">
                <span className="eyebrow text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="eyebrow text-bone/60 mb-2">{item.category}</p>
                  <h3 className="display text-3xl leading-tight">
                    {item.client}
                  </h3>
                  <div className="mt-6 inline-flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-widest">
                      In progress
                    </span>
                    <span className="w-8 h-px bg-bone" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
