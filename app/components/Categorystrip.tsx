"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    id: 1,
    label: "Tops",
    count: "42 styles",
    color: "#e8e0d4",
    textColor: "#5c4c38",
    href: "/shop/tops",
  },
  {
    id: 2,
    label: "Bottoms",
    count: "31 styles",
    color: "#d4d8d0",
    textColor: "#3a4238",
    href: "/shop/bottoms",
  },
  {
    id: 3,
    label: "Outerwear",
    count: "18 styles",
    color: "#d8d0c8",
    textColor: "#4a3c30",
    href: "/shop/outerwear",
  },
  {
    id: 4,
    label: "Dresses",
    count: "27 styles",
    color: "#e4dcd0",
    textColor: "#5c4838",
    href: "/shop/dresses",
  },
];

export default function CategoryStrip() {
  return (
    <section className="px-6 sm:px-10 py-20 max-w-7xl mx-auto">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-(--accent-gold)-[var(--accent-gold)] mb-1">
          Browse by
        </p>
        <h2 className="text-2xl font-light text-(--text-primary)">Category</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={cat.href}
            className="group relative flex flex-col overflow-hidden"
            style={{ aspectRatio: "2/3" }}
          >
            {/* <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            /> */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{ background: cat.color }}
            />

            <div className="absolute inset-0 bg-black opacity-0 group:hover:opacity-10 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <div>
                <p className="text-base font-light tracking-wide">
                  {cat.label}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase mt-0.5">
                  {cat.count}
                </p>
              </div>
              <span className="text-xs tracking-widest opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
            <div className="absolute top-4 left-4">
              <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-1 border ">
                Shop
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
