"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
<nav className="relative w-full flex justify-between items-center px-6 py-8 bg-white shadow-md font-sans text-lg tracking-wide uppercase">
      {/* Left Side (Navigation Links) */}
      <div className="flex gap-6">
        {/* Shop with Hover Slide-Out Menu */}
        <div
          className="relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <button className="text-lg font-medium">Shop</button>

          {/* Slide-in Menu */}
          <div
            className={`absolute left-0 top-full mt-2 w-[600px] h-[400px] bg-white shadow-lg flex transition-transform duration-300 ${
              shopOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
            }`}
          >
            {/* Left: Categories */}
            <div className="w-1/2 p-6">
              <h2 className="text-2xl font-semibold mb-4">Shop Categories</h2>
              <ul className="space-y-2">
                <li><Link href="/products/necklaces">Necklaces</Link></li>
                <li><Link href="/products/earrings">Earrings</Link></li>
                <li><Link href="/products/bracelets">Bracelets</Link></li>
                <li><Link href="/products/rings">Rings</Link></li>
                <li><Link href="/products/collections">Collections</Link></li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="w-1/2 relative">
              <Image
                src="/menu-image.jpg"  // Replace with your actual image
                alt="Shop Preview"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Other Links */}
        <Link href="/about" className="text-lg font-medium">About Us</Link>
        <Link href="/contact" className="text-lg font-medium">Contact</Link>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image src="/logo.png" alt="Shine Opals Logo" width={150} height={50} />
        </Link>
      </div>

      {/* Right Side (Placeholder for future icons) */}
      <div className="flex gap-4">
        <Link href="/search" className="text-lg">Search</Link>
        <Link href="/account" className="text-lg">Account</Link>
        <Link href="/cart" className="text-lg">Cart</Link>
      </div>
    </nav>
  );
}
