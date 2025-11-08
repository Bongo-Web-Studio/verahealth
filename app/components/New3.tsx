"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper"; // type import only
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="bg-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto">
        <div className="flex items-start justify-between ">
          <div>
            <h2 className="text-3xl  font-semibold mb-7 ">
              <span className="text-neutral-800">What your peers are asking</span>{" "}
            </h2>
          </div>

          {/* Navigation buttons */}
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

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(sw: SwiperClass) => (swiperRef.current = sw)}
            onSlideChange={(sw: SwiperClass) => setActiveIndex(sw.activeIndex)}
            slidesPerView={"auto"}
            spaceBetween={28}
            centeredSlides={false}
            className="py-6"
          >
            {items.map((it, idx) => (
              <SwiperSlide
                key={`slide-${it.id}-${idx}`} // ✅ unique key
                className="w-[30vw]! bg-gray-100 flex justify-center items-center h-[30vh]! rounded-2xl overflow-hidden"
              >
                <article
                  className={`relative rounded-2xl  border border-transparent overflow-hidden transform transition-all duration-500 ease-out h-full
                `}
                >
                  <div className="p-8 h-full">
                    <h3 className="text-2xl font-semibold text-gray-900   h-[80%] ">
                      {it.subtitle}
                    </h3>

                    <p className="text-lg text-[#99A1AF] mt-4 h-[20%] flex justify-between items-center">
                      <div>{it.title}</div>

                      <div className="text-[#004BF6] border-[#004BF6] hover:bg-[#004BF6] hover:text-white border  rounded-full px-3 py-1 cursor-pointer">
                        Ask to vera
                      </div>
                    </p>

                    <div className="flex-1" />

                    <div className="relative flex items-end justify-center -mb-6 pointer-events-none"></div>
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
