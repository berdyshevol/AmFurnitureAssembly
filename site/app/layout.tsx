import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AM Furniture Assembly | Professional Furniture Assembly in Denton, TX",
  description:
    "Expert furniture assembly service in Denton, TX. We assemble IKEA, Wayfair, Amazon, and all major brands. 30 five-star reviews. Starting at $40. Get a free quote today!",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AM Furniture Assembly",
    images: [
      {
        url: "/photos/IMG_2729.jpeg",
        width: 1200,
        height: 630,
        alt: "AM Furniture Assembly - Professional Furniture Assembly in Denton, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
