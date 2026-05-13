import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "Rashaun Heaston — Brand Strategist & Civil Servant",
  description:
    "Detroit-based social media strategist, civil servant, and founder of Royal Roots Organics. Building healthier communities through communication, wellness, and service.",
  keywords: [
    "Rashaun Heaston",
    "Detroit social media consultant",
    "brand strategist Detroit",
    "Detroit wellness brand",
    "Royal Roots Organics",
    "civic communications",
  ],
  openGraph: {
    title: "Rashaun Heaston — Brand Strategist & Civil Servant",
    description:
      "Detroit-based social media strategist, civil servant, and founder of Royal Roots Organics.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${GeistSans.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
