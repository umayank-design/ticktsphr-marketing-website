import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ticktsphr.com"),

  title: {
    default: "Ticktsphr AI",
    template: "%s | Ticktsphr AI",
  },

  description:
    "AI-powered ticket classification, smart routing, resolution intelligence and executive support analytics.",

  keywords: [
    "AI Ticket Management",
    "IT Service Desk",
    "AI Support Platform",
    "Ticket Classification",
    "Smart Routing",
    "Incident Management",
    "Service Desk AI",
    "Oracle Support",
    "Enterprise Support",
    "Resolution Intelligence",
  ],

  openGraph: {
    title: "Ticktsphr AI",
    description:
      "Predict. Route. Resolve. AI-powered support intelligence platform.",
    url: "https://ticktsphr.com",
    siteName: "Ticktsphr AI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ticktsphr AI",
    description:
      "AI-powered ticket classification and support intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#030712] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}