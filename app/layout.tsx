import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/ui/Navbar";
import HeaderGradient from "@/app/ui/HeaderGradient";
import Footer from "@/app/ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      <body className={`${montserrat.className} relative text-slate-950`}>
        <HeaderGradient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
