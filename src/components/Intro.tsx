"use client";

import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="relative bg-snow text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest">
      <div className="mx-auto max-w-container">
        <Reveal>
          <p className="mono-tag text-muted-slate">— A quiet philosophy</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="display mt-8 text-deep-dark max-w-5xl"
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Designed for peaceful stays, warm hospitality, and effortless
            comfort.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10">
          <Reveal delay={0.2} className="md:col-span-5 md:col-start-8">
            <p className="text-near-black body-lg leading-relaxed">
              Hotel Parth brings together refined rooms, thoughtful service, and
              a calm location for families, travelers, and business guests
              visiting Hamirpur.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "Rooms", v: "24" },
                { k: "Check-in", v: "14:00" },
                { k: "Languages", v: "3+" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="mono-tag-sm text-muted-slate">{s.k}</p>
                  <p className="display text-2xl md:text-3xl mt-2 text-deep-dark">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
