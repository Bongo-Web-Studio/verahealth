"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Explicitly typed as Variants to avoid TS inference issues
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // force literal type so TS knows this is the "spring" variant not a wide string
        type: "spring" as const,
        stiffness: 400,
        damping: 28,
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.18 },
    },
    exit: {
      opacity: 0,
      y: -6,
      transition: { type: "tween", duration: 0.12 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-white sticky top-0 left-0 z-10000000000000000"
      aria-label="Main navigation"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo / Title */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3  "
            aria-hidden={false}
          >
            <motion.img
              src="https://pbs.twimg.com/profile_images/1821084684736233472/sF41xOfD_400x400.jpg"
              alt="Vera Health logo"
              className="w-12 h-12 sm:w-14 sm:h-14  lg:ml-0 ml-3 "
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.span
              variants={itemVariants}
              className="font-semibold text-lg sm:text-2xl "
            >
              Vera Health
            </motion.span>
          </motion.div>

          {/* Center / Desktop nav */}
          <motion.nav
            variants={itemVariants}
            className="hidden md:flex gap-8 items-center text-gray-600     w-[60%]"
            role="navigation"
            aria-label="Primary"
          >
            <motion.a
              variants={itemVariants}
              className="px-6 py-2 rounded-full bg-[#004BF6] text-white cursor-pointer"
              href="#signup"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Signup
            </motion.a>

            <motion.a
              variants={itemVariants}
              className="text-gray-500 cursor-pointer"
              href="#pricing"
              whileHover={{ y: -2 }}
            >
              Pricing
            </motion.a>

            <motion.a
              variants={itemVariants}
              className="text-gray-500 cursor-pointer"
              href="#discover"
              whileHover={{ y: -2 }}
            >
              Discover
            </motion.a>

            <motion.a
              variants={itemVariants}
              className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 cursor-pointer"
              href="#login"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.a>
          </motion.nav>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* simple animated icon using framer-motion */}
              <motion.div
                initial={false}
                animate={mobileOpen ? { rotate: 45 } : { rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="w-6 h-6 relative"
              >
                {mobileOpen ? (
                  // X icon
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      d="M6 6 L18 18 M6 18 L18 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                ) : (
                  // hamburger
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      d="M3 6h18M3 12h18M3 18h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile menu (AnimatePresence for mount/unmount animation) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobileMenu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden mt-2  "
            >
              <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3  flex justify-center items-center flex-col">
                <a
                  href="#signup"
                  className="block w-32 text-center px-4 py-2 rounded-full bg-[#004BF6] text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Signup
                </a>

                <a
                  href="#pricing"
                  className="block w-full text-center px-4 py-2 rounded-md text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </a>

                <a
                  href="#discover"
                  className="block w-full text-center px-4 py-2 rounded-md text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Discover
                </a>

                <a
                  href="#login"
                  className="block w-full text-center px-4 py-2 rounded-full bg-gray-200 text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
