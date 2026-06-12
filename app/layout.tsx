import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    default: "Ticktsphr AI | Predict. Route. Resolve.",
    template: "%s | Ticktsphr AI",
  },

  description:
    "AI-powered ticket classification, smart routing, resolution intelligence and executive visibility for enterprise support teams.",

  keywords: [
    "AI Ticket Management",
    "Ticket Classification",
    "ITSM",
    "Service Desk",
    "Enterprise Support",
    "Helpdesk AI",
    "Incident Management",
    "Oracle Support",
    "Ticket Routing",
    "AI Operations",
  ],

  openGraph: {
    title: "Ticktsphr AI | Predict. Route. Resolve.",
    description:
      "AI-powered ticket classification, smart routing, resolution intelligence and executive visibility.",
    url: "https://ticktsphr.com",
    siteName: "Ticktsphr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ticktsphr AI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ticktsphr AI | Predict. Route. Resolve.",
    description:
      "AI-powered ticket classification, smart routing and resolution intelligence.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}