import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/Booking";
import Cursor from "@/components/Cursor";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Fardeen — Cybersecurity practitioner & founder",
  description: "Cybersecurity, ISO 27001 and mentorship. I break things. With permission.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <BookingProvider>
          <Cursor />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
