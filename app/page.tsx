"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryStrip from "./components/Categorystrip";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryStrip />
    </div>
  );
}
