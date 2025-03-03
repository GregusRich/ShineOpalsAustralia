"use client"; // ✅ Ensure it's a Client Component

import { Inter } from "next/font"; // ✅ Updated font import
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ Import Navbar

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />  {/* ✅ Navbar added back */}
        {children}
      </body>
    </html>
  );
}
