"use client";

import { motion } from "framer-motion";

export default function RoyalRoots() {
  return (
    <section
      id="royal-roots"
      className="relative py-32 px-6 md:px-10 overflow-hidden bg-gradient-to-b from-bone via-sage/10 to-bone"
    >
      {/* Decorative botanical mark */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 Q30 30 30 50 Q30 70 50 90 Q70 70 70 50 Q70 30 50 10 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-moss"
          />
          <path
            d="M50 10 L50 90"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-moss"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow text-clay">
              The Story Behind The Brand
            </span>
            <h2 className="display text-5xl md:text-7xl mt-6 leading-[0.95]">
              Royal Roots{" "}
              <span className="display-italic text-moss">Organics.</span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                Rashaun founded Royal Roots Organics in 2024 with a simple
                conviction: <em>healthy communities start with access.</em>
              </p>
              <p>
                In a city working to rebuild itself, wellness shouldn't be a
                privilege. Royal Roots offers organic vitamins and wellness
                essentials made with the people of Detroit in mind — and built
                by someone who lives here.
              </p>
              <p>
                Every product, every blog post, every campaign reflects the
                same ethos that drives his civic work: serve the community,
                tell the truth, and make the right thing the easy thing.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.royalrootsorganics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Royal Roots
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Featured product cards */}
              {[
                {
                  name: "Daily Greens",
                  tag: "Wellness",
                  tilt: "rotate-1",
                },
                {
                  name: "Immunity Stack",
                  tag: "Vitamins",
                  tilt: "-rotate-1 mt-12",
                },
                {
                  name: "Root Reset",
                  tag: "Detox",
                  tilt: "-rotate-1",
                },
                {
                  name: "Calm & Focus",
                  tag: "Adaptogens",
                  tilt: "rotate-1 mt-12",
                },
              ].map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`${product.tilt} bg-bone border border-ink/10 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className="aspect-square bg-gradient-to-br from-moss/30 via-sage/20 to-clay/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-moss/40"
                      >
                        <path
                          d="M12 2 Q8 6 8 12 Q8 18 12 22 Q16 18 16 12 Q16 6 12 2"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="eyebrow text-clay text-[0.65rem]">
                      {product.tag}
                    </p>
                    <p className="display text-xl mt-1">{product.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <p className="eyebrow text-ink/50 text-center mt-8">
              Featured products — visit the shop for full collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
