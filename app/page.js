import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter-sans)]">
      <Navbar />
      <Hero/>
      <FeaturedCars/>
    </div>
  );
}
