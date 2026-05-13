"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "City of Detroit",
    category: "Civic Communications",
    years: "2022–Present",
  },
  {
    name: "On Target Living",
    category: "Brand Video & Podcast Growth",
    years: "2021–2022",
  },
  {
    name: "NTM",
    category: "Social Media Strategy",
    years: "2020",
  },
  {
    name: "Inner Views",
    category: "Content Production",
    years: "2019–2020",
  },
  {
    name: "Royal Roots Organics",
    category: "Founder & Creative Director",
    years: "2024–Present",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <h2 className="display text-5xl md:text-6xl leading-[1]">
              Selected
              <br />
              Work
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-ink/45 text-sm leading-relaxed">
              Case studies are in production. A record of engagements is below.
              Full portfolio available upon request.
            </p>
          </div>
        </div>

        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border-t border-ink/10 py-6 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_auto] items-center gap-4 group"
          >
            <h3 className="font-medium text-sm md:text-base group-hover:text-moss transition-colors duration-200">
              {client.name}
            </h3>
            <span className="hidden md:block text-ink/40 text-sm">
              {client.category}
            </span>
            <span className="eyebrow text-ink/25">{client.years}</span>
          </motion.div>
        ))}

        <div className="border-t border-ink/10 pt-8 mt-1">
          <a
            href="#contact"
            className="link-underline text-sm text-ink/35 hover:text-ink transition-colors"
          >
            Discuss a project →
          </a>
        </div>
      </div>
    </section>
  );
}
