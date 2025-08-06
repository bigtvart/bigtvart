import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import CanvasParticle from "./components/canvasParticle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIG TV ART - Creative Agency",
  description: "Creative Ads & Branding for Modern Businesses",
  icons: {
    icon: "/favicon.ico", // ✅ use .ico format here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon links for fallback */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <CanvasParticle />
        {children}
      </body>
    </html>
  );
}
