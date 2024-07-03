import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/ui/Navbar";

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
    <html lang="en" className="font-montserrat">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
