import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticktsphr | AI-Powered Ticket Management Platform",
  description: "Predict. Route. Resolve. AI-powered ticket classification, routing, knowledge management and executive support analytics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
