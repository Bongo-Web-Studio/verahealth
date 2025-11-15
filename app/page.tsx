"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your components
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AsideHero from "./components/New2";
import New3 from "./components/New3";
import RealTimeTranscription from "./components/New4";
import New5 from "./components/New5";
import New6 from "./components/New6";
import New7 from "./components/New7";
import New8 from "./components/New8";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Simulate smooth scroll effect
    const ctx = gsap.context(() => {
      gsap.to(container, {
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      {/* Fixed Navbar outside the scroll area */}
      <Navbar />

      {/* Smooth scroll container */}
      <div
        ref={scrollContainerRef}
        id="smooth-scroll"
        className="relative w-full h-full overflow-hidden"
      >
        <HeroSection />
        <AsideHero />
        <New3 />
        <RealTimeTranscription />
        <div className="lg:p-10 p-2">
          <New5 />
        </div>
        <New8 />
        <New7 />
        <New6 />
      </div>
    </>
  );
}
