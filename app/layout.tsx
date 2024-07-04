import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/ui/Navbar";
import HeaderGradient from "@/app/ui/HeaderGradient";
import Footer from "@/app/ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Repik - Bring Your Old Photos to Life",
  description: "Using AI to enhance your old and blurry photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dancingScript.variable} relative font-montserrat text-slate-950`}
      >
        <HeaderGradient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
