"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return;

    document.body.classList.add("cursor-hidden");

    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      if (el) {
        el.style.left = `${pos.current.x}px`;
        el.style.top = `${pos.current.y}px`;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    const targets =
      "a, button, [data-cursor='hover'], input, textarea, select, label";
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest(targets)) {
        el?.style.setProperty("transform", "translate(-50%,-50%) scale(2.5)");
      }
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest(targets)) {
        el?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.body.classList.remove("cursor-hidden");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-root hidden md:block"
      aria-hidden
    />
  );
}
