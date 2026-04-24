"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { siteInfo } from "@/lib/siteData";

const highlights = [
  "Near city access",
  "Ideal for families, business travelers, and tourists",
  "Easy road connectivity",
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative bg-paper text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest"
    >
      <div className="mx-auto max-w-container grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="mono-tag text-muted-slate">04 — Location</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="display mt-4 text-deep-dark"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Hamirpur,
              <br />
              Himachal.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-near-black body-lg mt-6 max-w-md">
              {siteInfo.name} is set in Hamirpur, Himachal Pradesh — a calm,
              well-connected town in the foothills. A quiet place to stay, with
              the comforts of a city nearby.
            </p>
          </Reveal>

          <div className="mt-10">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={0.2 + i * 0.05}>
                <div className="py-5 border-b border-gray-lightest flex items-start gap-4">
                  <MapPin size={18} className="mt-1 shrink-0 text-blue" />
                  <p className="text-deep-dark text-base md:text-lg">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group mt-10"
            >
              Open in Google Maps
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="md:col-span-7">
          <div
            className="relative overflow-hidden card-22 violet-band"
            style={{ aspectRatio: "4 / 3" }}
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
              alt="Himachal Pradesh landscape"
              loading="lazy"
              className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/80 via-violet-deep/10 to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-6">
              <div>
                <p className="mono-tag-sm text-paper/80">Hotel Parth</p>
                <p className="text-paper display text-3xl md:text-4xl mt-2">
                  Hamirpur · H.P.
                </p>
              </div>
              <span className="mono-tag-sm text-paper/80">
                31.68°N / 76.52°E
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
