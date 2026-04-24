"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteInfo } from "@/lib/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={`transition-all duration-500 ease-editorial ${
          scrolled
            ? "bg-paper/90 backdrop-blur border-b border-gray-lightest"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-wide items-center justify-between px-6 md:px-10 py-4">
          <a
            href="#top"
            className="flex items-center gap-2 text-deep-dark"
            data-cursor="hover"
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-deep-dark text-paper display text-base"
              aria-hidden
            >
              P
            </span>
            <span className="text-deep-dark text-base md:text-lg tracking-tight">
              Hotel Parth
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-deep-dark text-[15px] hover:text-blue transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a href="#book" className="btn-solid text-sm">
              Book Enquiry
            </a>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden text-deep-dark"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-paper md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-lightest">
              <span className="text-deep-dark text-lg">Hotel Parth</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-deep-dark"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-1 px-6 mt-10">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="display text-5xl text-ink py-3 border-b border-gray-lightest w-full"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="btn-solid mt-8"
              >
                Book Enquiry
              </a>
              <p className="mono-tag-sm text-muted-slate mt-10">
                {siteInfo.location}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
