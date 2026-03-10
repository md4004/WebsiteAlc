import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One Glass | Premium Spirits & Fine Wines",
  description:
    "Discover the world's finest spirits. Curated, rare, and delivered to your doorstep with unmatched elegance. Premium whisky, wine, champagne, and cognac.",
  keywords: [
    "premium spirits",
    "fine wines",
    "whisky",
    "champagne",
    "cognac",
    "luxury alcohol",
    "rare bottles",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
