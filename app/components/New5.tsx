import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function New5() {
  const testimonials = [
    {
      quote: "LiveFlow gives us unparalleled access to our financial data.",
      body: "I have already recommended LiveFlow! I love the ability to create a report and not have to touch it again. No one wants to do the manual work. It allows you to have unparalleled access to your data.",
      name: "Emily Manashi",
      role: "Y Combinator",
      org: "nelo",
    },
    {
      quote:
        "LiveFlow is the only product I've found that does consolidation easily.",
      body: "LiveFlow allows Yehuda and Kalshi to consolidate multiple entities without worrying about outdated numbers and having to update their model manually every month.",
      name: "Yehuda Tenenbaum",
      role: "Finance Manager at Kalshi",
      org: "Kalshi",
    },
    {
      quote: "LiveFlow saves us 3 days every month on consolidation.",
      body: "Despite outsourcing to complete Nelo's reporting on time, the consolidation process was taking too long. With the help of LiveFlow, Roberto and his team were able to automatically consolidate Nelo's financials, saving them days per month.",
      name: "Roberto Carroz",
      role: "Head of Finance",
      org: "nelo",
    },
    {
      quote: "LiveFlow gives us unparalleled access to our financial data.",
      body: "I have already recommended LiveFlow! It allows you to have unparalleled access to your data.",
      name: "Emily Manashi",
      role: "Y Combinator",
      org: "nelo",
    },
  ];

  return (
    <section
      style={{
        backgroundImage:
          "url('https://framerusercontent.com/images/EgzPzuHhMrO3uXSAQcQL9HjQxS4.jpg?scale-down-to=2048&width=2400&height=1280')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full text-white py-20 px-8 overflow-hidden rounded-4xl"
    >
      <div className="">
        <div className="flex flex-col">
          {/* Left heading */}
          <div className="mb-10 w-full flex justify-center items-center">
            <h2 className="text-7xl">What People Saying About Vera AI</h2>
          </div>

          {/* Marquee (right-to-left) */}
          <div className="w-full">
            <div
              className="relative overflow-hidden"
              // the .marquee wrapper's :hover will pause the animation
            >
              <div className="marquee">
                <div className="marquee-track">
                  {/* original list */}
                  {testimonials.map((t, i) => (
                    <article
                      key={i}
                      className="marquee-item w-[600px] h-[53vh] bg-[#E5EFF8] text-black rounded-lg border border-white/10 p-9 backdrop-blur-sm"
                    >
                      <div className="flex flex-col justify-center items-start gap-4 h-[30%]">
                        {/* quote icon */}
                        <div className="flex gap-2">
                          <h1 className="bg-[#004BF6] h-4 w-4 rounded-full"></h1>{" "}
                          <h1 className="bg-[#004BF6] h-4 w-4 rounded-full"></h1>
                        </div>
                        <h3 className="text-3xl">{t.quote}</h3>
                      </div>

                      <p className="text-md text-neutral-800 font-semibold h-[50%] flex justify-center items-center">
                        {t.body}
                      </p>

                      <div className="pt-4 border-t border-slate-200/30 flex items-center justify-between h-[20%]">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-white font-medium"></div>
                          <div>
                            <div className="text-xl font-medium text-black">
                              {t.name}
                            </div>
                            <div className="text-xl text-slate-400">
                              {t.role}
                            </div>
                          </div>
                        </div>

                        <div className="text-[#004BF6]">
                          <FiExternalLink size={25} />
                        </div>
                      </div>
                    </article>
                  ))}

                  {/* duplicate list to make the marquee seamless */}
                  {testimonials.map((t, i) => (
                    <article
                      key={`dup-${i}`}
                      className="marquee-item w-[600px] h-[53vh] bg-[#E5EFF8] text-black rounded-lg border border-white/10 p-9 backdrop-blur-sm"
                    >
                      <div className="flex flex-col justify-center items-start gap-4 h-[30%]">
                        <div className="flex gap-2">
                          <h1 className="bg-[#004BF6] h-4 w-4 rounded-full"></h1>{" "}
                          <h1 className="bg-[#004BF6] h-4 w-4 rounded-full"></h1>
                        </div>
                        <h3 className="text-3xl">{t.quote}</h3>
                      </div>

                      <p className="text-md text-neutral-800 font-semibold h-[50%] flex justify-center items-center">
                        {t.body}
                      </p>

                      <div className="pt-4 border-t border-slate-200/30 flex items-center justify-between h-[20%]">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-white font-medium"></div>
                          <div>
                            <div className="text-xl font-medium text-black">
                              {t.name}
                            </div>
                            <div className="text-xl text-slate-400">
                              {t.role}
                            </div>
                          </div>
                        </div>

                        <div className="text-[#004BF6]">
                          <FiExternalLink size={25} />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* helper styles for the marquee animation + hidden scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* marquee styling */
        .marquee {
          width: 100%;
        }

        /* track contains two back-to-back copies of content */
        .marquee-track {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          /* animation: move left (right-to-left) */
          animation: marquee-left 28s linear infinite;
        }

        /* each item in the marquee */
        .marquee-item {
          flex: 0 0 auto;
        }

        /* pause on hover */
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        /* keyframes: translate from 0 to -50% so first copy moves out and second copy enters */
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* small responsive tweak: reduce min-width on smaller screens */
        @media (max-width: 900px) {
          .marquee-item { min-width: 420px; }
        }
        @media (max-width: 480px) {
          .marquee-item { min-width: 320px; }
        }
      `}</style>
    </section>
  );
}
