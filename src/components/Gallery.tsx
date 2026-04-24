"use client";

import Reveal from "./Reveal";
import { galleryImages } from "@/lib/siteData";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-snow text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest"
    >
      <div className="mx-auto max-w-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <p className="mono-tag text-muted-slate">05 — Gallery</p>
            <h2
              className="display mt-4 text-deep-dark"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Atmosphere.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-near-black body-lg max-w-sm">
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
              className={`group relative overflow-hidden card-22 ${img.span}`}
            >
              <div
                className="relative h-full w-full min-h-[200px] overflow-hidden"
                data-cursor="hover"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="img-zoom absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
