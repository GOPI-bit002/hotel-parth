"use client";

import { marqueeImages } from "@/lib/siteData";

function radiusFor(i: number): string {
  const mod = i % 3;
  if (mod === 0) return "100px 0 0 0"; // top-left
  if (mod === 1) return "0 100px 0 40px"; // top-right + bottom-left
  return "40px"; // fully rounded
}

export default function ImageMarquee() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-paper">
      <div className="flex marquee-track gap-6 md:gap-8 w-max">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="group relative shrink-0 overflow-hidden"
            style={{
              aspectRatio: "5 / 7",
              width: "clamp(220px, 26vw, 380px)",
              borderRadius: radiusFor(i),
            }}
            data-cursor="hover"
          >
            <img
              src={src}
              alt="Hotel Parth editorial"
              loading="lazy"
              className="img-editorial h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
