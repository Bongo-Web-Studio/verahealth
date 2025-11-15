import React, { useEffect, useRef, useState } from "react";
import { FiSearch, FiMic, FiX, FiChevronRight } from "react-icons/fi";
import { GiLightBulb } from "react-icons/gi";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

type Props = {
  onSearch?: (q: string) => void;
  suggestions?: string[];
  placeholder?: string;
};

export default function SearchComponent({
  onSearch,
  suggestions = [
    "Generate a differential",
    "Compare treatment options",
    "Confirm drug dosing",
    "Calculate risk scores",
    "Summarize patient notes",
    "Explain lab results",
  ],
  placeholder = "Ask Vera anything...",
}: Props) {
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [filtered, setFiltered] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parallax pointer follow for micro-parallax on pointer-capable devices only
  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = !!(window.matchMedia && window.matchMedia("(pointer: fine)").matches);
    if (!finePointer) return; // skip on touch-first devices

    function onMove(e: PointerEvent) {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPointer({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // filter suggestions live
  useEffect(() => {
    const qtrim = q.trim().toLowerCase();
    if (!qtrim) {
      setFiltered(suggestions.slice(0, 6));
      setOpen(false);
      setHighlight(null);
      return;
    }
    const f = suggestions
      .filter((s) => s.toLowerCase().includes(qtrim))
      .slice(0, 6);
    setFiltered(f.length ? f : [q]);
    setOpen(true);
    setHighlight(0);
  }, [q, suggestions]);

  // keyboard navigation & quick actions
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open && e.key === "Enter") return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlight((h) => {
          const next = h === null ? 0 : Math.min((h ?? 0) + 1, filtered.length - 1);
          return next;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlight((h) => {
          const prev = h === null ? 0 : Math.max((h ?? 0) - 1, 0);
          return prev;
        });
      } else if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (open && highlight !== null && filtered[highlight]) {
          selectSuggestion(filtered[highlight]);
        } else submitSearch();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, highlight]);

  function selectSuggestion(s: string) {
    setQ(s);
    setOpen(false);
    setHighlight(null);
    inputRef.current?.focus();
    // optionally trigger immediate search when selecting a suggestion
    submitSearch(s);
  }

  async function submitSearch(override?: string) {
    const query = (override ?? q).trim();
    if (!query) return;
    setIsSubmitting(true);
    try {
      // simulate small delay to allow button press animation to show
      await new Promise((r) => setTimeout(r, 220));
      if (onSearch) await onSearch(query);
      else console.log("Search submitted →", query);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Typed variants (fixes the TS error) + smoother timings
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  const suggestionVariants: Variants = {
    hidden: { opacity: 0, y: 6, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      // `as const` makes the literal type acceptable to framer-motion's types
      transition: { type: "spring" as const, stiffness: 420, damping: 32 },
    },
  };

  return (
    <div className="w-full flex justify-center mt-8 px-4">
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate="show"
        variants={cardVariants}
        style={{ transform: `translate3d(${pointer.x * 8}px, ${pointer.y * 8}px, 0)` }}
        className="w-full max-w-3xl bg-white overflow-visible rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-[0_12px_40px_rgba(20,40,80,0.06)] backdrop-blur-sm"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
          }}
          className="flex flex-col gap-3"
          role="search"
          aria-label="Search"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex items-center gap-4 min-w-0 w-full">
              <div className="flex-1 min-w-0 relative">
                <label htmlFor="site-search" className="sr-only">
                  Search
                </label>
                <div
                  className={`rounded-xl transition-shadow duration-200 ease-in-out border px-3 py-3 flex items-center gap-3 ${{
                    true: "",
                  } as any} ${
                    focused ? "shadow-[0_10px_30px_rgba(2,6,23,0.06)] border-gray-200" : "border-transparent"
                  }`}
                >
                  <span className="text-gray-400 ml-1">
                    <FiSearch />
                  </span>

                  <input
                    id="site-search"
                    ref={inputRef}
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full bg-transparent pr-2 text-gray-700 text-base sm:text-lg font-semibold placeholder:text-gray-300 focus:outline-none"
                    aria-autocomplete="list"
                    aria-controls="search-suggestions"
                    aria-expanded={open}
                  />

                  {q ? (
                    <button
                      type="button"
                      aria-label="Clear"
                      onClick={() => setQ("")}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <FiX className="text-gray-500" />
                    </button>
                  ) : (
                    <div className="ml-1 text-gray-300 hidden sm:flex items-center gap-2">
                      {/* small helper / icon area if needed */}
                    </div>
                  )}
                </div>

                {/* suggestions */}
                <div className="relative">
                  <AnimatePresence>
                    {open && filtered.length > 0 && (
                      <motion.ul
                        id="search-suggestions"
                        role="listbox"
                        aria-label="Search suggestions"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute z-30 mt-2 w-full rounded-2xl bg-white border border-gray-100 shadow-lg p-2 overflow-hidden"
                      >
                        {filtered.map((s, i) => (
                          <motion.li
                            key={s + i}
                            role="option"
                            aria-selected={highlight === i}
                            onMouseDown={(ev) => ev.preventDefault()} // avoid blur before click
                            onClick={() => selectSuggestion(s)}
                            variants={suggestionVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className={`flex items-center justify-between gap-3 px-3 py-2 rounded-xl cursor-pointer select-none transition-colors ${
                              highlight === i ? "bg-indigo-50" : "hover:bg-gray-50"
                            }`}
                          >
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-gray-800 truncate">{s}</div>
                              <div className="text-xs text-gray-400 truncate">
                                {s === q ? "Search for exact phrase" : "Suggestion"}
                              </div>
                            </div>
                            <div className="text-xs text-gray-400 flex items-center gap-2">
                              <FiChevronRight />
                            </div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Voice input"
                onClick={() => alert("Voice input not implemented in demo")}
                className="p-3 rounded-lg hover:scale-95 transition-transform"
              >
                <FiMic className="w-5 h-5 text-gray-600" />
              </button>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                animate={isSubmitting ? { scale: [1, 0.98, 1] } : { scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-[#004BF6] px-3 py-3 rounded-lg flex items-center gap-2 text-white shadow-md"
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </div>

          {/* quick tips */}
          <div className="flex items-center justify-between mt-1">
            <div className="text-xs text-gray-400">Press Enter to search</div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
