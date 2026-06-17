"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const NAV_ITEMS = ["Home", "Shop", "Cart", "Contact"];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 sm:px-8 py-4 flex items-center justify-between sticky">
      <div className="text-sm text-(--text-secondary">Shoppeee</div>
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <div
            key={item}
            className="relative text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors cursor-pointer"
          >
            {item}
          </div>
        ))}

        <button
          onClick={toggleTheme}
          className="text-(--text-secondary) hover:text-(--text-primary) transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="flex md:hidden items-center gap-3">
        <button onClick={toggleTheme} className="text-(--text-secondary)">
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-(--text-secondary)"
        >
          {menuOpen ? (
            <X className="h-5 w w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-15 left-0 right-0 bg-background border-b border-(--card-border) px-6 py-4 flex flex-col gap-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <div
              key={item}
              className="text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
