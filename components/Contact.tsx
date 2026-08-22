"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MessageSquare, HelpCircle } from "lucide-react";

const spring = { type: "spring", bounce: 0.15, duration: 0.6 } as const;

export function Contact() {
  return (
    <section
      id="contact-section"
      className="relative z-10 w-full bg-white pt-20 sm:pt-28 md:pt-32 pb-44 sm:pb-56 md:pb-72"
    >
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        {/* Section Title: Contact Person */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#4A00C2] tracking-tight">
            Contact Person
          </h2>
        </motion.div>

        {/* Contact Card Container */}
        <motion.div
          className="relative mx-auto w-full max-w-xl rounded-3xl bg-[#FAFAFA] border border-slate-100 p-8 sm:p-12 shadow-xl shadow-slate-200/50 overflow-hidden z-20"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          {/* Question Bubble Watermark Icon on Top-Right of Card */}
          <div className="absolute right-6 top-6 opacity-20 text-slate-400">
            <HelpCircle className="size-10 sm:size-12" />
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#1F1F1F] tracking-tight text-center">
            Butuh Bantuan Lebih Lanjut?
          </h3>

          {/* Green WhatsApp Contact Button Pill (Clickable wa.me link) */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/6281230189104"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#E2F9F0] border border-[#10B981]/30 px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-sm sm:text-base md:text-lg font-bold text-[#047857] shadow-sm hover:bg-[#d2f5e8] hover:shadow-md transition-all duration-200"
            >
              <MessageSquare className="size-5 sm:size-6 text-[#10B981] group-hover:scale-110 transition-transform" />
              <span>Hubungi Akmal: 0812-3018-9104</span>
            </a>
          </div>

          {/* Social Media Link Buttons: IG JMMI, IG JFest, TikTok JFest */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/jmmi.its/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-slate-100 hover:bg-[#4A00C2] hover:text-white px-4 py-2.5 font-subheadline text-xs sm:text-sm font-bold text-slate-700 transition-colors shadow-sm"
              aria-label="Instagram JMMI ITS"
            >
              <span>IG @jmmi.its</span>
            </a>
            <a
              href="https://www.instagram.com/jfest.37/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-slate-100 hover:bg-[#4A00C2] hover:text-white px-4 py-2.5 font-subheadline text-xs sm:text-sm font-bold text-slate-700 transition-colors shadow-sm"
              aria-label="Instagram J-Fest 37"
            >
              <span>IG @jfest.37</span>
            </a>
            <a
              href="https://www.tiktok.com/@jfest.37?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-slate-100 hover:bg-black hover:text-white px-4 py-2.5 font-subheadline text-xs sm:text-sm font-bold text-slate-700 transition-colors shadow-sm"
              aria-label="TikTok J-Fest 37"
            >
              <span>TikTok @jfest.37</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Finish Line Ribbon Asset overflowing into FAQ section above */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 sm:-bottom-20 md:-bottom-28 z-0 h-[480px] sm:h-[850px] md:h-[1100px] lg:h-[1300px] w-full">
        <Image
          src="/images/philosophy-mascot/tema-funrun/left-finish-line.png"
          alt="Finish Line Ribbon Decor"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}
