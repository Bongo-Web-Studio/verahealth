import React from "react";

export default function New5() {
  const testimonials = [
    {
      quote:
        "LiveFlow gives us unparalleled access to our financial data.",
      body:
        "I have already recommended LiveFlow! I love the ability to create a report and not have to touch it again. No one wants to do the manual work. It allows you to have unparalleled access to your data.",
      name: "Emily Manashi",
      role: "Y Combinator",
      org: "nelo",
    },
    {
      quote:
        "LiveFlow is the only product I've found that does consolidation easily.",
      body:
        "LiveFlow allows Yehuda and Kalshi to consolidate multiple entities without worrying about outdated numbers and having to update their model manually every month.",
      name: "Yehuda Tenenbaum",
      role: "Finance Manager at Kalshi",
      org: "Kalshi",
    },
    {
      quote: "LiveFlow saves us 3 days every month on consolidation.",
      body:
        "Despite outsourcing to complete Nelo's reporting on time, the consolidation process was taking too long. With the help of LiveFlow, Roberto and his team were able to automatically consolidate Nelo's financials, saving them days per month.",
      name: "Roberto Carroz",
      role: "Head of Finance",
      org: "nelo",
    },
    {
      quote: "LiveFlow gives us unparalleled access to our financial data.",
      body:
        "I have already recommended LiveFlow! It allows you to have unparalleled access to your data.",
      name: "Emily Manashi",
      role: "Y Combinator",
      org: "nelo",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-teal-400 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left heading */}
          <div className="col-span-4">
            <h2 className="text-5xl font-semibold leading-tight">What finance<br/>teams are saying</h2>
          </div>

          {/* Carousel */}
          <div className="col-span-8">
            <div className="-mt-4">
              <div className="flex space-x-6 overflow-x-auto pb-6 px-2 scrollbar-hide">
                {testimonials.map((t, i) => (
                  <article
                    key={i}
                    className="min-w-[420px] bg-white/90 text-slate-900/95 rounded-lg shadow-xl border border-white/10 p-6 backdrop-blur-sm"
                    style={{ boxShadow: '0 10px 30px rgba(3, 37, 76, 0.35)' }}
                  >
                    <div className="flex items-start gap-4">
                      {/* quote icon */}
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-600/10 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7h3v5H5V9c0-1.1.9-2 2-2zM17 7h3v5h-5V9c0-1.1.9-2 2-2z" fill="#0b5fff" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold leading-tight">{t.quote}</h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-700">{t.body}</p>

                    <div className="mt-6 pt-4 border-t border-slate-200/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-300 flex items-center justify-center text-white font-medium">
                          {t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">{t.name}</div>
                          <div className="text-xs text-slate-600">{t.role}</div>
                        </div>
                      </div>

                      <div className="text-sm font-bold text-slate-800 opacity-80">{t.org}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="mt-12 flex items-center justify-center">
              <div className="w-full max-w-4xl bg-blue-900/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-md">
                <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
                  <div className="px-6">
                    <div className="text-4xl font-extrabold">99% <span className="text-green-300 text-lg">↗</span></div>
                    <div className="text-xs text-slate-200/70 mt-2">Customer satisfaction score</div>
                  </div>

                  <div className="px-6">
                    <div className="text-4xl font-extrabold">25hrs <span className="text-green-300 text-lg">↗</span></div>
                    <div className="text-xs text-slate-200/70 mt-2">Hours saved per month on consolidation</div>
                  </div>

                  <div className="px-6">
                    <div className="text-4xl font-extrabold">&lt;30sec <span className="text-green-300 text-lg">↗</span></div>
                    <div className="text-xs text-slate-200/70 mt-2">Median customer support response times</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* small helper styles for hidden scrollbar when using tailwind */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
