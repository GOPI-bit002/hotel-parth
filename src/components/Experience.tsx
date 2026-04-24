"use client";

import Reveal from "./Reveal";
import { experiences } from "@/lib/siteData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-near-white text-ink py-24 md:py-32 px-6 md:px-10"
    >
      <div className="mx-auto max-w-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <p className="label-upper text-cool-slate">02 — Experience</p>
            <h2 className="h-section mt-6 text-ink max-w-xl">
              The small details matter.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-charcoal body-std max-w-sm">
              Thoughtful experiences at Hotel Parth — rooted in place and shaped
              around you.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric feature layout: 1 large + 2 smaller stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <Reveal className="md:col-span-7 md:row-span-2">
            <article className="group h-full flex flex-col" data-cursor="hover">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 5", borderRadius: "8px" }}
              >
                <img
                  src={experiences[0].image}
                  alt={experiences[0].title}
                  loading="lazy"
                  className="img-cinema absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="micro-tag text-cool-slate">
                  {experiences[0].subtitle}
                </p>
                <h3 className="h-sub text-ink mt-3">{experiences[0].title}</h3>
                <p className="text-charcoal mt-4 body-std leading-relaxed max-w-xl">
                  {experiences[0].description}
                </p>
              </div>
            </article>
          </Reveal>

          {experiences.slice(1).map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08} className="md:col-span-5">
              <article className="group flex gap-5 md:block" data-cursor="hover">
                <div
                  className="relative overflow-hidden shrink-0 basis-1/2 md:basis-auto"
                  style={{ aspectRatio: "4 / 3", borderRadius: "8px" }}
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="img-cinema absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="md:mt-5">
                  <p className="micro-tag text-cool-slate">{e.subtitle}</p>
                  <h3 className="h-card text-ink mt-2">{e.title}</h3>
                  <p className="text-charcoal mt-3 body-sm leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
