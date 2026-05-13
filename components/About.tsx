"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-10 md:gap-16"
        >
          {/* Photo column */}
          <div className="md:col-span-4">
            <span className="eyebrow text-ink/35 block mb-8">About</span>
            <div className="sticky top-28">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/headshot.jpeg"
                  alt="Rashaun Heaston"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="eyebrow text-ink/30 mt-4">Detroit, Michigan</p>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-8 md:pt-14">
            <h2 className="display text-4xl md:text-[3.5rem] leading-[1.05] mb-10 max-w-xl">
              Communication and wellness are{" "}
              <span className="display-italic text-moss">
                both forms of service.
              </span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink/70 max-w-2xl">
              <p>
                Rashaun Heaston has spent nearly a decade learning how stories
                move people — first as a freelance content creator, then through
                strategy roles at On Target Living, NTM, and Inner Views.
              </p>
              <p>
                Today, he helps shape the City of Detroit&apos;s voice from inside
                the Mayor&apos;s Office, where he manages nine official platforms and
                helps the City communicate with residents about the work
                reshaping their neighborhoods.
              </p>
              <p>
                Outside City Hall, he founded{" "}
                <a href="#royal-roots" className="text-moss link-underline">
                  Royal Roots Organics
                </a>
                {" "}— a wellness brand built on the belief that healthy living
                is a form of community care.
              </p>
            </div>

            <div className="mt-14 pt-8 border-t border-ink/10 grid grid-cols-3 gap-6">
              {[
                { label: "Based in", value: "Detroit, MI" },
                { label: "Currently", value: "City of Detroit" },
                { label: "Also building", value: "Royal Roots" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="eyebrow text-ink/30 mb-2">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
