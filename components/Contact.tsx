"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-10 bg-ink text-bone">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="eyebrow text-gold">Get In Touch</span>
            <h2 className="display text-5xl md:text-7xl mt-6 leading-[0.95]">
              Let's build{" "}
              <span className="display-italic text-gold">something good.</span>
            </h2>

            <p className="mt-8 text-lg text-bone/70 leading-relaxed max-w-md">
              Whether it's a campaign, a consultation, or a conversation —
              tell me what you're working on.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="eyebrow text-bone/50">Email</p>
                <a
                  href="mailto:hello@rashaunheaston.com"
                  className="display text-2xl mt-2 inline-block link-underline"
                >
                  hello@rashaunheaston.com
                </a>
              </div>
              <div>
                <p className="eyebrow text-bone/50">Elsewhere</p>
                <div className="flex gap-6 mt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.royalrootsorganics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Royal Roots
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="eyebrow text-bone/60 block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-transparent border-b border-bone/30 py-3 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="eyebrow text-bone/60 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-transparent border-b border-bone/30 py-3 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="eyebrow text-bone/60 block mb-2"
              >
                Project Type
              </label>
              <select
                name="projectType"
                id="projectType"
                className="w-full bg-transparent border-b border-bone/30 py-3 focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
              >
                <option value="consulting" className="bg-ink">
                  Consulting
                </option>
                <option value="speaking" className="bg-ink">
                  Speaking
                </option>
                <option value="partnership" className="bg-ink">
                  Brand Partnership
                </option>
                <option value="other" className="bg-ink">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="eyebrow text-bone/60 block mb-2"
              >
                Tell me what you're working on
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-bone/30 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink rounded-full font-medium uppercase text-sm tracking-wider hover:bg-bone transition-colors disabled:opacity-50"
            >
              {status === "loading"
                ? "Sending..."
                : status === "sent"
                ? "Message sent ✓"
                : "Send Message"}
              {status !== "sent" && <span aria-hidden>→</span>}
            </button>

            {status === "error" && (
              <p className="text-clay text-sm">
                Something went wrong. Please email directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
