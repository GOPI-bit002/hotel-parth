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
      className="relative min-h-[90vh] w-full overflow-hidden bg-ink text-paper"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" aria-hidden />

      <div className="relative z-10 flex min-h-[90vh] flex-col">
        <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
          <div className="w-full max-w-[1600px] text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="metadata text-paper/70 mb-8"
            >
              Himachal Pradesh · Est. Hospitality
            </motion.p>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="headline text-paper"
              style={{ fontSize: "clamp(3.5rem, 12vw, 16rem)" }}
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
              className="mt-8 text-paper/80 text-lg md:text-2xl max-w-2xl mx-auto"
            >
              {siteInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.0 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-3 bg-paper text-ink px-7 py-4 rounded-full text-sm font-medium hover:bg-paper/90 transition-all duration-500 ease-editorial"
              >
                Book Enquiry
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                />
              </a>
              <a
                href="#stay"
                className="group inline-flex items-center gap-3 border border-paper/40 text-paper px-7 py-4 rounded-full text-sm font-medium hover:bg-paper hover:text-ink transition-all duration-500 ease-editorial"
              >
                View Rooms
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 1.3 }}
          className="w-full border-t border-paper/20"
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
            <span className="metadata text-paper/70">Location · Hamirpur</span>
            <span className="metadata text-paper/70">Boutique Stay</span>
            <span className="metadata text-paper/70">Open All Year</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
