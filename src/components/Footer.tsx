"use client";

import { ArrowUpRight } from "lucide-react";
import { siteInfo } from "@/lib/siteData";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Google Reviews", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative footer-dusk text-paper py-20 md:py-28 px-6 md:px-10">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <h3
              className="display text-paper"
              style={{
                fontSize: "clamp(2.75rem, 9vw, 7.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Hotel Parth
            </h3>
            <p className="text-paper/70 mt-6 max-w-md body-lg leading-relaxed">
              A refined hotel experience built around comfort, calm, and warm
              hospitality.
            </p>

            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-pill bg-paper text-deep-dark px-6 py-3 text-sm font-medium hover:bg-blue hover:text-paper transition-colors duration-500 ease-editorial"
            >
              Plan your stay
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="mono-tag-sm text-paper/50 mb-5">Socials</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-paper/90 hover:text-paper transition-colors"
                    data-cursor="hover"
                  >
                    {s.label}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mono-tag-sm text-paper/50 mb-5">Contact</p>
            <ul className="space-y-3 text-paper/90">
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-paper transition-colors"
                  data-cursor="hover"
                >
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-paper transition-colors"
                  data-cursor="hover"
                >
                  {siteInfo.email}
                </a>
              </li>
              <li className="text-paper/70">{siteInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/10 flex flex-wrap items-center justify-between gap-4">
          <p className="mono-tag-sm text-paper/50">
            © 2026 Hotel Parth. Crafted for premium hospitality.
          </p>
          <p className="mono-tag-sm text-paper/50">Hamirpur · H.P.</p>
        </div>
      </div>
    </footer>
  );
}
