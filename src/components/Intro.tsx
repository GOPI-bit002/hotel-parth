"use client";

import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="relative bg-cool-cloud text-ink py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-container">
        <Reveal>
          <p className="label-upper text-cool-slate">— A Quiet Philosophy</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display-lg mt-10 text-ink max-w-5xl">
            Designed for peaceful stays, warm hospitality, and effortless
            comfort.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10">
          <Reveal delay={0.2} className="md:col-span-5 md:col-start-8">
            <p className="text-charcoal body-std text-base md:text-lg leading-relaxed">
              Hotel Parth brings together refined rooms, thoughtful service, and
              a calm location for families, travelers, and business guests
              visiting Hamirpur.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-cool-silver">
              {[
                { k: "Rooms", v: "24" },
                { k: "Check-in", v: "14:00" },
                { k: "Languages", v: "3+" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="micro-tag text-cool-slate">{s.k}</p>
                  <p
                    className="mt-2 text-ink"
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
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
