import React from "react";

export default function New6() {
  return (
    <div className="min-h-screen bg-[#e7edf6] text-gray-900 font-sans">
      {/* Hero area */}
      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-40">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Meeting AI that helps during the call, not after.
            </h1>
            <p className="mt-4 text-xl text-gray-500">Try Cluely on your next meeting today.</p>

    
          </div>

          {/* Right decorative area */}
          <div className="col-span-5 relative h-64">
            {/* soft floating key 1 */}
            <div className="absolute right-12 top-6 transform rotate-12 w-32 h-32 rounded-2xl bg-white/80 shadow-[30px_30px_60px_rgba(100,120,150,0.06)] flex items-center justify-center">
              <div className="w-16 h-16 rounded-lg bg-white/90 flex items-center justify-center shadow-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12h12" stroke="#9AA7B8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* neon key (command) */}
            <div className="absolute right-28 top-28 transform -rotate-6 w-28 h-28 rounded-2xl flex items-center justify-center"
                 style={{ filter: 'drop-shadow(0 22px 40px rgba(40,90,180,0.12))' }}>
              <div className="w-20 h-20 rounded-lg bg-[#f3f8ff]/60 flex items-center justify-center" style={{ boxShadow: '0 18px 40px rgba(120,160,220,0.15), inset 0 0 22px rgba(255,255,255,0.6)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12a2 2 0 012-2h6a2 2 0 012 2v0a2 2 0 01-2 2H9a2 2 0 01-2-2z" stroke="#E6F1FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="0.5" fill="#E6F1FF" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-20 border-t border-gray-300/20"></div>

        {/* Footer */}
        <footer className="mt-10 pb-12">
          <div className="max-w-7xl mx-auto px-2">
            <div className="flex items-start gap-12">
              <div className="w-48">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#1F2937" strokeWidth="1.2" />
                    <path d="M8 12h8" stroke="#1F2937" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="font-semibold text-lg">Cluely</span>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-8 flex-1">
                <div>
                  <h6 className="font-semibold mb-3">Use Cases</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Sales</li>
                    <li>Support</li>
                    <li>Consulting</li>
                    <li>Recruiting</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-3">Enterprise</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Cluely for Enterprise</li>
                    <li>Enterprise Guides</li>
                    <li>Security</li>
                    <li>Vendor Profile</li>
                    <li>ROI Calculator</li>
                    <li>Book A Demo</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-3">Resources</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Manifesto</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Bug Bounty</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-3">Support</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Help Center</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-3">Legal</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Data Processing Agreement</li>
                    <li>Subprocessors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Top-right floating blue CTA (mimic screenshot) */}
    
    </div>
  );
}
