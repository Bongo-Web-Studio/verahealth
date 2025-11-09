"use client";

import React from "react";
import { FaApple, FaGooglePlay, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function New6() {
  return (
    <div className="bg-[#E3E9F0] text-gray-900 font-sans min-h-screen">
      {/* Hero area */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-7 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-semibold leading-tight">
              AI Assistant  Knowledge 
            </h1>

            <p
              style={{ fontFamily: "InstrumentSerif, Georgia, serif" }}
              className="mt-3 text-2xl md:text-3xl lg:text-4xl text-[#004BF6] italic"
            >
              Summarizing Evidence, Generating Protocol Drafts.
            </p>

                 {/* Logo / Brand */}
              <div className="md:col-span-3 mt-5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src="https://pbs.twimg.com/profile_images/1821084684736233472/sF41xOfD_400x400.jpg"
                    alt="Vera Health logo"
                  />

                  <h1   style={{ fontFamily: "InstrumentSerif" }} className="text-3xl ">Vera Health</h1>
                </div>
              </div>
          </div>

          {/* Right decorative / App area */}
          <div className="col-span-12 lg:col-span-5 relative flex items-start justify-end">
            <div className="w-full md:w-[380px] lg:w-[720px]">
              <div className="bg-white rounded-lg p-4 md:p-6 ">
                <h6 className="font-semibold mb-3 text-lg lg:text-start text-center ">Get the App</h6>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.verahealth.ai/home`}
                    alt="QR code to get the Vera Health app"
                    className="w-36 h-36 rounded-xl bg-gray-50 p-2 object-cover"
                  />

                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-3 py-2 border rounded-full text-sm font-medium hover:shadow-sm border-[#004BF6]"
                      aria-label="Download on the App Store"
                    >
                      <FaApple className="w-9 h-9 text-[#004BF6]" aria-hidden />
                      <span className="text-[#004BF6]  ">App Store</span>
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-3 py-2 border rounded-full text-sm font-medium hover:shadow-sm border-[#004BF6]"
                      aria-label="Get it on Google Play"
                    >
                      <FaGooglePlay className="w-9 h-9 text-[#004BF6]" aria-hidden />
                      <span className="text-[#004BF6]">Google Play</span>
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-gray-500">
                  Scan the QR or visit our website to download the mobile app.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-12 "></div>

        {/* Footer */}
        <footer className="mt-8 pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
         

              {/* Navigation Links */}
              <div className="md:col-span-4">
                <h6  style={{ fontFamily: "InstrumentSerif" }} className="font-semibold mb-3 text-3xl">Navigation</h6>
                <div className="flex flex-col gap-2 text-xl text-gray-700">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                  <a href="#" className="hover:underline">
                    Get the App
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <h6 style={{ fontFamily: "InstrumentSerif" }} className="font-semibold mb-2 text-3xl">Legal</h6>
                <ul className=" text-gray-600 space-y-1 text-xl">
                  <li>
                    <a href="#" className="hover:underline">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Data Processing Agreement
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social + Gradient bar */}
              <div className="md:col-span-2">
                <h6 style={{ fontFamily: "InstrumentSerif" }}  className="font-semibold mb-3 text-3xl">Social</h6>
                <div className="flex flex-col gap-3 text-xl">
                  <a
                    href="https://www.linkedin.com/company/vera-health-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vera Health on LinkedIn"
                    className="inline-flex items-center gap-2 t hover:underline"
                  >
                    <FaLinkedin className="w-9 h-9 text-[#004BF6] " aria-hidden />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://x.com/vera_health_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vera Health on X"
                    className="inline-flex items-center gap-2  hover:underline"
                  >
                    <FaTwitter className="w-9 h-9 text-[#004BF6]" aria-hidden />
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Small print / credits row */}
            <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 border-t border-[#004BF6]">


              <div className="flex items-center gap-4">
                <span>© 2025 Veracity-Health, Inc.</span>
      
              
              </div>
            </div>
          </div>
        </footer>
      </div>

     
    </div>
  );
}
