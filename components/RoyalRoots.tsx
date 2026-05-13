"use client";

import { motion } from "framer-motion";

export default function RoyalRoots() {
  return (
    <section
      id="royal-roots"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20">
          <div className="md:col-span-4">
            <span className="eyebrow text-ink/30 block mb-6">Also</span>
            <h2 className="display text-4xl md:text-5xl leading-[0.95]">
              Royal Roots
              <br />
              <span className="display-italic">Organics.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 md:col-start-6"
          >
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink/70">
              <p>
                Rashaun founded Royal Roots Organics in 2024 on a simple
                conviction: healthy communities start with access.
              </p>
              <p>
                In a city rebuilding itself, wellness shouldn&apos;t be a
                privilege. Royal Roots offers organic vitamins and essentials
                made with the people of Detroit in mind — and built by someone
                who lives here.
              </p>
              <p>
                Every product and campaign reflects the same ethos as his civic
                work: serve the community, tell the truth, make the right thing
                the easy thing.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-moss">
              <p className="display display-italic text-2xl md:text-3xl text-moss leading-snug">
                Healthy communities start with access.
              </p>
            </blockquote>

            <div className="mt-10">
              <a
                href="https://www.royalrootsorganics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Visit Royal Roots ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
