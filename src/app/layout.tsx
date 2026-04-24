import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

// Variable Inter — one typeface, full weight range
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Parth | Premium Stay in Hamirpur",
  description:
    "Experience refined rooms, warm hospitality, and a peaceful stay at Hotel Parth in Hamirpur, Himachal Pradesh.",
  keywords: [
    "Hotel Parth",
    "Hamirpur hotel",
    "Himachal Pradesh hotel",
    "premium stay Hamirpur",
    "boutique hotel Himachal",
  ],
  openGraph: {
    title: "Hotel Parth | Premium Stay in Hamirpur",
    description:
      "Refined rooms, warm hospitality and a peaceful stay in Hamirpur, Himachal Pradesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink text-paper font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
