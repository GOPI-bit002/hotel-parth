"use client";

import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="relative bg-paper text-ink py-24 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="metadata text-secondary">— A quiet philosophy</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="headline mt-8 text-ink"
            style={{ fontSize: "clamp(2.25rem, 6vw, 6.5rem)" }}
          >
            Designed for peaceful stays, warm hospitality, and effortless
            comfort.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">
          <Reveal delay={0.2} className="md:col-span-5 md:col-start-8">
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              Hotel Parth brings together refined rooms, thoughtful service, and
              a calm location for families, travelers, and business guests
              visiting Hamirpur.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
