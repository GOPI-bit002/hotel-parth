"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { rooms } from "@/lib/siteData";

export default function RoomsGrid() {
  return (
    <section
      id="stay"
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 hairline-top"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <span className="metadata text-secondary">01 — Stay</span>
            <h2
              className="headline mt-4 text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
            >
              Rooms
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-secondary max-w-sm text-base md:text-lg">
              Every room at Hotel Parth is built around quiet comfort and
              considered detail.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 0.08}>
              <a
                href="#book"
                className="group relative block overflow-hidden"
                data-cursor="hover"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <img
                    src={room.image}
                    alt={room.title}
                    loading="lazy"
                    className="img-editorial h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700 ease-editorial" />
                  <div className="absolute top-5 right-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-editorial">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-paper text-ink">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 hairline-top pt-5">
                  <div>
                    <h3 className="headline text-ink text-2xl md:text-3xl">
                      {room.title}
                    </h3>
                    <p className="metadata text-secondary mt-2">
                      {room.category}
                    </p>
                  </div>
                  <span className="metadata text-secondary shrink-0 text-right">
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
