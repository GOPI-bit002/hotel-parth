"use client";

import Reveal from "./Reveal";
import { experiences } from "@/lib/siteData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-snow text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest"
    >
      <div className="mx-auto max-w-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <p className="mono-tag text-muted-slate">02 — Experience</p>
            <h2
              className="display mt-4 text-deep-dark"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Details of craft.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-near-black body-lg max-w-sm">
              Small, meaningful experiences at Hotel Parth — rooted in place and
              shaped around you.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="group card-22 h-full flex flex-col" data-cursor="hover">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="mono-tag-sm text-muted-slate">{e.subtitle}</p>
                  <h3 className="h-sub text-deep-dark mt-3">{e.title}</h3>
                  <p className="text-near-black mt-4 leading-relaxed">
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
