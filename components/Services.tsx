"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Social Media Strategy & Audits",
    description:
      "A clear plan for who you're speaking to, where, and why. Built from audience research, platform audits, and an honest look at what's working and what isn't.",
    deliverables: [
      "Full platform audit",
      "Audience & competitor analysis",
      "12-month content strategy",
      "KPI framework",
    ],
  },
  {
    number: "02",
    title: "Content Production & Creative Direction",
    description:
      "End-to-end production for brands and leaders — from concept through edit. Video, podcast, editorial. Eight years of knowing what works on camera and what doesn't.",
    deliverables: [
      "Video production & editing",
      "Photo & podcast direction",
      "Editorial calendars",
      "Asset libraries",
    ],
  },
  {
    number: "03",
    title: "Brand Storytelling",
    description:
      "Finding the story only you can tell. Built on years of civic communications work and launching Royal Roots from nothing — this is craft, not templates.",
    deliverables: [
      "Brand narrative & voice",
      "Founder story development",
      "Documentary-style video",
      "Campaign storytelling",
    ],
  },
  {
    number: "04",
    title: "Executive Personal Branding",
    description:
      "For leaders whose public presence needs to match the quality of their work. LinkedIn, speaking, editorial positioning — anchored in substance, not performance.",
    deliverables: [
      "Personal brand positioning",
      "LinkedIn strategy & content",
      "Speaking & PR support",
      "Executive ghost-production",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-ink text-bone">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between pb-10 border-b border-bone/10">
          <h2 className="display text-5xl md:text-7xl leading-[1]">Services</h2>
          <a
            href="#contact"
            className="eyebrow text-bone/30 link-underline hidden md:inline-block hover:text-bone/60 transition-colors"
          >
            Request a quote →
          </a>
        </div>

        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border-b border-bone/10 py-10 md:py-12 grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12"
          >
            <span className="eyebrow text-bone/20 pt-1">{service.number}</span>

            <div>
              <h3 className="display text-2xl md:text-[1.75rem] leading-tight mb-4">
                {service.title}
              </h3>
              <p className="text-bone/50 leading-relaxed text-sm md:text-base max-w-sm">
                {service.description}
              </p>
            </div>

            <div>
              <p className="eyebrow text-bone/20 mb-5">Includes</p>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="text-sm text-bone/55 flex items-start gap-3">
                    <span className="mt-[9px] w-3 h-px bg-bone/25 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block link-underline eyebrow text-bone/25 hover:text-bone/60 transition-colors"
              >
                Inquire →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
