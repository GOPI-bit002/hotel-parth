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
      className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-10 border-t border-border-dark"
    >
      <div className="mx-auto max-w-container grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="label-upper text-cool-slate">04 — Location</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-section mt-6 text-paper">
              Hamirpur,
              <br />
              Himachal.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-cool-slate body-std mt-6 max-w-md leading-relaxed">
              {siteInfo.name} is set in Hamirpur, Himachal Pradesh — a calm,
              well-connected town in the foothills. A quiet place to stay, with
              the comforts of a city nearby.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-border-dark">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={0.2 + i * 0.05}>
                <div className="py-5 border-b border-border-dark flex items-start gap-4">
                  <MapPin size={16} className="mt-1 shrink-0 text-paper" />
                  <p className="text-paper text-base md:text-lg">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group mt-10 text-paper"
            >
              Open in Google Maps
              <ArrowUpRight
                size={14}
                className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="md:col-span-7">
          <div
            className="relative overflow-hidden film-vignette"
            style={{
              aspectRatio: "4 / 3",
              borderRadius: "8px",
              border: "1px solid #27272a",
            }}
            data-cursor="hover"
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
              alt="Himachal Pradesh landscape"
              loading="lazy"
              className="img-cinema h-full w-full object-cover"
            />
            <div className="absolute left-6 right-6 bottom-6 z-10 flex items-end justify-between gap-6">
              <div>
                <p className="micro-tag text-paper/80">Hotel Parth</p>
                <p className="text-paper h-card mt-2">Hamirpur · H.P.</p>
              </div>
              <span className="micro-tag text-paper/80">
                31.68°N / 76.52°E
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
