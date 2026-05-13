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
    <section id="contact" className="bg-ink text-bone py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: heading + contact info */}
          <div className="md:col-span-4">
            <h2 className="display text-5xl md:text-6xl leading-[0.95]">
              Start a<br />conversation.
            </h2>

            <div className="mt-12 space-y-8">
              <div>
                <p className="eyebrow text-bone/30 mb-3">Direct</p>
                <a
                  href="mailto:hello@rashaunheaston.com"
                  className="link-underline text-sm"
                >
                  hello@rashaunheaston.com
                </a>
              </div>
              <div>
                <p className="eyebrow text-bone/30 mb-3">Social</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-bone/60 hover:text-bone transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-bone/60 hover:text-bone transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.royalrootsorganics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-bone/60 hover:text-bone transition-colors"
                  >
                    Royal Roots Organics ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 md:col-start-6 space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="eyebrow text-bone/30 block mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-bone/15 pb-3 focus:outline-none focus:border-bone/50 transition-colors text-sm placeholder:text-bone/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="eyebrow text-bone/30 block mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-bone/15 pb-3 focus:outline-none focus:border-bone/50 transition-colors text-sm placeholder:text-bone/20"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="eyebrow text-bone/30 block mb-3"
              >
                Project Type
              </label>
              <select
                name="projectType"
                id="projectType"
                className="w-full bg-transparent border-b border-bone/15 pb-3 focus:outline-none focus:border-bone/50 transition-colors appearance-none cursor-pointer text-sm text-bone"
              >
                <option value="strategy" className="bg-ink">
                  Social Media Strategy
                </option>
                <option value="content" className="bg-ink">
                  Content Production
                </option>
                <option value="branding" className="bg-ink">
                  Brand Storytelling
                </option>
                <option value="personal" className="bg-ink">
                  Executive Personal Branding
                </option>
                <option value="other" className="bg-ink">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="eyebrow text-bone/30 block mb-3"
              >
                What are you working on?
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-bone/15 pb-3 focus:outline-none focus:border-bone/50 transition-colors resize-none text-sm placeholder:text-bone/20"
                placeholder="Tell me about your project, timeline, and what success looks like."
              />
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={status === "loading" || status === "sent"}
                className="px-8 py-3.5 bg-bone text-ink text-[0.7rem] tracking-widest uppercase font-medium hover:bg-moss hover:text-bone transition-colors disabled:opacity-50"
              >
                {status === "loading"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent ✓"
                  : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-bone/40">
                  Something went wrong. Email directly.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
