import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper text-near-black font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
