"use client";

import { ArrowUpRight } from "lucide-react";
import { siteInfo } from "@/lib/siteData";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Google Reviews", href: "#" },
];

const footerLinks = [
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Book", href: "#book" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper pt-20 md:pt-28 pb-10 px-6 md:px-10 border-t border-border-dark">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-6">
            <h3
              className="text-paper"
              style={{
                fontSize: "clamp(2.5rem, 9vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                fontWeight: 400,
              }}
            >
              Hotel Parth
            </h3>
            <p className="text-cool-slate mt-6 max-w-md body-std leading-relaxed">
              A refined hotel experience built around comfort, calm, and warm
              hospitality.
            </p>

            <a
              href="#book"
              className="btn-light mt-8 group"
              data-cursor="hover"
            >
              Plan your stay
              <ArrowUpRight
                size={14}
                className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
              />
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="label-upper text-cool-slate mb-5">Navigate</p>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-paper/80 hover:text-paper transition-colors"
                    data-cursor="hover"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label-upper text-cool-slate mb-5">Socials</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-paper/80 hover:text-paper transition-colors"
                    data-cursor="hover"
                  >
                    {s.label}
                    <ArrowUpRight
                      size={12}
                      className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label-upper text-cool-slate mb-5">Contact</p>
            <ul className="space-y-3 text-paper/80">
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
              <li className="text-cool-slate">{siteInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-border-dark flex flex-wrap items-center justify-between gap-4">
          <p className="micro-tag text-mid-slate">
            © 2026 Hotel Parth · Crafted for premium hospitality.
          </p>
          <p className="micro-tag text-mid-slate">Hamirpur · Himachal Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
