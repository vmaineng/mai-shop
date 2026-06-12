"use client";

import { useState } from "react";

export default function Navbar() {
  const NAV_ITEMS = ["Home", "Shop", "Cart", "Contact"];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
      <div className="bg-transparent text-md text-(--text-secondary)">
        Shoppeee
      </div>
      <div className=" md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <div
            key={item}
            className="relative text-sm text-(--text-secondary) transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}
