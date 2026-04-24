"use client";

import Reveal from "./Reveal";
import { testimonials } from "@/lib/siteData";

export default function Testimonials() {
  return (
    <section className="relative bg-near-white text-ink py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-container">
        <Reveal>
          <p className="label-upper text-cool-slate">05 — Guests</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h-section mt-6 text-ink max-w-3xl">
            Kind words from recent stays.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-14 border-t border-cool-silver pt-14 md:pt-20">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full flex flex-col">
                <blockquote className="text-ink text-xl md:text-2xl leading-snug tracking-tight">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-10">
                  <p className="text-ink">{t.name}</p>
                  <p className="micro-tag text-cool-slate mt-2">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Mission-statement style close (Runway signature) */}
        <Reveal delay={0.3}>
          <div className="mt-28 md:mt-40 pt-14 border-t border-cool-silver">
            <p className="label-upper text-cool-slate">— Hospitality</p>
            <p
              className="mt-8 text-ink max-w-5xl"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              We are building Hotel Parth as a quiet retreat — a place where the
              pace slows, the details matter, and every stay feels considered.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
