"use client";

import Reveal from "./Reveal";
import { galleryImages } from "@/lib/siteData";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-10 border-t border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <Reveal>
            <p className="label-upper text-cool-slate">03 — Gallery</p>
            <h2 className="h-section mt-6 text-paper">Atmosphere.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cool-slate body-std max-w-sm">
              Moments from Hotel Parth — interiors, dining, grounds, and
              hospitality.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[240px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <div
                className="relative h-full w-full min-h-[200px] overflow-hidden"
                style={{ borderRadius: "8px" }}
                data-cursor="hover"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="img-cinema absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
