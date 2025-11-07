import React from 'react'

export default function New7() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Aside gives <em className="italic">live suggestion</em> during the call.
          </h1>
          <p className="mt-2 text-gray-300">Answer with confidence every time.</p>
        </header>

        {/* Video / hero section */}
        <section className="relative bg-gradient-to-b from-[#111214] via-[#1b1d1f] to-[#111214] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="relative mx-auto max-w-3xl">
              {/* Video mockup */}
              <div className="relative rounded-xl overflow-hidden" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'}}>
                <img src="/mnt/data/5cfd0734-ac8b-4ca1-9a26-c1bc986df46f.png" alt="hero" className="w-full object-cover h-56 md:h-72 opacity-95" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-40 rounded-full p-4 flex items-center justify-center">
                    {/* Play icon */}
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Two pill buttons under video */}
              <div className="mt-4 flex items-center gap-3 justify-center">
                <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-100 border border-gray-700 text-sm">How can I answer?</button>
                <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-100 border border-gray-700 text-sm">Follow-up question</button>
              </div>

              {/* small avatar bubble at bottom-right of video */}
              <div className="absolute right-4 bottom-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0fa878] to-[#0b8f6a] flex items-center justify-center shadow-lg">
                  <img src="/mnt/data/5cfd0734-ac8b-4ca1-9a26-c1bc986df46f.png" alt="avatar" className="w-14 h-14 rounded-md object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative band below hero showing intro text */}
          <div className="bg-gradient-to-b from-transparent to-[#060606]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left large card */}
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-lg font-semibold">Cheatsheet for instant answers</h3>
                <p className="mt-2 text-gray-300 text-sm">Preload answers and let Aside surface them the moment a prospect asks.</p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-[#062f1f] to-[#0b462d] rounded-lg p-4 shadow-inner">
                    <div className="text-sm text-gray-200">Q. How to split a merged user back into separate users?</div>
                    <div className="mt-2 text-xs text-gray-300 bg-white bg-opacity-3 p-3 rounded">A. All the properties of the anonymous user are added to User A. If there is a...</div>
                    <div className="mt-3 inline-block text-xs bg-amber-400 text-black px-2 py-1 rounded">FAQ</div>
                  </div>
                </div>
              </div>

              {/* Right large card */}
              <div className="p-6 border-t border-l border-gray-800">
                <h3 className="text-lg font-semibold">Find answer when you don't know</h3>
                <p className="mt-2 text-gray-300 text-sm">Aside searches your docs and past calls within &lt;1s so you never get stuck.</p>

                <div className="mt-6 rounded-lg bg-gradient-to-br from-[#0b2b1f] to-[#08301e] p-4 min-h-[120px]">
                  <div className="opacity-80 text-sm">Prospect is asking about whether SAML SSO is supported. This pertains to enterprise access management.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lower features grid */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0d0d0e] p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold">Spot pain points, suggest follow-ups</h4>
            <p className="mt-2 text-sm text-gray-300">Dig deeper when a pain point comes up. No more calls that end with scattered questions.</p>
          </div>

          <div className="bg-[#0d0d0e] p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold">Talk ratio coaching</h4>
            <p className="mt-2 text-sm text-gray-300">Get real-time nudges to stop oversharing and make space for the prospect.</p>
          </div>
        </section>

      </div>


    </div>
  )
}
