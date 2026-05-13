"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Social Media Strategy & Audits",
    description:
      "A clear plan for who you're speaking to, where, and why. Built from audience research, content audits, and platform-specific strategy.",
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
      "End-to-end production for brands and leaders — from concept to camera to cut. Eight years of producing video, podcasts, and campaign content.",
    deliverables: [
      "Video production & editing",
      "Photo & podcast direction",
      "Editorial calendars",
      "Asset libraries",
    ],
  },
  {
    number: "03",
    title: "Brand Storytelling & Video",
    description:
      "Helping organizations and founders find the story only they can tell. Built on my work at the City of Detroit and from launching Royal Roots from scratch.",
    deliverables: [
      "Brand narrative & voice",
      "Founder story development",
      "Documentary-style video",
      "Campaign storytelling",
    ],
  },
  {
    number: "04",
    title: "Founder & Executive Personal Branding",
    description:
      "For leaders who need a public voice that matches their work. LinkedIn, speaking, executive content — anchored in substance, not performance.",
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
    <section id="services" className="py-32 px-6 md:px-10 bg-ink text-bone">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-20">
          <div>
            <span className="eyebrow text-gold">Services</span>
            <h2 className="display text-5xl md:text-7xl mt-6 leading-[1] max-w-3xl">
              Strategy and storytelling,{" "}
              <span className="display-italic text-gold">built for impact.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-bone/10">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-ink p-8 md:p-12 group hover:bg-moss/20 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="eyebrow text-gold">{service.number}</span>
                <span className="text-bone/30 group-hover:text-gold group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>

              <h3 className="display text-3xl md:text-4xl mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-bone/70 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-bone/80 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="eyebrow text-gold link-underline inline-flex items-center gap-2"
              >
                Request a quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
