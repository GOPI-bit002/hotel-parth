"use client";

import Reveal from "./Reveal";
import { galleryImages } from "@/lib/siteData";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 hairline-top"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <span className="metadata text-secondary">05 — Gallery</span>
            <h2
              className="headline mt-4 text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
            >
              Atmosphere.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-secondary max-w-sm text-base md:text-lg">
              Moments from Hotel Parth — interiors, dining, grounds, and
              hospitality.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[260px] gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <div
                className="relative h-full w-full min-h-[200px] overflow-hidden"
                data-cursor="hover"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="img-editorial absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
