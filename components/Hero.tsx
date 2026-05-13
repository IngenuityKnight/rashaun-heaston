"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row md:min-h-screen overflow-hidden">
      {/* Text column */}
      <div className="flex-1 px-6 md:pl-10 md:pr-12 pt-28 md:pt-0 pb-10 md:pb-0 flex flex-col justify-between gap-10 md:gap-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow text-ink/45 pt-6 md:pt-36"
        >
          Detroit, MI — Brand Strategist & Content Director
        </motion.p>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="display text-[clamp(4.5rem,9vw,8.5rem)] leading-[0.88] mb-8"
          >
            Rashaun
            <br />
            <span className="display-italic">Heaston.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-ink/60 leading-relaxed max-w-md mb-10"
          >
            Social media strategist and content director. Eight years building
            public voice for civic institutions, executive founders, and brands
            that care about their communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              Work With Me
            </a>
            <a
              href="https://www.royalrootsorganics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Shop Royal Roots ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:flex items-center gap-3 pb-10"
        >
          <span className="eyebrow text-ink/25">Scroll</span>
          <span className="w-8 h-px bg-ink/15" />
        </motion.div>
      </div>

      {/* Photo column — flush to right viewport edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full h-72 sm:h-96 md:h-auto md:w-[42%] overflow-hidden bg-sage/10"
      >
        <Image
          src="/headshot.jpeg"
          alt="Rashaun Heaston"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>
    </section>
  );
}
