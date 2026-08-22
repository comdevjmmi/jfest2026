"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const spring = { type: "spring", bounce: 0, duration: 0.5 } as const;

const philosophyItems = [
  {
    id: "oranye-kuning",
    label: "Oranye & Kuning",
    image: "/images/philosophy-logo/logo-color-oranye-kuning.png",
    activeGradient: "from-[#FF7E1D] via-[#FF9800] to-[#FFA800]",
    description:
      "Melambangkan keceriaan, antusiasme tinggi, serta energi positif dari perayaan milad dan kemeriahan rangkaian acara Fun Run.",
  },
  {
    id: "biru-ungu",
    label: "Biru & Ungu",
    image: "/images/philosophy-logo/logo-color-biru-ungu.png",
    activeGradient: "from-[#7B52F2] via-[#6320EE] to-[#4A00C2]",
    description:
      "Melambangkan keceriaan, antusiasme tinggi, serta energi positif dari perayaan milad dan kemeriahan rangkaian acara Fun Run.",
  },
  {
    id: "hijau-toska",
    label: "Hijau Toska",
    image: "/images/philosophy-logo/logo-color-hijau-toska.png",
    activeGradient: "from-[#00B894] via-[#00CEC9] to-[#00D2D3]",
    description:
      "Melambangkan ketenangan spiritual, pertumbuhan iman, serta kedalaman ilmu yang selaras dengan esensi Kajian Islam.",
  },
  {
    id: "manusia-berlari",
    label: "Manusia Berlari",
    image: "/images/philosophy-logo/logo-shape-manusia-berlari.png",
    activeGradient: "from-[#4A00C2] via-[#3A008D] to-[#290066]",
    description:
      "Merepresentasikan pemuda muslim dan kader JMMI sebagai penggerak roda dakwah yang aktif, produktif, serta adaptif terhadap perkembangan zaman.",
  },
  {
    id: "aksen-37",
    label: "Aksen Angka 37",
    image: "/images/philosophy-logo/logo-shape-aksen angka 37.png",
    activeGradient: "from-[#4A00C2] via-[#3A008D] to-[#290066]",
    description:
      "Perpaduan unik antara lekukan tubuh atas yang menyerupai angka 3 Arab (٣) dan posisi kaki dinamis yang membentuk angka 7 Latin, penanda kreatif usia milad ke-37 JMMI.",
  },
  {
    id: "bulan-sabit-bintang",
    label: "Bulan Sabit & Bintang",
    image: "/images/philosophy-logo/logo-shape-bulan-sabit-bintang.png",
    activeGradient: "from-[#4A00C2] via-[#3A008D] to-[#290066]",
    description:
      "Simbol spiritualitas keislaman dan cita-cita luhur sebagai visi utama yang dituju di setiap pergerakan JMMI.",
  },
];

const defaultOpeningState = {
  id: "full",
  label: "Logo Utama",
  image: "/images/philosophy-logo/logo-full.png",
  activeGradient: "from-[#4A00C2] via-[#3A008D] to-[#290066]",
  description: (
    <>
      Logo J-Fest 2026 merupakan simbol harmonis yang memadukan nilai keislaman, semangat pergerakan pemuda, dan kebugaran fisik.{" "}
      <span className="font-bold text-[#4A00C2] bg-white/85 px-2.5 py-1 rounded-lg shadow-sm border border-[#4A00C2]/30 inline-block my-0.5">
        Pilih elemen di atas
      </span>{" "}
      untuk mempelajari makna di balik setiap warna dan bentuk logo.
    </>
  ),
};

export function Philosophy() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const reduced = useReducedMotion();

  // Auto-reset back to logo-full after 5 seconds of inactivity
  useEffect(() => {
    if (selectedId === null) return;

    const timer = setTimeout(() => {
      setSelectedId(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [selectedId]);

  const activeItem =
    selectedId === null
      ? defaultOpeningState
      : philosophyItems.find((item) => item.id === selectedId) || defaultOpeningState;

  return (
    <section
      id="filosofi-logo"
      className="relative z-10 w-full overflow-hidden bg-[#FFD96B] pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-32 md:pb-40"
    >
      {/* Background Decorative Cloud */}
      <motion.div
        className="pointer-events-none absolute -left-12 top-6 sm:top-10 w-[200px] sm:w-[300px] md:w-[400px] opacity-80"
        animate={reduced ? undefined : { y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/about/cloud.png"
          alt="Cloud Decor"
          width={400}
          height={220}
          className="object-contain"
        />
      </motion.div>

      {/* Main Section Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#4A00C2]">
            Filosofi Logo
          </h2>
        </motion.div>

        {/* 2-Column Interactive Display */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Logo Image Display */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative size-[280px] sm:size-[360px] md:size-[420px] lg:size-[460px] flex items-center justify-center p-6">
              {/* Radial Soft Backdrop Glow */}
              <div className="absolute inset-4 rounded-full bg-white/40 blur-2xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  className="relative size-full"
                  initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.88, rotate: 3 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.label}
                    fill
                    className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Filter Pills + Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {philosophyItems.map((item) => {
                const isActive = item.id === selectedId;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`relative rounded-full px-5 py-2.5 sm:px-6 sm:py-3 font-heading text-sm sm:text-base font-bold text-white transition-all shadow-md active:scale-95 ${
                      isActive
                        ? `bg-gradient-to-r ${item.activeGradient} shadow-lg ring-4 ring-white/70 scale-105 z-10`
                        : "bg-[#4A00C2]/85 hover:bg-[#4A00C2] hover:scale-102"
                    }`}
                    whileHover={{ scale: isActive ? 1.05 : 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            {/* Dynamic Description Box */}
            <div className="mt-8 sm:mt-10 min-h-[140px] sm:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeItem.id}
                  className="font-subheadline text-lg sm:text-xl md:text-2xl leading-relaxed text-[#161616] font-normal"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {activeItem.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
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
