"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YC_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC"; // truncated for brevity

export default function AsideHero() {
  const titleRef = useRef<HTMLElement | null>(null);     // used as ScrollTrigger trigger
  const lettersRef = useRef<HTMLElement | null>(null);   // safe container we mutate
  const tlRef = useRef<any>(null);

  // Text broken into lines so we can preserve <br/> semantics
  const LINES = [
    "Designed for doctors and medical professionals.",
    "Our AI assistant fills knowledge gaps during Research by summarizing evidence,",
    "Generating protocol drafts."
  ];

  useEffect(() => {
    const triggerEl = titleRef.current;
    const container = lettersRef.current;
    if (!triggerEl || !container) return;

    // If already built (StrictMode double mount), skip re-init
    if (container.querySelector(".char")) return;

    // Build per-letter HTML from LINES. Mark last line as muted.
    const mutedColor = getComputedStyle(triggerEl).getPropertyValue("--muted-color") || ""; // fallback
    const buildSpansForLine = (line: string, isMuted = false) =>
      line.split("").map((ch) => {
        if (ch === " ") return `<span class="char" data-color="${isMuted ? "#99A1AF" : ""}" aria-hidden="true">&nbsp;</span>`;
        return `<span class="char" data-color="${isMuted ? "#99A1AF" : ""}" aria-hidden="true">${ch}</span>`;
      }).join("");

    const html = LINES.map((ln, idx) => {
      const isMuted = idx === LINES.length - 1;
      return buildSpansForLine(ln, isMuted) + (idx < LINES.length - 1 ? "<br/>" : "");
    }).join("");

    // Put full text for screen readers on the heading and write spans into safe container
    const fullText = LINES.join("\n");
    triggerEl.setAttribute("aria-label", fullText);
    triggerEl.setAttribute("role", "heading");

    container.innerHTML = html;

    const chars = container.querySelectorAll<HTMLElement>(".char");

    // initial style
    gsap.set(chars, {
      display: "inline-block",
      color: "rgba(0,0,0,0)",
      y: 8,
      willChange: "transform, color",
    });

    // timeline controlled by scroll progress (scrub)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 85%",
        end: "top 30%",
        scrub: 0.6,
        // markers: true, // enable when debugging
      },
    });

    tl.to(chars, {
      color: (i, el) => {
        const dataColor = el.getAttribute("data-color");
        return dataColor && dataColor !== "null" && dataColor !== "" ? dataColor : "#000000";
      },
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: { each: 0.02, from: "start" },
    });

    tlRef.current = tl;

    return () => {
      // cleanup
      try {
        tlRef.current?.scrollTrigger?.kill();
      } catch {}
      try {
        tlRef.current?.kill?.();
      } catch {}
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(chars);
      // optional: clear container to free nodes
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section className=" h-[50vh] lg:h-[70vh] flex flex-col text-black border-b border-gray-200">
      {/* Top small backed-by area */}
      <header className="w-full flex justify-center mt-12">
        <div className="flex items-center gap-3 select-none">
          <span className="  lg:text-2xl font-medium text-black">Backed by</span>
          <img src={YC_BASE64} alt="YC" className="w-7 lg:w-9 h-7 lg:h-9 rounded-sm" />
          <span className="lg:text-2xl ">Combinator</span>
        </div>
      </header>

      {/* Main centered content */}
      <div className="flex-1 flex items-center mt-10">
        <div className="w-full lg:max-w-[50vw]  mx-auto text-center ">
          {/* h1 used as trigger. We keep a screen-reader-only span for accessibility and a safe container for visual spans */}
          <h1
            ref={titleRef as any}
            className="hidden md:flex mx-auto leading-snug text-2xl lg:text-4xl text-black font-semibold pl-5 pr-5  lg:p-0 text-center"
          >
            {/* screen-reader only original text (visually hidden) */}
            <span className="sr-only">
              {LINES.join("\n")}
            </span>

            {/* safe container we mutate with per-letter spans */}
            <span ref={lettersRef as any} aria-hidden="true" />
          </h1>


          <h1 className="md:hidden text-xl  text-black font-semibold p-5">
            Designed for doctors and medical professionals.
Our AI assistant fills knowledge gaps during Research by summarizing evidence,
<span className="text-[#A8AFBB]"> Generating protocol drafts.</span>
          </h1>

          <p className=" mt-10 lg:mt-28 text-[22px] md:text-[30px] font-semibold text-black">
            No more{" "}
            <span
              style={{ fontFamily: "InstrumentSerif" }}
              className="italic font-serif font-normal text-[#004BF6]"
            >
              “ Suffering To Find Research Assistant”.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom spacer to mimic screenshot vertical rhythm */}
      <div className="h-12" />
    </section>
  );
}
