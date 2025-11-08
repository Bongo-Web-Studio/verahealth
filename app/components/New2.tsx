import React from "react";

/**
 * AsideHero
 * Pixel-focused recreation of the provided screenshot (centered hero section)
 * - Tailwind CSS required
 * - Drop this file into your components folder and import into a page (Next.js or CRA)
 * - If you want to use the screenshot asset provided (/mnt/data/Screenshot 2025-11-07 155246.png),
 *   replace the `YC_BASE64` or the `heroBackground` with the image import.
 *
 * Usage:
 *  <AsideHero />
 *
 * Notes:
 *  - This component focuses on layout, spacing, typographic scale and colors to match the screenshot.
 *  - It intentionally uses Tailwind utility classes for exact placement. Do not change layout if you want pixel match.
 */

const YC_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC";

export default function AsideHero() {
  return (
    <section className="min-h-[70vh] flex flex-col  text-black  border-b border-gray-200">
      {/* Top small backed-by area */}
      <header className="w-full flex justify-center mt-12">
        <div className="flex items-center gap-3 select-none">
          <span className="text-2xl font-medium text-black">Backed by</span>
          <img src={YC_BASE64} alt="YC" className="w-9 h-9 rounded-sm" />
          <span className="text-2xl ">Combinator</span>
        </div>
      </header>

      {/* Main centered content */}
      <div className="flex-1 flex items-center mt-10">
        <div className="w-full max-w-3xl mx-auto  text-center ">
          <h1 className="mx-auto leading-snug text-4xl   text-black font-semibold">
            Designed for doctors and medical professionals.
            <br />
            Our AI assistant fills knowledge gaps during Research by summarizing
            evidence,
            <br /> 
            <span className="text-[#99A1AF]">Generating protocol drafts.</span>
          </h1>

          <p className="mt-28 text-[22px] md:text-[30px] font-semibold text-black  ">
            No more{" "}
            <span style={{fontFamily:"InstrumentSerif"}} className="italic font-serif font-normal  text-[#004BF6]">
              “ suffering to find research assistant”.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom spacer to mimic screenshot vertical rhythm */}
      <div className="h-12" />
    </section>
  );
}
