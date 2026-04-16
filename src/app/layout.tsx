import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import "./parakh.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PARAKH ITMS | Competency-Based Question Paper Generator",
  description:
    "PARAKH-aligned ITMS for blueprint-driven, multilingual, competency-based question paper generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${libreBaskerville.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
