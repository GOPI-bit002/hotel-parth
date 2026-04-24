"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { rooms } from "@/lib/siteData";

export default function RoomsGrid() {
  return (
    <section
      id="stay"
      className="relative bg-paper text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest"
    >
      <div className="mx-auto max-w-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <p className="mono-tag text-muted-slate">01 — Stay</p>
            <h2
              className="display mt-4 text-deep-dark"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Rooms &amp; Suites.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-near-black body-lg max-w-sm">
              Every room at Hotel Parth is built around quiet comfort and
              considered detail.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 0.08}>
              <a
                href="#book"
                className="group block card-22 hover:border-border-cool transition-colors duration-500 ease-editorial"
                data-cursor="hover"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute top-5 right-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-editorial">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-paper text-deep-dark shadow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="mono-tag-sm text-muted-slate mb-2">
                      {room.category}
                    </p>
                    <h3 className="h-sub text-deep-dark">{room.title}</h3>
                  </div>
                  <span className="mono-tag-sm text-muted-slate shrink-0 text-right pt-1">
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
