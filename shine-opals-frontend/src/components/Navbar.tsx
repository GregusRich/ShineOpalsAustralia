"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="relative w-full flex justify-between items-center px-6 py-8 bg-white shadow-md tracking-wide uppercase z-50">
      <div className="flex gap-4 text-lg font-[var(--font-playfair)] font-light">
        {/* Shop with Hover Slide-Out Menu */}
        <div
          className="relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <button className="text-lg font-light">Shop</button> {/* ✅ Explicitly set to "light" */}

          {/* Slide-in Menu */}
            <div
              className={`absolute left-0 top-full mt-2 w-[600px] h-[400px] bg-white shadow-lg flex transition-transform duration-800 z-50 ${
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
                src="/menu-image.jpg"
                alt="Shop Preview"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Other Links - ✅ Explicitly Set to Light Font Weight */}
        <Link href="/about" className="text-lg font-light">About Us</Link>
        <Link href="/contact" className="text-lg font-light">Contact</Link>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image src="/logo.png" alt="Shine Opals Logo" width={200} height={66} />
        </Link>
      </div>

      {/* Right Side (Search, Account, Cart) - ✅ Explicitly Set to Light Font Weight */}
      <div className="flex gap-4 text-lg font-[var(--font-playfair)] font-light">
        <Link href="/search" className="font-light">Search</Link>
        <Link href="/account" className="font-light">Account</Link>
        <Link href="/cart" className="font-light">Cart</Link>
      </div>
    </nav>
  );
}
