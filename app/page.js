import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import AddLoanCalculator from "./components/AddLoanCalculator";
import SellYourCar from "./components/SellYourCar";
import FinalCta from "./components/FinalCta";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter-sans)]">
      <Navbar />
      <Hero/>
      <FeaturedCars/>
      <AddLoanCalculator/>
      <SellYourCar/>
      <FinalCta/>
    </div>
  );
}
