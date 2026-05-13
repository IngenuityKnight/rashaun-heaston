"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "9",
    label: "Official City of Detroit platforms managed",
  },
  {
    number: "22%",
    label: "Listener growth driven at On Target Living",
  },
  {
    number: "8+",
    label: "Years of digital content & strategy",
  },
  {
    number: "1",
    label: "Wellness brand built from scratch",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-10 border-y border-ink/10">
      <div className="max-w-7xl mx-auto">
        <span className="eyebrow text-moss block mb-12">By the Numbers</span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-ink pt-6"
            >
              <div className="display text-6xl md:text-8xl leading-none mb-3 text-moss">
                {stat.number}
              </div>
              <p className="text-sm text-ink/70 leading-snug max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
