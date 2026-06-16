import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suramya 1 | Premium Residential Community",
  description:
    "A peaceful and premium residential community located near SG Highway, Shantigram, Gujarat. Modern amenities, spacious surroundings, and a secure environment for families.",
  keywords: [
    "Suramya 1",
    "residential community",
    "SG Highway",
    "Shantigram",
    "Gujarat",
    "premium living",
  ],
  openGraph: {
    title: "Suramya 1 | Premium Residential Community",
    description:
      "A peaceful and premium residential community designed for modern family living surrounded by greenery and comfort.",
    type: "website",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
