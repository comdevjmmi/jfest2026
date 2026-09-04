"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const logos = [
  { id: 1, name: "SEVIMA", src: "/images/supported-by/1.png" },
  { id: 2, name: "Customcraft", src: "/images/supported-by/2.jpg" },
  { id: 3, name: "AMH Jahe Merah", src: "/images/supported-by/3.jpg" },
  { id: 4, name: "Apartemen Taman Melati", src: "/images/supported-by/4.png" },
  { id: 5, name: "Cimory", src: "/images/supported-by/5.jpg" },
  { id: 6, name: "KOMITS", src: "/images/supported-by/6.png" },
  { id: 7, name: "Lemonilo", src: "/images/supported-by/7.png" },
  { id: 8, name: "YMMI ITS", src: "/images/supported-by/8.png" },
];

// Duplicate logo list to create a seamless infinite marquee loop
const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export function SupportedBy() {
  const reduced = useReducedMotion();

  return (
    <section
      id="supported-by"
      className="relative z-10 w-full overflow-hidden bg-white pt-16 sm:pt-24 md:pt-28 pb-20 sm:pb-28 md:pb-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Section Title: Supported By */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A00C2] tracking-tight">
            Supported By
          </h2>
        </motion.div>

        {/* Infinite Right-to-Left Moving Marquee Container */}
        <div className="relative mt-12 sm:mt-16 w-full overflow-hidden">
          {/* Left Gradient Edge Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />

          {/* Right Gradient Edge Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />

          {/* Moving Marquee Track */}
          <div className="flex w-max items-center">
            <motion.div
              className="flex items-center gap-12 sm:gap-20 md:gap-24 pr-12 sm:pr-20 md:pr-24"
              animate={
                reduced
                  ? undefined
                  : {
                      x: ["0%", "-50%"],
                    }
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {marqueeLogos.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="relative h-12 sm:h-16 md:h-20 w-36 sm:w-48 md:w-56 shrink-0 flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
