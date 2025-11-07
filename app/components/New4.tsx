"use client";
import React from "react";

// TailwindCSS required
// Drop this component into a React app (Next/CRA/Vite) that already uses Tailwind.

const PEOPLE = [
  {
    id: 1,
    role: "Featured Advisor",
    name: "Scott M. Silvers, MD",
    title:
      "Prev. Chair, Emergency Medicine, Mayo Clinic\nPrev. CMO, Knowledge Management, Optum Health",
    img: "https://framerusercontent.com/images/Wrcp1dnwZGkTnhvozgbB5KmcqSg.jpg?scale-down-to=1024&width=4096&height=2304",
  },
  {
    id: 2,
    role: "Featured Advisor",
    name: "Bernard P. Chang, MD, PhD",
    title:
      "Associate Dean, Columbia University\nVice Chair, Emergency Medicine, NewYork-Presbyterian",
    img: "https://framerusercontent.com/images/9K0EiDtpbYkfTAdWvOqeE75L9T8.jpg?scale-down-to=1024&width=4033&height=2269",
  },
  {
    id: 3,
    role: "Featured Advisor",
    name: "Christopher W. Baugh, MD, MBA",
    title:
      "Prev. Vice Chair, Emergency Medicine, Brigham and Women's Hospital\nAssociate Professor, Harvard Medical School",
    img: "https://framerusercontent.com/images/hLDdDwttJoxo2gYVLPgJScDnsQ.jpeg?scale-down-to=1024&width=1600&height=900",
  },
];

export default function RealTimeTranscription() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-white ">
      <div className=" w-full">
        <div className=" flex w-full border  border-gray-200 ">
          <div className="w-[60%]  p-10 border-r  border-gray-200 ">
            <h1
              style={{ fontFamily: "InstrumentSerif" }}
              className="text-7xl  max-w-3xl  leading-tight text-start  "
            >
              Built with clinicians, for clinicians
            </h1>
          </div>

          <div className="w-[40%]  px-20 py-5">
            <p className="mt-6 text-black max-w-2xl mx-auto text-start text-2xl ">
              Vera is built and refined alongside practicing doctors, advanced
              practitioners and healthcare professionals to deliver actionable
              <span className="text-gray-400">
                answers at the point of care.
              </span>
            </p>

            <div className="w-[15vw] mt-5 hover:bg-[#004BF6] hover:text-white px-2 py-5 text-2xl text-[#004BF6] rounded-full border border-[#004BF6] flex justify-center items-center">
              Meet our full team
            </div>
          </div>
        </div>
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold"></h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto"></p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-15 py-5">
          {PEOPLE.map((p) => (
            <article
              key={p.id}
              className="relative overflow-hidden rounded-xl shadow-lg group bg-gray-50"
              aria-labelledby={`person-${p.id}-name`}
            >
              {/* image */}
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[50vh] object-cover block rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />

              {/* subtle border/inner panel to mimic screenshot */}
              <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-black/5"></div>

              {/* Hover overlay that reveals details */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                aria-hidden={!false}
              >
                <span className="inline-block text-xs font-medium text-amber-300 mb-1">
                  {p.role}
                </span>
                <h3
                  id={`person-${p.id}-name`}
                  className="text-white text-lg font-semibold leading-snug"
                >
                  {p.name}
                </h3>
                <p className="text-sm text-gray-200 whitespace-pre-line mt-2">
                  {p.title}
                </p>

                {/* Icons / actions */}
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-full px-3 py-2 text-sm text-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    {/* info icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0zm-9-1a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v3zm1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Details
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-full px-3 py-2 text-sm text-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    {/* external/link icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14L21 3" />
                      <path d="M21 21H3V3" />
                    </svg>
                    View profile
                  </a>
                </div>
              </div>

              {/* Small persistent caption at bottom like screenshot */}
              <div className="absolute left-4 bottom-4 right-4 sm:left-6 sm:right-6">
                <div className="backdrop-blur-sm bg-white rounded-md px-5 py-5 hidden group-hover:hidden sm:flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-600">{p.role}</p>
                  </div>
                  <div className="text-xs text-gray-700">
                    Meet the full team →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
