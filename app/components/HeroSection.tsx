"use client";

import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";

/**
 * HeroSection (Typing-style Animation + Liquid-fill CTA)
 * - Headline animates word by word with blur + scale reveal
 * - Paragraph fades upward with blur
 * - CTA has a left-to-right liquid fill animation on hover
 */
export default function HeroSection() {
  // A good typed bezier easing to replace string easings
  const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Variants (typed)
  const headingVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: easeOutCubic },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: easeOutCubic },
    }),
  };

  const descriptionVariant: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: easeOutCubic, delay: 1.2 },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutCubic, delay: 1.8 },
    },
  };

  const screenshotVariant: Variants = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: easeOutCubic, delay: 2.0 },
    },
  };

  const headingText = "Find the answer Practice with confidence";
  const words = headingText.split(" ");

  // CTA liquid fill control
  const fillControls = useAnimation();

  const onHoverStart = () => {
    fillControls.start({ width: "100%", transition: { duration: 0.45, ease: easeOutCubic } });
  };
  const onHoverEnd = () => {
    fillControls.start({ width: "0%", transition: { duration: 0.45, ease: easeOutCubic } });
  };

  return (
    <header className="text-black w-full">
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col lg:flex-row  w-full border border-gray-200">
          {/* LEFT: Headline */}
          <div className=" w-full lg:w-[60%] p-10 border-r border-gray-200">
            <motion.h1
              style={{ fontFamily: "InstrumentSerif" }}
              className=" text-[36px] lg:text-7xl  lg:max-w-3xl leading-tight text-start"
              variants={headingVariant}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* RIGHT: Description + CTA */}
          <div className="lg:w-[40%] lg:px-20 lg:py-5 px-10 flex flex-col justify-center border-t border-gray-200">
            <motion.p
              variants={descriptionVariant}
              initial="hidden"
              animate="visible"
              className="mt-6 text-black max-w-2xl text-start text-lg lg:text-2xl "
            >
              Improve patient outcomes with practical answers backed by{" "}
              <span className="">60M+ peer-reviewed</span> and up-to-date papers and guidelines.{" "}
              <span className="text-gray-400">Delivered at the speed of AI.</span>
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              className="relative mt-8 lg:w-[15vw] min-w-[220px]"
            >
              <motion.button
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                whileTap={{ scale: 0.97 }}
                className="relative z-20 w-full  lg:px-6 py-4 text-xl lg:text-2xl mb-2 font-medium  text-white bg-[#004BF6] lg:bg-white lg:text-[#004BF6] border border-[#004BF6] rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:text-white"
              >
                {/* Text */}
                <span className="relative z-20">Let's Talk To Vera</span>

                {/* Liquid fill background */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={fillControls}
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ backgroundColor: "#004BF6", zIndex: 10 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCREENSHOT / MOCK WINDOW */}
      <motion.div
        variants={screenshotVariant}
        initial="hidden"
        animate="visible"
        className="mt-10 flex justify-center"
      >
        <div className="relative w-[98vw] lg:w-[95vw] h-[32vh] lg:h-[58vh] rounded-3xl overflow-hidden shadow-lg">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('./bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Floating pill window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutCubic, delay: 2.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className=" w-[92vw] lg:w-[55vw] h-[22vh] lg:h-[40vh] bg-white rounded-xl shadow-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
