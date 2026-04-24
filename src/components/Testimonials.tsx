"use client";

import Reveal from "./Reveal";
import { testimonials } from "@/lib/siteData";

export default function Testimonials() {
  return (
    <section className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 hairline-top">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <span className="metadata text-secondary">06 — Guests</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="headline mt-4 text-ink max-w-4xl"
            style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}
          >
            Kind words from recent stays.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="hairline-top pt-8 h-full flex flex-col">
                <blockquote className="text-ink text-xl md:text-2xl leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-10">
                  <p className="text-ink">{t.name}</p>
                  <p className="metadata text-secondary mt-2">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
