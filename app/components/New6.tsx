"use client";

import React from "react";

export default function New6() {
  return (
    <div className="bg-[#E3E9F0] text-gray-900 font-sans">
      {/* Hero area */}
      <div className="relative max-w-7xl mx-auto px-8 pt-20">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-7  max-w-2xl">
            <h1 className="text-5xl  text-black font-semibold">
              AI Assistant Fills Knowledge Gaps During Research By
            </h1>
            <p
              style={{ fontFamily: "InstrumentSerif" }}
              className=" text-5xl text-[#004BF6] italic mt-2"
            >
              Summarizing Evidence, Generating Protocol Drafts.
            </p>
          </div>

          {/* Right decorative area */}
          <div className="col-span-12 lg:col-span-5 relative h-64">
            {/* soft floating key 1 */}
            {/* Get the App + QR */}
            <div className="md:col-span-3">
              <h6 className="font-semibold mb3  text-xl">Get the App</h6>
              <div className="flex gap-4 items-start">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.verahealth.ai/home`}
                  alt="QR code to get the app or visit Vera Health"
                  className="w-36 h-36 rounded-2xl bg-white  p-2 "
                />
                <div className="flex  gap-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-3 py-2 border rounded-full text-sm font-medium hover:shadow border-[#004BF6]"
                    aria-label="Download on the App Store (placeholder)"
                  >
                    {/* App Store button placeholder */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="18" height="18" rx="3" fill="#004BF6" />
                    </svg>
                    <span className="text-[#004BF6]">App Store</span>
                  </a>

                  <a
                    href="#"
                    className=" inline-flex items-center gap-2 px-3 py-2 border rounded-full text-sm font-medium hover:shadow border-[#004BF6]"
                    aria-label="Get it on Google Play (placeholder)"
                  >
                    {/* Play Store button placeholder */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="18" height="18" rx="3" fill="#004BF6" />
                    </svg>
                    <span className="text-[#004BF6]">Google Play</span>
                  </a>
                </div>
              </div>

              <p className="mt-3 text-xl text-gray-500">
                Scan the QR or visit our website to download the mobile app.
              </p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-20 border-t border-gray-300/20"></div>

        {/* Footer */}
        <footer className="mt-10 pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Logo / Brand */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1821084684736233472/sF41xOfD_400x400.jpg"
                    alt=""
                  />

                  <h1 className="text-2xl">Vera Health</h1>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-4">
                <h6 className="font-semibold mb-3">Navigation</h6>
                <div className=" flex flex-col  gap-2 text-sm text-gray-700">
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

              <div className="mt-6">
                <h6 className="font-semibold mb-2">Legal</h6>
                <ul className="text-sm text-gray-600 space-y-1">
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
                <h6 className="font-semibold mb-3">Social</h6>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/vera-health-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Vera Health on LinkedIn"
                      className="inline-flex items-center gap-2 text-sm hover:underline"
                    >
                      {/* LinkedIn SVG */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="3"
                          stroke="#1F2937"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M7.5 11.5V17"
                          stroke="#1F2937"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7.5 9.5H7.52"
                          stroke="#1F2937"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 17v-4a1.5 1.5 0 0 1 3 0v4"
                          stroke="#1F2937"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                      LinkedIn
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="http://x.com/vera_health_ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Vera Health on X (Twitter)"
                      className="inline-flex items-center gap-2 text-sm hover:underline"
                    >
                      {/* X/Twitter SVG */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6.5c-.5.25-1 .4-1.5.5.55-.35.95-.9 1.15-1.6-.55.35-1.2.6-1.9.75C17.9 5 17 4.5 16 4.5c-1.7 0-3 1.35-3 3v.35C10.5 8 8.3 7 6.8 5.3c-.6 1-.2 2.2.9 2.8-.45 0-.9-.15-1.3-.35v.05c0 1.45 1 2.7 2.4 3-.45.15-.95.15-1.45.05.4 1.2 1.55 2 2.9 2.03C9.5 15 8.2 15.5 6.8 15.5c-.4 0-.8 0-1.2-.1C6 16.6 7.3 17.5 8.8 17.5c5.6 0 8.7-4.7 8.7-8.8v-.4c.6-.45 1.05-1 1.45-1.6-.5.25-1.05.4-1.6.45z"
                          stroke="#1F2937"
                          strokeWidth="0.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      X
                    </a>
                  </div>

              
                </div>

              </div>
            </div>

            {/* Small print / credits row */}
            <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div>Gradient</div>
              <div>
                <a
                  href="https://www.verahealth.ai/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  https://www.verahealth.ai/home
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span>© 2025 Veracity-Health, Inc.</span>
                <span className="text-gray-400">•</span>
                <a
                  href="https://www.linkedin.com/company/vera-health-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="http://x.com/vera_health_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Top-right floating blue CTA (mimic screenshot) */}
    </div>
  );
}
