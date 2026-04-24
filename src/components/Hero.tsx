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
    <section id="top" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Full-bleed cinematic image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/80" />
      </div>

      {/* Top corner metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.4 }}
        className="absolute top-24 md:top-28 left-6 md:left-10 z-10"
      >
        <p className="micro-tag text-paper/70">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-paper mr-2 align-middle" />
          Reel · 01 · Hamirpur
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.5 }}
        className="absolute top-24 md:top-28 right-6 md:right-10 z-10 text-right"
      >
        <p className="micro-tag text-paper/70">Himachal Pradesh</p>
        <p className="micro-tag text-paper/50 mt-1">Est. Hospitality</p>
      </motion.div>

      {/* Headline — bottom-left editorial anchor */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-10 pb-12 md:pb-16">
        <div className="mx-auto max-w-container">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-paper"
            style={{
              fontSize: "clamp(3rem, 11vw, 10.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontWeight: 400,
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-10 grid md:grid-cols-12 gap-6 items-end"
          >
            <p className="md:col-span-6 text-paper/80 body-std text-base md:text-lg max-w-xl">
              {siteInfo.tagline}
            </p>

            <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-3">
              <a href="#book" className="btn-light group">
                Book Enquiry
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                />
              </a>
              <a href="#stay" className="btn-ghost group text-paper">
                View Rooms
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.2 }}
            className="mt-10 pt-6 border-t border-paper/15 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { k: "Location", v: "Hamirpur, H.P." },
              { k: "Category", v: "Boutique Stay" },
              { k: "Rooms", v: "Curated · 24" },
              { k: "Availability", v: "Open All Year" },
            ].map((item) => (
              <div key={item.k}>
                <p className="micro-tag text-paper/50 mb-1.5">{item.k}</p>
                <p className="text-paper text-sm md:text-base">{item.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
