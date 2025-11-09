"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

const SAMPLE = [
  {
    id: "1",
    title: "MD, Endocrinology",
    subtitle:
      "Does semaglutide lower major cardiovascular events in T2D patients without established ASCVD?",
  },
  {
    id: "2",
    title: "DO, Family Medicine",
    subtitle:
      "Which adult vaccines are recommended for a patient with COPD who smokes?",
  },
  {
    id: "3",
    title: "MD, Oncology",
    subtitle:
      "What baseline labs are needed before starting pembrolizumab for metastatic NSCLC?",
  },
  {
    id: "4",
    title: "MD, Emergency Medicine",
    subtitle:
      "Is there any reason not to start combination therapy in stage 2 hypertension?",
  },
  {
    id: "5",
    title: "MD, Gastro",
    subtitle:
      "In a patient with chronic diarrhea (> 4 wks) and no alarm features, what initial diagnostic work-up is recommended?",
  },
  {
    id: "6",
    title: "MD, Internal Medicine",
    subtitle:
      "In a patient with type 2 diabetes and BP 145/92 on lisinopril 20 mg, should I add a thiazide or a CCB?",
  },
];

export default function AppleStyleSwiper({
  items = SAMPLE,
}: {
  items?: typeof SAMPLE;
}) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="bg-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <h2 className=" text-2xl lg:text-3xl font-semibold mb-7 text-neutral-800">
            What your peers are asking
          </h2>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex gap-4">
            <button
              onClick={goPrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition text-neutral-600"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              onClick={goNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition text-neutral-600"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* SWIPER */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(sw: SwiperClass) => (swiperRef.current = sw)}
            onSlideChange={(sw: SwiperClass) => setActiveIndex(sw.activeIndex)}
            slidesPerView={"auto"}
            spaceBetween={6}
            centeredSlides={false}
            className="py-6"
          >
            {items.map((it, idx) => (
              <SwiperSlide
                key={`slide-${it.id}-${idx}`}
                className="w-[82vw]! lg:w-[30vw]! h-[25vh]! lg:h-[30vh]! bg-gray-100 rounded-2xl overflow-hidden flex justify-center items-center"
              >
                <article className="relative w-full h-full rounded-2xl border border-transparent overflow-hidden transition-all duration-500 ease-out">
                  <div className=" p-4 lg:p-8 h-full flex flex-col justify-between">
                    <h3 className=" text-lg lg:text-2xl font-semibold text-gray-900">
                      {it.subtitle}
                    </h3>

                    <div className="mt-6 flex justify-between items-center">
                      <span className=" text-md lg:text-lg text-[#99A1AF]">{it.title}</span>
                      <HoverFillButton />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ✅ Isolated Button with its own Framer Motion Controls */
function HoverFillButton() {
  const fillControls = useAnimation();

  const onHoverStart = () =>
    fillControls.start({
      width: "100%",
      transition: { duration: 0.45, ease: "easeOut" },
    });

  const onHoverEnd = () =>
    fillControls.start({
      width: "0%",
      transition: { duration: 0.45, ease: "easeOut" },
    });

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className="relative z-10 cursor-pointer px-5 py-2 text-lg text-[#004BF6] border border-[#004BF6] rounded-full flex items-center justify-center overflow-hidden hover:text-white transition-all duration-300"
      >
        {/* Animated Blue Fill */}
        <motion.div
          initial={{ width: "0%" }}
          animate={fillControls}
          className="absolute left-0 top-0 h-full bg-[#004BF6] rounded-full z-0"
        />

        {/* Text */}
        <span className="relative z-20 whitespace-nowrap">Ask to Vera</span>
      </div>
    </div>
  );
}
