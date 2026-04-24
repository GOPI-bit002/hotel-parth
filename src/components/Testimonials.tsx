"use client";

import Reveal from "./Reveal";
import { testimonials } from "@/lib/siteData";

export default function Testimonials() {
  return (
    <section className="relative bg-paper text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest">
      <div className="mx-auto max-w-container">
        <Reveal>
          <p className="mono-tag text-muted-slate">06 — Guests</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="display mt-4 text-deep-dark max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Kind words from recent stays.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card-22 p-8 md:p-10 h-full flex flex-col">
                <svg
                  aria-hidden
                  className="text-blue mb-6"
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="currentColor"
                >
                  <path d="M0 20V10C0 4.48 4.48 0 10 0v4a6 6 0 00-6 6h6v10H0zm16 0V10c0-5.52 4.48-10 10-10v4a6 6 0 00-6 6h6v10H16z" />
                </svg>
                <blockquote className="text-deep-dark text-lg md:text-xl leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto pt-10 border-t border-gray-lightest">
                  <p className="text-deep-dark">{t.name}</p>
                  <p className="mono-tag-sm text-muted-slate mt-2">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
