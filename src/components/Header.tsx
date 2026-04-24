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
    <header
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{ mixBlendMode: "difference" }}
    >
      <div
        className={`transition-all duration-500 ease-editorial ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="text-white text-lg md:text-xl lowercase tracking-tight font-medium"
          >
            {siteInfo.logo}
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white text-sm tracking-tight hover:opacity-60 transition-opacity duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
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
            className="fixed inset-0 z-[200] bg-ink md:hidden"
            style={{ mixBlendMode: "normal" }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="text-white lowercase text-lg">
                {siteInfo.logo}
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-6 px-6 mt-12">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-white headline text-5xl"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
