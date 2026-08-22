"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex size-12 sm:size-14 items-center justify-center rounded-full bg-gradient-to-r from-[#7B52F2] via-[#6320EE] to-[#4A00C2] text-white shadow-[0_8px_25px_rgba(123,82,242,0.45)] border border-white/30 backdrop-blur-md transition-shadow hover:shadow-[0_12px_35px_rgba(123,82,242,0.65)] focus:outline-none"
        >
          <ArrowUp className="size-6 sm:size-7" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
