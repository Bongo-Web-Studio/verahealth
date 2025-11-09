"use client"

import React from "react";
import PropTypes from "prop-types";

/**
 * New7
 * Immediately shows the YouTube video (no poster overlay).
 *
 * Props:
 *  - videoId: YouTube video id (default: "Icdg3c2HnN8")
 *  - title: video title (used for iframe title and aria)
 *
 * Notes:
 *  - To enable muted autoplay change the iframe src to include `autoplay=1&mute=1`.
 */
export default function New7({
  videoId = "Icdg3c2HnN8",
  title = "AI for Emergency Medicine? Full Walkthrough of Vera Health",
}) {
  // iframe loaded immediately so video shows directly (no black poster)
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1`;

  return (
    <div className=" bg-white text-black flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className=" text-4xl lg:text-6xl  font-semibold leading-tight">
            How To{" "}
            <em
              style={{ fontFamily: "InstrumentSerif, Georgia, serif" }}
              className="italic text-[#004BF6]"
            >
              Get Started
            </em>{" "}
            <span className="ml-2">With Vera AI</span>
          </h1>
          <p className="mt-2 text-gray-500">Answer with confidence every time.</p>
        </header>

        {/* Video / hero section */}
        <section className="relative bg-[#E2E7EF] rounded-2xl  overflow-hidden">
          <div className="p-1">
            <div className="relative ">
              {/* Responsive 16:9 container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg" aria-label={title}>
                {/* aspect ratio box: 56.25% => 16:9 */}
                <div style={{ paddingTop: "56.25%" }} className="relative w-full">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={iframeSrc}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

New7.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
};
