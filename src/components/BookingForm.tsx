"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { siteInfo } from "@/lib/siteData";

type FormState = {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  roomType: "Deluxe Room",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone))
      return "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.checkIn) return "Please select a check-in date.";
    if (!form.checkOut) return "Please select a check-out date.";
    if (new Date(form.checkOut) <= new Date(form.checkIn))
      return "Check-out must be after check-in.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm(initial);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-transparent border-0 border-b border-black/10 focus:border-ink focus:outline-none py-3 text-ink placeholder:text-muted transition-colors duration-300";

  const labelCls = "metadata text-secondary block mb-2";

  return (
    <section
      id="book"
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 hairline-top"
    >
      <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <span className="metadata text-secondary">03 — Enquire</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="headline mt-4 text-ink"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
            >
              Make a booking enquiry.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-secondary mt-6 text-base md:text-lg max-w-md">
              Share a few details and our front desk will confirm availability
              and curate your stay.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 hairline-top pt-8 space-y-3">
              <p className="metadata text-secondary">Direct Line</p>
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                className="block text-xl md:text-2xl text-ink hover:opacity-60 transition-opacity"
                data-cursor="hover"
              >
                {siteInfo.phone}
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="block text-ink hover:opacity-60 transition-opacity"
                data-cursor="hover"
              >
                {siteInfo.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="md:col-span-2">
                <label className={labelCls} htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+91 ..."
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="checkIn">
                  Check-in
                </label>
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  value={form.checkIn}
                  onChange={onChange}
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="checkOut">
                  Check-out
                </label>
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  value={form.checkOut}
                  onChange={onChange}
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="guests">
                  Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={form.guests}
                  onChange={onChange}
                  className={inputCls}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="roomType">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={form.roomType}
                  onChange={onChange}
                  className={inputCls}
                >
                  <option>Deluxe Room</option>
                  <option>Premium Suite</option>
                  <option>Family Room</option>
                  <option>Business Stay</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelCls} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="Tell us about your stay — preferences, occasion, arrival details."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="md:col-span-2 pt-4 flex flex-wrap gap-4 items-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full text-sm font-medium hover:bg-ink/80 transition-all duration-500 ease-editorial disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Booking Enquiry"}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                  />
                </button>
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-3 border border-black/20 px-7 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-paper transition-all duration-500 ease-editorial"
                >
                  <Phone size={16} />
                  Call Hotel
                </a>
              </div>
            </form>
          </Reveal>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 hairline p-5 bg-ink text-paper rounded-none"
              >
                <p className="metadata text-paper/70 mb-1">Thank you</p>
                <p className="text-paper text-lg">
                  Your enquiry has been received. Our team will respond within 24 hours.
                </p>
              </motion.div>
            )}
            {status === "error" && error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 hairline p-5"
              >
                <p className="metadata text-secondary mb-1">Error</p>
                <p className="text-ink">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
