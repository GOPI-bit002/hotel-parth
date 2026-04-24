"use client";

import Reveal from "./Reveal";
import { experiences } from "@/lib/siteData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 hairline-top"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <span className="metadata text-secondary">02 — Experience</span>
            <h2
              className="headline mt-4 text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
            >
              Craft.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-secondary max-w-sm text-base md:text-lg">
              Small, meaningful experiences at Hotel Parth — rooted in place
              and shaped around you.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="group hairline" data-cursor="hover">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="img-editorial h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="metadata text-secondary">{e.subtitle}</span>
                  <h3 className="headline text-ink text-3xl md:text-4xl mt-3">
                    {e.title}
                  </h3>
                  <p className="text-secondary mt-4 leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
