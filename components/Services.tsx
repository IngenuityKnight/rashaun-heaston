"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CheckIcon = () => (
  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
    <path
      d="M1 4.5L4 7.5L10 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const packages = [
  {
    number: "01",
    name: "The Quick Win Session",
    price: "$197",
    frequency: "one-time",
    tagline: "Get expert eyes on your social in 60 minutes",
    bestFor:
      "Solo entrepreneurs and small business owners with specific questions or a clear bottleneck they need help breaking through.",
    includes: [
      "Pre-call questionnaire",
      "1-platform review",
      "60-min Zoom call",
      "Call recording",
      "1-page action summary",
      "7 days of email follow-up",
    ],
    cta: "Book Your Session",
    popular: false,
    dark: false,
  },
  {
    number: "02",
    name: "Social Media Audit & Strategy Sprint",
    price: "Starting at $997",
    frequency: "one-time project",
    tagline: "A clear roadmap before you invest in anything else",
    bestFor:
      "Businesses that feel stuck and need clarity before committing to ongoing help. Walk away knowing exactly what to do next.",
    includes: [
      "2-platform audit",
      "Competitor analysis",
      "Profile optimization recommendations",
      "Content pillar strategy",
      "90-min strategy call",
      "15–20 page strategy document",
      "30 days of email support",
    ],
    cta: "Start Your Audit",
    popular: false,
    dark: false,
  },
  {
    number: "03",
    name: "The Growth Foundation",
    price: "Starting at $2,997",
    frequency: "one-time project",
    tagline: "Launch (or relaunch) with everything you need to succeed",
    bestFor:
      "New businesses, rebrands, or businesses launching on a new platform. Build your presence the right way from day one.",
    includes: [
      "Everything in the Audit Sprint",
      "Full profile rebuild",
      "90-day content strategy",
      "Brand voice guide",
      "30-day content calendar with captions",
      "5 Canva templates",
      "Hashtag bank",
      "2 strategy calls",
    ],
    cta: "Build Your Foundation",
    popular: false,
    dark: false,
  },
  {
    number: "04",
    name: "Monthly Social Media Management",
    price: "Starting at $1,997",
    frequency: "/month · 3-month minimum",
    tagline: "Done-for-you social that feels like you",
    bestFor:
      "Growing brands who want consistency without the overhead of managing it themselves. Show up every week without thinking about it.",
    includes: [
      "2-platform management",
      "12–16 posts/month",
      "Caption writing & hashtag research",
      "Monthly content calendar",
      "Weekly short-form video concepts",
      "Posting support",
      "Monthly analytics report",
      "Monthly strategy call",
      "M–F support",
    ],
    cta: "Apply for Management",
    popular: true,
    dark: true,
  },
  {
    number: "05",
    name: "Brand Visibility Partnership",
    price: "Starting at $4,500",
    frequency: "/month · 6-month minimum · by application",
    tagline: "When social media is core to your growth strategy",
    bestFor:
      "Established businesses and personal brands ready to make social a serious, sustained growth channel.",
    includes: [
      "Everything in Monthly Management",
      "3-platform management",
      "20–25 posts/month",
      "Dedicated short-form video strategy",
      "Bi-weekly strategy calls",
      "Quarterly deep dives",
      "Brand voice guide",
      "Priority support",
      "2 hrs/month additional consulting",
    ],
    cta: "Apply for Partnership",
    popular: false,
    dark: true,
  },
];

const addons = [
  { name: "Extra social posts (4-pack)", price: "$200–$400" },
  { name: "Reels/TikTok strategy intensive", price: "$750–$1,500" },
  { name: "Additional 60-min consulting call", price: "$200–$350" },
  { name: "Standalone monthly analytics", price: "$300–$500" },
  { name: "Profile refresh", price: "$250–$500" },
  { name: "Brand voice guide", price: "$500–$1,200" },
  { name: "Content batching session", price: "$750–$1,500" },
  { name: "Canva template pack", price: "$400–$800" },
  { name: "Team training workshop", price: "$500–$1,000" },
];

const faqs = [
  {
    q: "Which package is right for me?",
    a: "If you have a specific question or bottleneck, start with the Quick Win Session. If you feel directionless, the Audit Sprint gives you clarity. If you're starting fresh or relaunching, the Growth Foundation sets you up properly. If you want someone to handle it consistently, Monthly Management is the right move. If social is central to how you grow, the Brand Visibility Partnership is built for you.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Yes. Every business is different, and sometimes the right fit lives between two packages. Book a discovery call and we'll build something that actually makes sense for you.",
  },
  {
    q: "What platforms do you work with?",
    a: "Primarily Instagram, LinkedIn, Facebook, and TikTok. Strategy and management focus depends on where your audience actually is — we'll figure that out together.",
  },
  {
    q: "How long until I see results?",
    a: "Honest answer: social media is a long game. You can expect to see engagement and consistency improvements within 30–60 days. Meaningful growth — the kind that actually affects your business — typically takes 3–6 months of consistent, strategic effort.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Monthly management packages have a minimum commitment (3 or 6 months depending on tier). After the minimum, you can cancel with 30 days' notice. One-time projects are non-refundable once work begins.",
  },
  {
    q: "Do you require contracts?",
    a: "Yes. All packages include a clear service agreement that protects both of us. You'll always know exactly what's included, the timeline, and how revisions are handled.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
        aria-expanded={open}
      >
        <span className="display text-lg md:text-xl leading-snug group-hover:text-ink/70 transition-colors">
          {q}
        </span>
        <span
          aria-hidden
          className={`mt-1.5 shrink-0 w-5 h-5 border flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-ink text-bone border-ink"
              : "border-ink/20 text-ink/35 group-hover:border-ink/40"
          }`}
        >
          <span
            className={`text-xs leading-none transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ink/55 leading-relaxed pb-7 text-sm md:text-base max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        id="services"
        className="bg-bone text-ink border-b border-ink/10 px-6 md:px-10 pt-24 md:pt-32 pb-20 md:pb-28"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-ink/30 mb-10"
          >
            Creative Consulting — Social Media Strategy &amp; Management
          </motion.p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.93]"
            >
              Social Media That Actually Works for Your Business
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="text-ink/55 text-base md:text-lg leading-relaxed mb-8 max-w-sm">
                From quick-win consulting to full done-for-you management —
                find the level of support that fits where you are right now.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Book a Discovery Call
                </a>
                <a href="#packages" className="btn-secondary">
                  See Packages
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Decision Helper ───────────────────────────────── */}
      <section className="bg-bone text-ink border-b border-ink/10 px-6 md:px-10 py-14 md:py-16">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-ink/25 mb-8">Find your fit</p>
          <div className="grid md:grid-cols-3 border border-ink/10">
            {[
              {
                q: "Just need quick advice?",
                a: "Quick Win Session",
                note: "One session, one problem, real clarity.",
              },
              {
                q: "Ready to build a foundation?",
                a: "Audit Sprint or Growth Foundation",
                note: "Strategy and structure before anything else.",
              },
              {
                q: "Want ongoing support?",
                a: "Monthly Management or Brand Visibility",
                note: "Consistent, done-for-you social presence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 ${
                  i < 2
                    ? "border-b md:border-b-0 md:border-r border-ink/10"
                    : ""
                }`}
              >
                <p className="eyebrow text-ink/30 mb-5">{item.q}</p>
                <p className="display text-xl md:text-2xl leading-snug mb-3">
                  → {item.a}
                </p>
                <p className="text-sm text-ink/40 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ──────────────────────────────────────── */}
      <section id="packages" className="bg-bone">
        <div className="px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex items-end justify-between py-10 border-b border-ink/10">
            <h2 className="display text-4xl md:text-6xl leading-[1] text-ink">
              Packages
            </h2>
            <a
              href="#contact"
              className="eyebrow text-ink/30 link-underline hidden md:inline-block hover:text-ink/60 transition-colors"
            >
              Not sure? Book a call →
            </a>
          </div>
        </div>

        {packages.map((pkg) => (
          <motion.div
            key={pkg.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className={pkg.dark ? "bg-ink text-bone" : "bg-bone text-ink"}
          >
            <div className="px-6 md:px-10">
              <div
                className={`max-w-7xl mx-auto border-b py-12 md:py-16 ${
                  pkg.dark ? "border-bone/10" : "border-ink/10"
                }`}
              >
                {/* Name + price row */}
                <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-16 mb-10 md:mb-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`eyebrow ${
                          pkg.dark ? "text-bone/20" : "text-ink/20"
                        }`}
                      >
                        {pkg.number}
                      </span>
                      {pkg.popular && (
                        <span className="eyebrow bg-gold text-ink px-3 py-1 tracking-widest"
                          style={{ fontSize: "0.58rem" }}>
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="display text-3xl md:text-[2.4rem] leading-tight mb-3">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-base italic ${
                        pkg.dark ? "text-bone/45" : "text-ink/45"
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>
                  <div className="md:text-right md:pt-8">
                    <p className="display text-3xl md:text-[2.5rem] leading-none">
                      {pkg.price}
                    </p>
                    <p
                      className={`eyebrow mt-2 ${
                        pkg.dark ? "text-bone/25" : "text-ink/25"
                      }`}
                    >
                      {pkg.frequency}
                    </p>
                  </div>
                </div>

                {/* Best for + includes + CTA */}
                <div className="grid md:grid-cols-[1fr_1.3fr_auto] gap-8 md:gap-12 items-start">
                  <div>
                    <p
                      className={`eyebrow mb-4 ${
                        pkg.dark ? "text-bone/20" : "text-ink/20"
                      }`}
                    >
                      Best for
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        pkg.dark ? "text-bone/50" : "text-ink/50"
                      }`}
                    >
                      {pkg.bestFor}
                    </p>
                  </div>

                  <div>
                    <p
                      className={`eyebrow mb-4 ${
                        pkg.dark ? "text-bone/20" : "text-ink/20"
                      }`}
                    >
                      Includes
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className={`text-sm flex items-start gap-3 ${
                            pkg.dark ? "text-bone/60" : "text-ink/55"
                          }`}
                        >
                          <span
                            className={`mt-[3px] shrink-0 ${
                              pkg.dark ? "text-bone/30" : "text-sage"
                            }`}
                          >
                            <CheckIcon />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:self-end">
                    <a
                      href="#contact"
                      className={
                        pkg.dark
                          ? "inline-flex items-center gap-2 px-6 py-3 bg-bone text-ink eyebrow tracking-[0.1em] uppercase font-medium hover:bg-gold transition-colors duration-200 whitespace-nowrap"
                          : "btn-primary whitespace-nowrap"
                      }
                      style={pkg.dark ? { fontSize: "0.7rem" } : undefined}
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── Add-Ons ───────────────────────────────────────── */}
      <section className="bg-ink text-bone px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="pb-10 border-b border-bone/10 mb-14">
            <p className="eyebrow text-bone/25 mb-4">Customize your package</p>
            <h2 className="display text-4xl md:text-6xl leading-[1]">
              Add-Ons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className={[
                  "py-7",
                  i % 3 !== 2 ? "md:border-r md:pr-8 border-bone/10" : "",
                  i % 3 !== 0 ? "md:pl-8" : "",
                  i < addons.length - 1 ? "border-b border-bone/10" : "",
                  i >= 6 ? "md:border-b-0" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <p className="text-sm text-bone/50 mb-2 leading-snug">
                  {addon.name}
                </p>
                <p className="display text-xl text-bone">{addon.price}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-bone/35 text-sm mt-14 pt-10 border-t border-bone/10 leading-relaxed max-w-lg">
            Add-ons can be paired with any package or purchased as standalone
            services. Pricing varies by scope — book a call to discuss.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="bg-bone text-ink px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
            <div>
              <p className="eyebrow text-ink/25 mb-5">FAQ</p>
              <h2 className="display text-4xl md:text-5xl leading-[1.05]">
                Common Questions
              </h2>
            </div>
            <div className="border-t border-ink/10">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="bg-moss text-bone px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-bone/30 mb-7"
          >
            Creative Consulting
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1] mb-6 max-w-2xl mx-auto"
          >
            Not sure which package fits? Let&apos;s talk.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-bone/50 text-base md:text-lg leading-relaxed mb-10 max-w-sm mx-auto"
          >
            Book a free 20-minute discovery call to figure out the right next
            step for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bone text-ink eyebrow tracking-[0.1em] uppercase font-medium hover:bg-gold transition-colors duration-200"
              style={{ fontSize: "0.72rem" }}
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Mobile Sticky CTA ─────────────────────────────── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-bone/15 px-5 py-3 flex items-center justify-between"
            style={{ background: "rgba(15,20,17,0.96)", backdropFilter: "blur(8px)" }}
          >
            <div>
              <p className="eyebrow text-bone/50" style={{ fontSize: "0.6rem" }}>
                Creative Consulting
              </p>
              <p className="eyebrow text-bone/25" style={{ fontSize: "0.57rem" }}>
                Social media strategy &amp; management
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-bone text-ink eyebrow tracking-[0.1em] uppercase font-medium hover:bg-gold transition-colors"
              style={{ fontSize: "0.65rem" }}
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
