"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-10 overflow-hidden">
      {/* Decorative background mark */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-moss/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-clay/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-moss animate-pulse" />
          <span className="eyebrow text-moss">Detroit, MI · Available for Q2 2026 projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="display text-[clamp(3rem,9vw,9rem)] leading-[0.9] mb-8 max-w-5xl"
        >
          Serving Detroit.
          <br />
          Building brands.
          <br />
          <span className="display-italic text-moss">Promoting wellness.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-end max-w-5xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-ink/80 max-w-xl">
            Brand strategist, civil servant, and founder of{" "}
            <a
              href="#royal-roots"
              className="link-underline text-moss font-medium"
            >
              Royal Roots Organics
            </a>
            . I help Detroit tell its story — and help people live well while doing it.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Work With Me
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.royalrootsorganics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Shop Royal Roots
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex items-center gap-3 text-ink/50"
        >
          <span className="eyebrow">Scroll</span>
          <span className="w-12 h-px bg-ink/30" />
        </motion.div>
      </div>
    </section>
  );
}
