"use client";

import { marqueeImages } from "@/lib/siteData";

export default function ImageMarquee() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-ink border-t border-border-dark">
      <div className="mx-auto max-w-container px-6 md:px-10 mb-12 flex items-end justify-between flex-wrap gap-4">
        <p className="label-upper text-cool-slate">— Moments From The Property</p>
        <p className="text-mid-slate max-w-sm text-sm body-sm">
          Interiors, dining, and surroundings at Hotel Parth.
        </p>
      </div>
      <div className="flex marquee-track gap-5 md:gap-6 w-max">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="group relative shrink-0 overflow-hidden"
            style={{
              aspectRatio: "5 / 7",
              width: "clamp(220px, 26vw, 360px)",
              borderRadius: "8px",
            }}
            data-cursor="hover"
          >
            <img
              src={src}
              alt="Hotel Parth"
              loading="lazy"
              className="img-cinema h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
