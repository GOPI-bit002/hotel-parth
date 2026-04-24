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
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 hairline-top"
    >
      <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <span className="metadata text-secondary">04 — Location</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="headline mt-4 text-ink"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
            >
              Hamirpur,
              <br />
              Himachal.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-secondary mt-6 text-base md:text-lg max-w-md">
              {siteInfo.name} is set in Hamirpur, Himachal Pradesh — a calm,
              well-connected town in the foothills. A quiet place to stay, with
              the comforts of a city nearby.
            </p>
          </Reveal>

          <div className="mt-10 hairline-top">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={0.2 + i * 0.05}>
                <div className="py-5 hairline-bottom flex items-start gap-4">
                  <MapPin size={18} className="mt-1 shrink-0 text-ink" />
                  <p className="text-ink text-base md:text-lg">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 border border-black/20 px-7 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-paper transition-all duration-500 ease-editorial"
            >
              Open in Google Maps
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="md:col-span-7">
          <div
            className="relative overflow-hidden hairline bg-ink"
            style={{ aspectRatio: "4 / 3" }}
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
              alt="Himachal Pradesh landscape"
              loading="lazy"
              className="img-editorial h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/20" />
            <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-6">
              <div>
                <p className="metadata text-paper/80">Hotel Parth</p>
                <p className="text-paper text-2xl md:text-3xl headline mt-2">
                  Hamirpur · H.P.
                </p>
              </div>
              <span className="metadata text-paper/80">31.68°N / 76.52°E</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
