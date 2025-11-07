import React from "react";
import Image from "next/image";

/**
 * HeroSection
 * Pixel-focused recreation of the "Aside" landing hero (Next.js + TailwindCSS)
 *
 * Usage:
 * 1. Copy the hero screenshot to `public/images/hero-screenshot.png`.
 * 2. Drop this component in `components/HeroSection.jsx` and import it in a page.
 * 3. Make sure Tailwind is configured (see notes below for backdrop blur support).
 *
 */
export default function HeroSection() {
  return (
    <header
      style={
        {
          // backgroundImage: "url('/bg1.png')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }
      }
      className=" text-black  "
    >
      {/* NAV */}
      <div className=" flex items-center justify-between ">
        <div className="flex items-center w-[40%]">
          {/* simple brand mark */}
          <img
            className="w-14 h-14 "
            src="https://pbs.twimg.com/profile_images/1821084684736233472/sF41xOfD_400x400.jpg"
            alt=""
          />
          <span className="font-semibold text-2xl">Vera Health</span>
        </div>

        {/* center nav (kept minimal so layout matches) */}
        <nav className="hidden md:flex gap-8 items-center text-gray-300  w-[60%]  ">
          <a className="px-8 py-2 rounded-full bg-[#004BF6] text-white">
            Signup
          </a>
          <a className=" text-gray-500">Pricing</a>
          <a className=" text-gray-500">Discover</a>

          <a className="px-8 py-2 rounded-full bg-gray-200 text-gray-500">
            Login
          </a>
        </nav>
      </div>

      {/* HERO */}
      <div className=" flex w-full   justify-center items-center">
        <div className=" flex w-full border  border-gray-200 ">
          <div className="w-[60%]  p-10 border-r  border-gray-200 ">
            <h1
              style={{ fontFamily: "InstrumentSerif" }}
              className="text-7xl  max-w-3xl  leading-tight text-start  "
            >
              Find the answer Practice with confidence
            </h1>
          </div>

          <div className="w-[40%]  px-20 py-5">
            <p className="mt-6 text-black max-w-2xl mx-auto text-start text-2xl ">
              Improve patient outcomes with practical answers backed by 60M+
              peer-reviewed and up-to-date papers and guidelines.{" "}
              <span className="text-gray-400">
                Delivered at the speed of AI.
              </span>
            </p>

            <div className="w-[15vw] mt-5 hover:bg-[#004BF6] hover:text-white px-2 py-5 text-2xl text-[#004BF6] rounded-full border border-[#004BF6] flex justify-center items-center">
              Let's Talk To Vera
            </div>
          </div>
        </div>
      </div>

      {/* Mock mac window / screenshot with centered pill controls */}
      <div className=" mt-10   ">
        <div className="relative rounded-md overflow-hidden  flex  justify-center items-center w-full ">
          {/* background screenshot: put the screenshot file at public/images/hero-screenshot.png */}
          <div className="h-72 md:h-[58vh] w-[95vw] object-contain rounded-4xl overflow-hidden">
            <div
              className="w-full h-full "
              style={{ backgroundImage: `url('./bg3.png')` }}
            />
          </div>

          {/* floating pill (center) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[55vw] bg-white h-[40vh] rounded-xl"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
