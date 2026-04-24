"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroBg, siteInfo } from "@/lib/siteData";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const letter = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease },
  },
};

export default function Hero() {
  const title = "Hotel Parth";

  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full bg-paper text-deep-dark"
    >
      <div className="relative z-10 flex min-h-[92vh] flex-col">
        <div className="flex-1 flex items-center justify-center px-6 pt-36 pb-16">
          <div className="w-full max-w-container text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mono-tag text-muted-slate mb-8"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                Himachal Pradesh · Est. Hospitality
              </span>
            </motion.p>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="display text-deep-dark"
              style={{
                fontSize: "clamp(3.25rem, 12vw, 10rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
              aria-label={title}
            >
              {title.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-baseline"
                  aria-hidden
                >
                  <motion.span
                    variants={letter}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.8 }}
              className="mt-8 text-near-black/80 body-lg max-w-xl mx-auto"
            >
              {siteInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.0 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <a href="#book" className="btn-solid group">
                Book Enquiry
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                />
              </a>
              <a href="#stay" className="btn-outline group">
                View Rooms
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Purple band housing a floating product-like image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.2 }}
          className="violet-band relative px-6 md:px-10 pt-16 md:pt-20 pb-24 md:pb-28"
        >
          <div className="mx-auto max-w-container">
            <div className="flex flex-wrap items-end justify-between gap-6 text-paper mb-10">
              <p className="mono-tag text-paper/70">
                A showcase of the property
              </p>
              <p className="mono-tag text-paper/60">Open All Year · Hamirpur</p>
            </div>
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "22px",
                aspectRatio: "16 / 9",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src={heroBg}
                alt="Hotel Parth exterior and rooms"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Metadata row at the base of the purple band */}
          <div className="mx-auto max-w-container mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-paper">
            {[
              { k: "Location", v: "Hamirpur, H.P." },
              { k: "Category", v: "Boutique Stay" },
              { k: "Rooms", v: "Curated · 24" },
              { k: "Availability", v: "Open All Year" },
            ].map((item) => (
              <div
                key={item.k}
                className="border-l border-paper/15 pl-4"
              >
                <p className="mono-tag-sm text-paper/60 mb-2">{item.k}</p>
                <p className="text-paper text-base md:text-lg">{item.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
