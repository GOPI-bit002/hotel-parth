"use client";

import { marqueeImages } from "@/lib/siteData";

export default function ImageMarquee() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-paper border-t border-gray-lightest">
      <div className="mx-auto max-w-container px-6 md:px-10 mb-12 flex items-end justify-between flex-wrap gap-4">
        <p className="mono-tag text-muted-slate">— Moments from the property</p>
        <p className="text-muted-slate max-w-sm text-sm md:text-base">
          Interiors, dining, and surroundings at Hotel Parth.
        </p>
      </div>
      <div className="flex marquee-track gap-6 md:gap-8 w-max">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="group relative shrink-0 overflow-hidden card-22"
            style={{
              aspectRatio: "5 / 7",
              width: "clamp(220px, 26vw, 380px)",
              borderRadius: "22px",
            }}
            data-cursor="hover"
          >
            <img
              src={src}
              alt="Hotel Parth"
              loading="lazy"
              className="img-zoom h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
