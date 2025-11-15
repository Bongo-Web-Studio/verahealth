"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";

// Tailwind required

const PEOPLE = [
  {
    id: 1,
    role: "Featured Advisor",
    name: "Scott M. Silvers, MD",
    title:
      "Prev. Chair, Emergency Medicine, Mayo Clinic\nPrev. CMO, Knowledge Management, Optum Health",
    img: "./p3.jpg",
  },
  {
    id: 2,
    role: "Featured Advisor",
    name: "Bernard P. Chang, MD, PhD",
    title:
      "Associate Dean, Columbia University\nVice Chair, Emergency Medicine, NewYork-Presbyterian",
    img: "./p4.png",
  },
  {
    id: 3,
    role: "Featured Advisor",
    name: "Christopher W. Baugh, MD, MBA",
    title:
      "Prev. Vice Chair, Emergency Medicine, Brigham and Women's Hospital\nAssociate Professor, Harvard Medical School",
    img: "./p1.png",
  },
];

export default function RealTimeTranscription() {
  // Controls for the liquid-fill animation
  const fillControls = useAnimation();

  const onHoverStart = () => {
    fillControls.start({ width: "100%", transition: { duration: 0.45, ease: "easeOut" } });
  };

  const onHoverEnd = () => {
    fillControls.start({ width: "0%", transition: { duration: 0.45, ease: "easeOut" } });
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-white">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row w-full border border-gray-200">
          <div className="w-full lg:w-3/5 p-5 lg:p-10 border-r border-gray-200">
            <h1 style={{ fontFamily: "InstrumentSerif" }} className=" text-4xl  lg:text-7xl  lg:max-w-3xl leading-tight text-start">
              Built with clinicians, for clinicians
            </h1>
          </div>

          <div className=" w-full lg:w-2/5 lg:px-20 lg:py-5 p-4  border-t border-gray-200">
            <p className="lg:mt-6 text-black max-w-2xl mx-auto text-start text-lg lg:text-2xl">
              Vera is built and refined alongside practicing doctors, advanced practitioners and healthcare professionals to deliver actionable
              <span className="text-[#99A1AF] ml-2">answers at the point of care.</span>
            </p>

            {/* make this wrapper relative so absolute children are positioned to it */}
            <div className="relative inline-block mt-5">
              {/* the visible button (handles hover) */}
              <div
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="relative z-20 cursor-pointer px-6 py-3 text-2xl text-[#004BF6] rounded-full border border-[#004BF6] flex items-center justify-center overflow-hidden hover:text-white"
              >
                {/* base text (blue by default) */}
                <span className="relative z-20">Meet our full team</span>

                {/* background fill animated by Framer Motion (positioned behind text) */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={fillControls}
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ backgroundColor: "#004BF6", zIndex: 10 }}
                />
                {/* clipped white text that only shows where the fill is */}
                <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center pointer-events-none" style={{ zIndex: 30 }}>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={fillControls}
                    className="h-full overflow-hidden flex items-center justify-center rounded-full"
                    style={{ width: "0%" }}
                  >
                 
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="lg:mb-8 text-center">
          <h2 className="text-3xl font-semibold"></h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto"></p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 lg:gap-6 lg:px-6 lg:py-5 p-3">
          {PEOPLE.map((p) => (
            <article key={p.id} className="relative overflow-hidden rounded-xl shadow-lg group bg-gray-50" aria-labelledby={`person-${p.id}-name`}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[30vh] lg:h-[50vh] object-cover block rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />

              <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-black/5" />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                aria-hidden={false}
              >
                <h3 id={`person-${p.id}-name`} className="text-white  text-2xl lg:text-3xl font-semibold leading-snug">
                  {p.name}
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 whitespace-pre-line mt-2">{p.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
