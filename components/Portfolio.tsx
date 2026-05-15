"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PortfolioItem = {
  title: string;
  client: string;
  type: string;
  year: string;
  result: string;
  image?: string;
  href?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Civic Voice & Community Updates",
    client: "City of Detroit",
    type: "Civic Communications",
    year: "2022–Present",
    result:
      "Social-first messaging for public programs, community moments, and resident-facing updates.",
  },
  {
    title: "Founder-Led Wellness Content",
    client: "On Target Living",
    type: "Video & Podcast Growth",
    year: "2021–2022",
    result:
      "Content direction across short-form education, podcast promotion, and brand storytelling.",
  },
  {
    title: "Social Media Strategy System",
    client: "NTM",
    type: "Social Strategy",
    year: "2020",
    result:
      "Positioning, content planning, and publishing structure for a sharper social presence.",
  },
  {
    title: "Interview-Led Content Production",
    client: "Inner Views",
    type: "Production",
    year: "2019–2020",
    result:
      "Interview clips and social assets built to extend long-form conversations across platforms.",
  },
  {
    title: "Organic Product Storytelling",
    client: "Royal Roots Organics",
    type: "Founder & Creative Director",
    year: "2024–Present",
    result:
      "Brand voice, product education, and community-centered content for a growing wellness line.",
    href: "https://www.royalrootsorganics.com/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <h2 className="display text-5xl md:text-6xl leading-[1]">
              Selected
              <br />
              Work
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-ink/45 text-sm leading-relaxed">
              Selected social media strategy, content direction, and production
              work. Upload campaign screenshots, reel thumbnails, or post
              previews to turn each project into a visual sample.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border-y border-ink/10">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={`${item.client}-${item.title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-bone group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sage/10">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} social media portfolio sample for ${item.client}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="eyebrow text-ink/30">{item.type}</span>
                    <div>
                      <p className="display text-4xl leading-none text-ink/20">
                        Upload
                        <br />
                        Media
                      </p>
                      <p className="mt-4 max-w-[14rem] text-xs leading-relaxed text-ink/35">
                        Add a thumbnail in /public/portfolio and set this
                        project image path.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 min-h-64 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <span className="eyebrow text-ink/35">{item.client}</span>
                  <span className="eyebrow text-ink/25">{item.year}</span>
                </div>

                <h3 className="font-medium text-xl leading-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/50">
                  {item.result}
                </p>

                <div className="mt-auto pt-8 flex items-center justify-between gap-4">
                  <span className="eyebrow text-moss">{item.type}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm text-ink/40 hover:text-ink transition-colors"
                    >
                      View work ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="border-t border-ink/10 pt-8 mt-1">
          <a
            href="#contact"
            className="link-underline text-sm text-ink/35 hover:text-ink transition-colors"
          >
            Discuss a project →
          </a>
        </div>
      </div>
    </section>
  );
}
