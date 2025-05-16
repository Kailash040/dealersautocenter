import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter-sans)]">
      <Navbar />
      <Hero/>
    </div>
  );
}
