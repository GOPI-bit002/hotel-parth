"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { rooms } from "@/lib/siteData";

// Asymmetric magazine layout — 12-col grid, rooms span 7/5 alternating.
const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

const aspects = [
  "4 / 3", // large feature
  "3 / 4", // tall secondary
  "3 / 4",
  "4 / 3",
];

export default function RoomsGrid() {
  return (
    <section
      id="stay"
      className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-10 border-t border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <p className="label-upper text-cool-slate">01 — Stay</p>
            <h2 className="h-section mt-6 text-paper max-w-2xl">
              Rooms &amp; Suites
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cool-slate body-std max-w-sm">
              Every room at Hotel Parth is built around quiet comfort and
              considered detail.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 0.08} className={spans[i]}>
              <a
                href="#book"
                className="group block relative overflow-hidden"
                data-cursor="hover"
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: aspects[i],
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    loading="lazy"
                    className="img-cinema h-full w-full object-cover"
                  />
                  {/* Hover dark overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-700 ease-editorial" />

                  {/* Top-left tag */}
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-4">
                    <p className="micro-tag text-paper/80 bg-ink/40 backdrop-blur-sm px-2.5 py-1 rounded-sharp">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-editorial inline-flex items-center justify-center w-10 h-10 rounded-sharp bg-paper text-ink">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="micro-tag text-mid-slate mb-2">
                      {room.category}
                    </p>
                    <h3 className="h-card text-paper">{room.title}</h3>
                  </div>
                  <span className="micro-tag text-mid-slate shrink-0 text-right pt-1">
                    {room.label}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
