"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
          }, 450);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0E0528] via-[#2A1065] to-[#4320B2] text-white px-6 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          {/* Background Ambient Twinkling Stars using star.png */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute top-[18%] left-[22%] size-6 sm:size-8 animate-ping">
              <Image src="/images/hero/animate-star/star.png" alt="Star" width={32} height={32} className="object-contain" />
            </div>
            <div className="absolute top-[28%] left-[78%] size-8 sm:size-10 animate-pulse">
              <Image src="/images/hero/animate-star/star.png" alt="Star" width={40} height={40} className="object-contain" />
            </div>
            <div className="absolute top-[68%] left-[16%] size-7 sm:size-9 animate-pulse">
              <Image src="/images/hero/animate-star/star.png" alt="Star" width={36} height={36} className="object-contain" />
            </div>
            <div className="absolute top-[78%] left-[72%] size-8 sm:size-10 animate-ping">
              <Image src="/images/hero/animate-star/star.png" alt="Star" width={40} height={40} className="object-contain" />
            </div>
          </div>

          {/* Branding Title */}
          <motion.div
            className="relative z-10 text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#FFF39D] to-[#50E6CA] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(255,243,157,0.4)]">
              J-FEST 2026
            </h1>
            <p className="mt-2 font-mono text-xs sm:text-sm tracking-[0.25em] text-white/70 uppercase">
              JMMI Festival · Milad Ke-37
            </p>
          </motion.div>

          {/* Shooting Star Progress Bar Container */}
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[420px]">
            {/* Outer Track */}
            <div className="relative h-3.5 sm:h-4 w-full rounded-full bg-white/10 p-0.5 border border-white/20 backdrop-blur-md shadow-[0_0_24px_rgba(0,0,0,0.4)] overflow-visible">
              {/* Animated Progress Fill (Shooting Star Tail) */}
              <motion.div
                className="relative h-full rounded-full bg-gradient-to-r from-[#7B52F2] via-[#FFF39D] to-white shadow-[0_0_16px_#FFF39D,0_0_30px_rgba(255,255,255,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                {/* Luminous Shooting Star Head Tip using star.png asset */}
                {progress > 0 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-7 sm:size-9 z-20 flex items-center justify-center drop-shadow-[0_0_16px_#FFF39D]">
                    <Image
                      src="/images/hero/animate-star/star.png"
                      alt="Shooting Star Head"
                      width={36}
                      height={36}
                      className="object-contain animate-spin-slow"
                    />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Bottom Status Text & Percentage Counter */}
            <div className="mt-4 flex items-center justify-between text-xs sm:text-sm font-mono text-white/80">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#50E6CA] animate-pulse" />
                Memuat Pengalaman...
              </span>
              <span className="font-bold text-[#FFF39D] text-base sm:text-lg">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
