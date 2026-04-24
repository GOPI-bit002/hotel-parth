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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const labelCls = "mono-tag-sm text-muted-slate block mb-2";

  return (
    <section
      id="book"
      className="relative bg-paper text-deep-dark py-24 md:py-32 px-6 md:px-10 border-t border-gray-lightest"
    >
      <div className="mx-auto max-w-container grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="mono-tag text-muted-slate">03 — Enquire</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="display mt-4 text-deep-dark"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Make a booking enquiry.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-near-black body-lg mt-6 max-w-md">
              Share a few details and our front desk will confirm availability
              and curate your stay.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 card-22 p-6 md:p-8">
              <p className="mono-tag-sm text-muted-slate">Direct Line</p>
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                className="block display text-3xl md:text-4xl mt-3 text-deep-dark hover:text-blue transition-colors"
                data-cursor="hover"
              >
                {siteInfo.phone}
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="block mt-4 text-near-black hover:text-blue transition-colors"
                data-cursor="hover"
              >
                {siteInfo.email}
              </a>
              <p className="mt-6 mono-tag-sm text-muted-slate">
                {siteInfo.location}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="card-22 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
            >
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
                  className="input-cohere"
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
                  className="input-cohere"
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
                  className="input-cohere"
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
                  className="input-cohere"
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
                  className="input-cohere"
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
                  className="input-cohere"
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
                  className="input-cohere"
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
                  className="input-cohere resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-4 flex flex-wrap gap-3 items-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-solid group disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Booking Enquiry"}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                  />
                </button>
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                  className="btn-outline"
                >
                  <Phone size={14} />
                  Call Hotel
                </a>
              </div>
            </form>
          </Reveal>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 card-22 p-6 bg-deep-dark text-paper"
                role="status"
                aria-live="polite"
              >
                <p className="mono-tag-sm text-paper/60 mb-2">Thank you</p>
                <p className="text-paper body-lg">
                  Your enquiry has been received. Our team will respond within
                  24 hours.
                </p>
              </motion.div>
            )}
            {status === "error" && error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 card-22 p-6 border-border-cool"
                role="alert"
              >
                <p className="mono-tag-sm text-muted-slate mb-2">Error</p>
                <p className="text-deep-dark">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
