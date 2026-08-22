"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const spring = { type: "spring", bounce: 0, duration: 0.6 } as const;

export function About() {
  const reduced = useReducedMotion();

  return (
    <section
      id="tentang"
      className="relative z-10 w-full overflow-hidden bg-[#FFD96B] pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40 text-center"
    >
      {/* Top Left Decorative Cloud */}
      <motion.div
        className="pointer-events-none absolute -left-10 top-8 sm:top-14 w-[160px] sm:w-[260px] md:w-[340px] opacity-85"
        animate={reduced ? undefined : { y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/about/cloud.png"
          alt="Cloud Decor"
          width={340}
          height={190}
          className="object-contain"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto max-w-4xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#4A00C2]">
            Apa itu J-Fest?
          </h2>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div
          className="mx-auto mt-6 sm:mt-8 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring, delay: 0.15 }}
        >
          <p className="font-subheadline text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-loose text-[#2B2B2B] font-medium">
            <span className="font-bold text-black">J-FEST (JMMI Festival) 2026</span>{" "}
            hadir sebagai wadah kolaborasi pemuda untuk menyatukan semangat spiritualitas dengan energi fisik yang membara. Sebuah festival yang tidak hanya merayakan kebersamaan, tetapi juga memupuk jiwa juara dalam setiap langkah kebaikan.
          </p>
        </motion.div>

        {/* Bottom Motto Tagline */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring, delay: 0.3 }}
        >
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4A00C2] leading-tight max-w-2xl mx-auto">
            Menebar Manfaat, Melangkah Sehat, <br className="hidden sm:inline" />
            Menggapai Syafaat
          </p>
        </motion.div>
      </div>

      {/* Bottom Right Green Star Decorative Asset */}
      <motion.div
        className="pointer-events-none absolute -right-6 -bottom-6 sm:bottom-0 md:bottom-2 z-20 w-[150px] sm:w-[230px] md:w-[310px]"
        animate={reduced ? undefined : { rotate: [0, 6, 0], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/about/green-star.png"
          alt="Green Star Decor"
          width={310}
          height={310}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
