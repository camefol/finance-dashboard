import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LenisRoot from "@/components/lenis-root";
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
  title: "FinSaver Information",
  description: "Contains information about the FinSaver app, what it contains and describes the features and how to use them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisRoot>{children}</LenisRoot>
      </body>
    </html>
  );
}
