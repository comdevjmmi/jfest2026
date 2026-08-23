"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const spring = { type: "spring", bounce: 0.2, duration: 0.7 } as const;

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  width: number;
  height: number;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Pembukaan Pendaftaran",
    date: "16 Agustus",
    width: 428,
    height: 346,
  },
  {
    id: 2,
    title: "Pembagian Nomor BIB",
    date: "7-9 September",
    width: 437,
    height: 352,
  },
  {
    id: 3,
    title: "Kajian Inspiratif",
    date: "12 September",
    width: 442,
    height: 350,
  },
  {
    id: 4,
    title: "Aksi Donor Darah",
    date: "12 September",
    width: 438,
    height: 352,
  },
  {
    id: 5,
    title: "Fun Run",
    date: "13 September",
    width: 542,
    height: 392,
  },
];

export function Timeline() {
  const reduced = useReducedMotion();

  return (
    <section
      id="timeline-section"
      className="relative z-10 w-full overflow-hidden bg-white pt-16 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44"
    >
      {/* Bottom Left Flag Asset (Flush against bottom left edge) */}
      <div className="pointer-events-none absolute left-0 bottom-0 z-10 w-[140px] sm:w-[220px] md:w-[280px]">
        <Image
          src="/images/timeline/left-bottom-flag.png"
          alt="Flag Decor"
          width={280}
          height={260}
          className="object-contain object-left-bottom"
        />
      </div>

      {/* Bottom Right Horn / Megaphone Asset (Flush against bottom right edge) */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-10 w-[160px] sm:w-[260px] md:w-[340px]">
        <Image
          src="/images/timeline/right-bottom-horn.png"
          alt="Megaphone Decor"
          width={340}
          height={280}
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header Title */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A00C2] tracking-tight">
            Timeline Kegiatan
          </h2>
        </motion.div>

        {/* Timeline Canvas Container */}
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Animated SVG Connecting Vector Line */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full z-0 hidden md:block"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
          >
            {/* Red Zig-Zag Timeline Path for 5 items */}
            <motion.path
              d="M 166 42 L 500 42 L 834 42 L 333 306 L 666 306"
              fill="none"
              stroke="#FF5B77"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          {/* Desktop Layout: 5 items */}
          <div className="relative z-10 hidden md:block py-6">
            {/* Top Row: Tags 1, 2, 3 */}
            <div className="grid grid-cols-3 gap-x-8 mb-16 items-center">
              {timelineData.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.7, y: 35 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...spring, delay: index * 0.18 }}
                  whileHover={{ scale: 1.06, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="flex justify-center"
                >
                  <Image
                    src={`/images/timeline/tag-${item.id}.png`}
                    alt={`${item.title} - ${item.date}`}
                    width={item.width}
                    height={item.height}
                    className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: Tags 4, 5 (centered nicely) */}
            <div className="flex justify-center gap-16 items-center">
              {timelineData.slice(3, 5).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.7, y: 35 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...spring, delay: (index + 3) * 0.18 }}
                  whileHover={{ scale: 1.06, rotate: index % 2 === 0 ? -2 : 2 }}
                  className="flex justify-center w-[300px]"
                >
                  <Image
                    src={`/images/timeline/tag-${item.id}.png`}
                    alt={`${item.title} - ${item.date}`}
                    width={item.width}
                    height={item.height}
                    className="w-full max-w-[310px] h-auto object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet Responsive Stack Layout */}
          <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center relative z-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...spring, delay: index * 0.12 }}
                whileHover={{ scale: 1.04 }}
                className="w-full max-w-[280px] sm:max-w-[320px] flex justify-center"
              >
                <Image
                  src={`/images/timeline/tag-${item.id}.png`}
                  alt={`${item.title} - ${item.date}`}
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
