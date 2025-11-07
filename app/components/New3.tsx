"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper"; // <-- type import
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// SAMPLE data (same as yours)
const SAMPLE = [
  {
    id: "1",
    eyebrow: "SHOP",
    title: "Shop with a Specialist over video.",
    subtitle: "Choose your next device in a guided, one-way video session.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYlNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R2RBR0JWVHBRN0NKVm11SFZzeU45T2VCTXFJbjVIbEFUN05pTHFFYldZYzg",
  },
  {
    id: "2",
    eyebrow: "APPLE SPECIALIST",
    title: "Shop one on one with a Specialist online.",
    subtitle: "",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&w=800",
  },
  {
    id: "3",
    eyebrow: "TODAY AT APPLE",
    title: "Explore Apple Intelligence",
    subtitle: "Come and try it for yourself in a free session at the Apple Store.",
    img: "https://images.unsplash.com/photo-1525373697403-2f517f7f6d96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&w=1200",
  },
];

export default function AppleStyleSwiper({ items = SAMPLE }: { items?: typeof SAMPLE }) {
  // <- IMPORTANT: give the ref the Swiper instance type
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="bg-gray-50 py-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="text-black">Help is here.</span>{" "}
              <span className="font-semibold text-gray-600">Whenever and however you need it.</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(sw: SwiperClass) => (swiperRef.current = sw)}      // typed
            onSlideChange={(sw: SwiperClass) => setActiveIndex(sw.activeIndex)} // typed
            slidesPerView={"auto"}
            spaceBetween={28}
            centeredSlides={false}
            className="py-6"
          >
            {items.map((it, idx) => (
              <SwiperSlide
                key={it.id}
                className={`!w-[30rem] sm:!w-[34rem] lg:!w-[36rem] flex justify-center`}
              >
                <article
                  className={`relative bg-white rounded-2xl shadow-[0_6px_20px_rgba(15,23,42,0.06)] border border-transparent overflow-hidden transform transition-all duration-500 ease-out
                  ${activeIndex === idx ? "scale-100 shadow-lg" : "scale-95 opacity-90"}`}
                >
                  <div className="p-8 sm:p-10 lg:p-12 min-h-[22rem] flex flex-col">
                    {it.eyebrow && (
                      <div className="text-xs tracking-wide uppercase text-gray-500 mb-3">
                        {it.eyebrow}
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-[18ch] leading-tight">
                      {it.title}
                    </h3>

                    {it.subtitle && (
                      <p className="text-sm text-gray-600 mt-4 max-w-[34ch]">{it.subtitle}</p>
                    )}

                    <div className="flex-1" />

                    <div className="relative flex items-end justify-center -mb-6 pointer-events-none">
                      <img
                        src={it.img}
                        alt={it.title}
                        className={`object-contain max-h-[12rem] sm:max-h-[14rem] lg:max-h-[16rem] transition-transform duration-500`}
                      />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop nav */}
       
        </div>
      </div>
    </section>
  );
}
