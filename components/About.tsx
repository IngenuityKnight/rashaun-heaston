"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-8 md:gap-16"
        >
          <div className="md:col-span-4">
            <span className="eyebrow text-moss">About</span>
            <div className="mt-8 sticky top-32">
              {/* Photo placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-moss/20 via-sage/10 to-clay/20 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="eyebrow text-ink/40">Photo of Rashaun</span>
                </div>
              </div>
              <p className="eyebrow text-ink/50 mt-4">
                01 — Detroit, Michigan
              </p>
            </div>
          </div>

          <div className="md:col-span-8 md:pt-12">
            <h2 className="display text-5xl md:text-7xl mb-12 leading-[1]">
              Communication and wellness are{" "}
              <span className="display-italic text-moss">
                both forms of service.
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-ink/85 max-w-2xl">
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
                <a
                  href="#royal-roots"
                  className="text-moss font-medium link-underline"
                >
                  Royal Roots Organics
                </a>
                {" "}— an organic wellness brand built on the belief that healthy
                living is a form of community care, and that better choices
                should be accessible in Detroit.
              </p>
              <p className="display-italic text-2xl md:text-3xl text-moss leading-snug pt-4">
                Different mediums. Same mission: care for the community he comes
                from.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-ink/10">
              {[
                { label: "Based in", value: "Detroit, MI" },
                { label: "Currently", value: "City of Detroit" },
                { label: "Building", value: "Royal Roots Organics" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="eyebrow text-ink/50">{item.label}</p>
                  <p className="mt-2 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
