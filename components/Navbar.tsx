"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

const spring = { type: "spring", bounce: 0, duration: 0.5 } as const;

const navItems = [
  { name: "Beranda", href: "#" },
  { name: "Logo", href: "#filosofi-logo" },
  { name: "Maskot", href: "#maskot-aksa" },
  { name: "Kegiatan", href: "#kegiatan" },
  { name: "Timeline", href: "#timeline-section" },
  { name: "FAQ", href: "#faq-section" },
  { name: "Kontak", href: "#contact-section" },
];

const smoothSpring = { type: "spring", stiffness: 260, damping: 24 } as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${
        isScrolled ? "pt-3 px-3" : "p-0"
      }`}
    >
      <motion.nav
        layout
        transition={smoothSpring}
        className={`pointer-events-auto flex items-center justify-between transition-colors duration-300 ${
          isScrolled
            ? "w-[94%] max-w-6xl rounded-full border border-white/60 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(67,32,178,0.12)] px-5 md:px-8 py-2.5"
            : "w-full rounded-none border-b border-white/20 bg-white px-6 md:px-16 py-4"
        }`}
      >
        {/* Brand / Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.05 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center shrink-0"
          >
            <Image
              src="/images/navbar/logo.png"
              alt="JFEST 2026 Logo"
              width={40}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </motion.div>
          <span className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#4320B2]">
            J-FEST 2026
          </span>
        </motion.a>

        {/* Desktop Links (Logo, Maskot, Kegiatan, Timeline, FAQ, Kontak) */}
        <div className="hidden items-center gap-5 lg:gap-7 lg:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="group relative py-1 font-heading text-sm lg:text-base font-semibold text-ink-soft transition-colors hover:text-[#4320B2]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 + i * 0.04 }}
            >
              <span>{item.name}</span>
              <span className="absolute inset-x-0 -bottom-1 h-[2.5px] origin-left scale-x-0 rounded-full bg-[#4320B2] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        {/* Action Buttons: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#kegiatan"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#4a00c1] px-5 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-white shadow-[0_4px_15px_rgba(74,0,193,0.35)] transition-all hover:bg-[#3d00a3] active:scale-95"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar Sekarang <ArrowRight className="size-3.5" />
          </motion.a>

          {/* Mobile Menu Button Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden size-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-16 inset-x-4 z-40 rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden max-w-sm mx-auto"
          >
            <div className="flex flex-col space-y-3 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl py-2.5 font-heading text-base font-bold text-slate-800 hover:bg-[#4320B2]/10 hover:text-[#4320B2] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="#kegiatan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4a00c1] py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white shadow-md hover:bg-[#3d00a3]"
                >
                  Daftar Sekarang <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
