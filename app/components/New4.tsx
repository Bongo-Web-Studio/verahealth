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
              <span className="text-[#99A1AF] ml-2">
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
                className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                aria-hidden={!false}
              >
                {/* <span className="inline-block text-xl font-medium text-[#004BF6] mb-1">
                  {p.role}
                </span> */}
                <h3
                  id={`person-${p.id}-name`}
                  className="text-white text-4xl font-semibold leading-snug"
                >
                  {p.name}
                </h3>
                <p className="text-2xl text-gray-300 whitespace-pre-line mt-2">
                  {p.title}
                </p>

             
              </div>

         
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
