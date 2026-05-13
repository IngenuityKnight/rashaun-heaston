"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "9", label: "City of Detroit platforms managed" },
  { number: "22%", label: "Listener growth at On Target Living" },
  { number: "8+", label: "Years in digital content & strategy" },
  { number: "1", label: "Wellness brand built from scratch" },
];

export default function Stats() {
  return (
    <div className="border-t border-ink/10 px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="display text-5xl md:text-6xl text-moss leading-none mb-3">
              {stat.number}
            </div>
            <p className="text-xs text-ink/45 leading-snug max-w-[150px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
