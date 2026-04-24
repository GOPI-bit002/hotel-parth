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
            ? "bg-ink/70 backdrop-blur-md border-b border-border-dark"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-6 md:px-10 py-4">
          <a
            href="#top"
            className="flex items-center gap-3 text-paper"
            data-cursor="hover"
          >
            <span className="text-paper text-[15px] font-medium tracking-tight">
              Hotel Parth
            </span>
            <span className="micro-tag text-cool-slate hidden sm:inline">
              / Hamirpur
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-paper/80 hover:text-paper text-[15px] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a href="#book" className="btn-light">
              Book Enquiry
            </a>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden text-paper"
          >
            <Menu size={22} />
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
            className="fixed inset-0 z-[200] bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark">
              <span className="text-paper text-[15px]">Hotel Parth</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-paper"
              >
                <X size={22} />
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
                  className="display-lg text-paper py-4 border-b border-border-dark w-full"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="btn-light mt-8"
              >
                Book Enquiry
              </a>
              <p className="micro-tag text-cool-slate mt-10">
                {siteInfo.location}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
