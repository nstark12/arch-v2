import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import PreventionSpotlight from "./components/PreventionSpotlight";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSlider";
import MissionHistory from "./components/MissionHistory";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <main
        id="main"
        className="max-w-6xl mx-auto px-4 py-10 space-y-16"
        role="main"
      >
        <Pillars />
        <PreventionSpotlight />
        <MissionHistory />
        <Impact />
        <TestimonialSlider />
      </main>

      <Footer />

      {/* Floating Donate (high contrast) */}
      <Link
        href="https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
        className="fixed bottom-5 right-5 bg-secondary text-black font-semibold px-4 py-3 rounded-full shadow-soft hover:brightness-95"
        aria-label="Donate"
        target="blank"
      >
        Donate
      </Link>
    </>
  );
}
