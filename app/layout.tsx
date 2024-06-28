import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/ui/Navbar";

const montserrat = Inter({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Repik - Bring Old Your Photos to Life",
  description: "Using AI to enhance your old and blurry photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-montserrat">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
