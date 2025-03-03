"use client"; // ✅ Ensures this is a Client Component

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Uses ShadCN buttons
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 uppercase tracking-wide">
        Welcome to Shine Opals Australia
      </h1>
      <p className="text-lg text-gray-600">
        Your go-to place for beautiful opal jewelry!
      </p>

      {/* Link to Products Page */}
      <Link href="/products">
        <Button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg">
          View Products
        </Button>
      </Link>
    </main>
  );
}
