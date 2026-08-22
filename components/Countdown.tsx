"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "01",
    hours: "23",
    minutes: "40",
    seconds: "59",
  });

  useEffect(() => {
    // Target event date: J-Fest 2026 (September 12, 2026 00:00:00 WIB)
    const targetDate = new Date("2026-09-12T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="countdown-section"
      className="relative z-10 w-full overflow-hidden bg-gradient-to-b from-[#825BFF] via-[#7042FF] to-[#4A00C2] pt-16 sm:pt-24 md:pt-28 pb-20 sm:pb-28 md:pb-36"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-white/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-[#FF8A00]/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-0 mx-0 text-center">
        {/* Title Header: "Are you ready?" with Black BIB Pin Hole Circles on Outer Left & Right Edges */}
        <motion.div
          className="relative w-full px-6 flex items-center justify-center min-h-[90px] sm:min-h-[120px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Left Outer Black Circle BIB Pin Hole (Hidden on mobile & tablet, visible on lg+) */}
          <div className="hidden lg:block absolute left-4 sm:left-10 md:left-14 lg:left-20 top-1/2 -translate-y-1/2 size-12 sm:size-20 md:size-28 lg:size-36 shrink-0 drop-shadow-md">
            <Image
              src="/images/countdown/black-circle.png"
              alt="BIB Hole Left"
              fill
              className="object-contain"
            />
          </div>

          <h2
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#FF7E1D] drop-shadow-[0_8px_25px_rgba(0,0,0,0.3)] text-center"
            style={{
              WebkitTextStroke: "10px #FFFFFF",
              paintOrder: "stroke fill",
            }}
          >
            Are you ready?
          </h2>

          {/* Right Outer Black Circle BIB Pin Hole (Hidden on mobile & tablet, visible on lg+) */}
          <div className="hidden lg:block absolute right-4 sm:right-10 md:right-14 lg:right-20 top-1/2 -translate-y-1/2 size-12 sm:size-20 md:size-28 lg:size-36 shrink-0 drop-shadow-md">
            <Image
              src="/images/countdown/black-circle.png"
              alt="BIB Hole Right"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Full-width BIB Number Card Container (0 padding, 0 margin) */}
        <motion.div
          className="relative mt-8 sm:mt-12 md:mt-16 w-full max-w-none mx-0 px-0 aspect-[2560/1115] flex items-center justify-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* Exact Figma BIB Tag Frame Asset (Stretches Full Width) */}
          <Image
            src="/images/countdown/center-white-part.png"
            alt="BIB Number Tag Frame"
            fill
            className="object-fill w-full h-full"
            priority
          />

          {/* Ticker Content Overlay inside the exact BIB Tag Frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-6 sm:py-10">
            {/* Ticker Digits Row (Scaled Up) */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 font-heading font-black text-[#FF6584] text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] tracking-tight">
              <div className="flex flex-col items-center">
                <span className="min-w-[2.1ch] text-center">{timeLeft.days}</span>
              </div>

              <span className="text-[#FF6584] pb-2 sm:pb-4 md:pb-6 animate-pulse">:</span>

              <div className="flex flex-col items-center">
                <span className="min-w-[2.1ch] text-center">{timeLeft.hours}</span>
              </div>

              <span className="text-[#FF6584] pb-2 sm:pb-4 md:pb-6 animate-pulse">:</span>

              <div className="flex flex-col items-center">
                <span className="min-w-[2.1ch] text-center">{timeLeft.minutes}</span>
              </div>

              <span className="text-[#FF6584] pb-2 sm:pb-4 md:pb-6 animate-pulse">:</span>

              <div className="flex flex-col items-center">
                <span className="min-w-[2.1ch] text-center">{timeLeft.seconds}</span>
              </div>
            </div>

            {/* Ticker Sub-labels Row (Scaled Up) */}
            <div className="mt-2 sm:mt-5 md:mt-8 grid grid-cols-4 w-full max-w-[320px] sm:max-w-[620px] md:max-w-[820px] lg:max-w-[1020px] text-center font-heading text-base sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#FF6584]">
              <span>Hari</span>
              <span>Jam</span>
              <span>Menit</span>
              <span>Detik</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
