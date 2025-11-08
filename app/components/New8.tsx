"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SAMPLE = [
  {
    id: "1",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3f/d9/de/3fd9deff-0aad-ef09-51c5-945a4cbc3922/screenshot_1.png/300x650bb.webp",
  },
  {
    id: "2",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e1/6a/aa/e16aaa8d-c911-9c58-688c-39378d6f571c/screenshot_2.png/300x650bb.webp",
  },
  {
    id: "3",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7d/f7/e4/7df7e49d-f842-62d8-5e90-cb58a3ff2cad/screenshot_3.png/300x650bb.webp",
  },
  {
    id: "4",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/85/c3/8a/85c38a24-3c10-e543-eb52-6d6c39923c8f/screenshot_4.png/300x650bb.webp",
  },
  {
    id: "5",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7e/96/90/7e969012-fc58-558a-027c-59b5df992131/screenshot_8.png/300x650bb.webp",
  },
  {
    id: "6",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6f/6e/81/6f6e8122-b476-fd83-b40f-8913f78e9b0b/screenshot_5.png/300x650bb.webp",
  },
  {
    id: "7",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/56/c4/f1/56c4f140-41a8-1437-9376-d736de4881af/screenshot_6.png/300x650bb.webp",
  },
  {
    id: "8",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d6/c9/ac/d6c9acda-41ca-eb4d-cf44-20ce1fe59ad6/screenshot_7.png/300x650bb.webp",
  },
  {
    id: "9",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d1/ae/28/d1ae28e7-dbfc-108d-8f3f-3b51edbb2da8/screenshot_9.png/300x650bb.webp",
  },
];

export default function New8({ items = SAMPLE }: { items?: typeof SAMPLE }) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="bg-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl  font-semibold mb-7">
              <span className="text-neutral-800">Features Of Vera AI</span>{" "}
            </h2>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(sw: SwiperClass) => (swiperRef.current = sw)}
            slidesPerView={"auto"}
            spaceBetween={28}
            centeredSlides={false}
            className="py-6"
          >
            {items.map((it, idx) => (
              <SwiperSlide
                key={`slide-${it.id}-${idx}`}
                className="w-[40vh]! bg-[#E4EAF1] flex justify-center items-center h-[80vh]! rounded-2xl overflow-hidden"
              >
                <img
                  src={it.img}
                  alt={`screenshot-${idx}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
