"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "71M+", label: "Impressions" },
  { value: "17.3M+", label: "Video Views" },
  { value: "2.8M+", label: "Engagements" },
  { value: "76K+", label: "Audience Growth" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.25, 0, 0.35, 1] },
});

export default function About() {
  return (
    <section
      id="about"
      className="bg-bone text-ink py-24 md:py-36 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="eyebrow text-ink/30 mb-14 md:mb-20"
        >
          The Strategist Behind the Work
        </motion.p>

        {/* Main grid: photo left, copy right */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0, 0.35, 1] }}
            className="md:col-span-4 md:sticky md:top-28"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt="Rashaun Heaston"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="eyebrow text-ink/25 mt-5">Detroit, Michigan</p>
          </motion.div>

          {/* Copy column */}
          <div className="md:col-span-8 md:pt-2">

            {/* Headline */}
            <motion.h2
              {...fadeUp(0.1)}
              className="display text-[clamp(2.4rem,4.5vw,4.2rem)] leading-[0.95] mb-10 md:mb-12 max-w-2xl"
            >
              Strategy meets storytelling.{" "}
              <span className="display-italic text-moss">
                Built for modern brands.
              </span>
            </motion.h2>

            {/* Bio */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-ink/65 max-w-xl">
              <motion.p {...fadeUp(0.18)}>
                Rashaun Heaston is a Social Media Strategist and Creative
                Producer who builds digital presence systems for businesses
                that want their online identity to match the quality of what
                they actually offer. He leads strategy, creative direction, and
                content at the intersection of storytelling and performance.
              </motion.p>
              <motion.p {...fadeUp(0.24)}>
                His work spans government communications, restaurants and
                hospitality, lifestyle and wellness brands, influencer
                campaigns, and creator-led storytelling. Most recently, he has
                been directing large-scale digital campaigns, influencer
                collaborations, and multi-platform social strategy for the City
                of Detroit — executing out of the Mayor&apos;s Office across nine
                official city platforms.
              </motion.p>
              <motion.p {...fadeUp(0.30)}>
                That work has generated 71M+ impressions, 17M+ video views, and
                triple-digit growth across every major platform. But the bigger
                story is what those numbers represent: organizations and brands
                that finally show up online the way they show up in real life.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div {...fadeUp(0.38)} className="mt-10">
              <a href="#contact" className="btn-primary">
                Book a Discovery Call
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              {...fadeUp(0.44)}
              className="mt-16 pt-10 border-t border-ink/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={[
                    i < stats.length - 1 ? "md:border-r border-ink/10 md:pr-8" : "",
                    i > 0 ? "md:pl-8" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p className="display text-3xl md:text-4xl leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="eyebrow text-ink/35">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
