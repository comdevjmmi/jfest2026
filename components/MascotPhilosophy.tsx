"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MapPin, X, Info } from "lucide-react";

const spring = { type: "spring", bounce: 0, duration: 0.5 } as const;

type ThemeType = "kajian" | "funrun";

interface MascotPart {
  id: string;
  title: string;
  badge: string;
  description: string;
  // Hotspot pin position on the mascot canvas (% relative to mascot container)
  pinTop: string;
  pinLeft: string;
}

const kajanParts: MascotPart[] = [
  {
    id: "surban",
    title: "Surban",
    badge: "Tutup Kepala",
    description:
      "Surban melambangkan ketakwaan, kerendahan hati, dan komitmen untuk meneladani sunnah Rasulullah SAW. Pemakaian surban di kepala menyimbolkan bahwa setiap pemikiran dan langkah yang diambil senantiasa dilandasi oleh ilmu agama dan kebijaksanaan.",
    pinTop: "14%",
    pinLeft: "52%",
  },
  {
    id: "cheetah",
    title: "Cheetah",
    badge: "Wajah Maskot",
    description:
      "Cheetah merupakan mamalia darat tercepat di dunia. Dalam konteks kajian, wajah cheetah melambangkan semangat Fastabiqul Khairat—berlomba-lomba dalam kebaikan tanpa menunda-nunda. Garis hitam khas di bawah matanya menyimbolkan fokus dan ketajaman niat untuk terus menuntut ilmu serta mengejar ridho Allah SWT.",
    pinTop: "28%",
    pinLeft: "50%",
  },
  {
    id: "jubah",
    title: "Jubah",
    badge: "Pakaian Adab",
    description:
      "Jubah melambangkan pakaian kesopanan, kesucian, dan kehormatan seorang muslim. Potongan busana yang menutup aurat dengan rapi ini menunjukkan identitas pemuda yang menjaga adab, bermoral tinggi, serta mengedepankan kesederhanaan namun tetap terlihat berwibawa di tengah masyarakat.",
    pinTop: "62%",
    pinLeft: "50%",
  },
];

const funrunParts: MascotPart[] = [
  {
    id: "cheetah",
    title: "Cheetah",
    badge: "Wajah Sporty",
    description:
      "Konsep karakter maskot berwujud manusia dengan wajah cheetah yang sporty, energetik, dan bersahabat untuk menyemarakkan event Fun Run JFest. Setiap elemen perlengkapan dirancang khusus untuk merepresentasikan semangat olahraga, kecepatan, serta identitas perayaan yang penuh kebahagiaan.",
    pinTop: "22%",
    pinLeft: "50%",
  },
  {
    id: "bib-037",
    title: "BIB 037",
    badge: "Nomor Dada",
    description:
      "Angka 37 ini memiliki makna yang sangat spesial, karena menandai momen bersejarah Milad Ke-37 JMMI sekaligus perayaan JFest.",
    pinTop: "54%",
    pinLeft: "50%",
  },
  {
    id: "jam-tangan",
    title: "Jam Tangan",
    badge: "Smartwatch",
    description:
      "Penggunaan smartwatch ini menyimbolkan disiplin waktu, konsistensi dalam memantau performa lari, serta sentuhan teknologi modern yang akrab dengan gaya hidup generasi muda saat ini.",
    pinTop: "52%",
    pinLeft: "62%",
  },
  {
    id: "jersey-celana",
    title: "Jersey dan Celana",
    badge: "Pakaian Olahraga",
    description:
      "Maskot kita mengenakan Jersey dan Celana Lari Ergonomis berbahan dry-fit. Desainnya mengusung perpaduan warna khas JFest yang cerah dan dinamis, mencerminkan kenyamanan serta kesiapan penuh untuk beraktivitas fisik secara maksimal di ajang Fun Run.",
    pinTop: "64%",
    pinLeft: "42%",
  },
  {
    id: "sepatu",
    title: "Sepatu",
    badge: "Sepatu Lari Modern",
    description:
      "Maskot ini dilengkapi dengan Sepatu Lari Modern bermodel trendi dan memiliki bantalan responsif. Elemen sepatu ini mempertegas bahwa maskot kita bukan sekadar pajangan, melainkan sosok pelari aktif yang menginspirasi peserta untuk bergerak lincah dan menjaga gaya hidup sehat.",
    pinTop: "88%",
    pinLeft: "50%",
  },
];

export function MascotPhilosophy() {
  const [theme, setTheme] = useState<ThemeType>("kajian");
  const [activeModalPart, setActiveModalPart] = useState<MascotPart | null>(null);
  const [showPins, setShowPins] = useState(true);
  const reduced = useReducedMotion();

  const parts = theme === "kajian" ? kajanParts : funrunParts;

  // 5-second timer to hide pins visually while remaining clickable
  useEffect(() => {
    setShowPins(true);
    const timer = setTimeout(() => {
      setShowPins(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "kajian" ? "funrun" : "kajian"));
    setActiveModalPart(null);
  };

  return (
    <section
      id="maskot-aksa"
      className="relative z-10 w-full overflow-hidden bg-[#FFD96B] pt-16 sm:pt-24 md:pt-28 pb-24 sm:pb-32 md:pb-36"
    >
      {/* Background Decorative Cloud */}
      <motion.div
        className="pointer-events-none absolute -left-10 top-8 sm:top-14 w-[180px] sm:w-[280px] md:w-[360px] opacity-80 z-10"
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={`/images/philosophy-mascot/tema-${theme}/left cloud.png`}
          alt="Cloud Decor"
          width={360}
          height={200}
          className="object-contain"
        />
      </motion.div>

      {/* Top Left Green Star */}
      <div className="pointer-events-none absolute left-12 top-20 sm:left-24 sm:top-28 z-10 size-6 sm:size-10">
        <Image
          src={`/images/philosophy-mascot/tema-${theme}/left-top-green-star.png`}
          alt="Green Star"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Section Header */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A00C2] tracking-tight">
            Halo, Aku Aksa!
          </h2>
        </motion.div>

        {/* Ganti Tema Button */}
        <motion.div
          className="mt-5 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.15 }}
        >
          <motion.button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A00C2] px-7 py-3 font-heading text-base font-bold text-white shadow-lg shadow-[#4A00C2]/30 transition-all hover:bg-[#3A008D] active:scale-95 ring-4 ring-white/60"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Ganti Tema:{" "}
            <span className="text-[#FFF39D]">
              {theme === "kajian" ? "Tema Kajian" : "Tema Funrun"}
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* FULL SECTION THEME SCENERY (Mosque / Running Track & Finish Line - Flush Right Edge) */}
      <AnimatePresence mode="wait">
        {theme === "kajian" ? (
          <motion.div
            key="bg-kajian"
            className="pointer-events-none absolute right-0 bottom-0 top-0 w-full lg:w-[60%] z-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Mosque on Right (Edge-to-edge right flush) */}
            <div className="absolute right-0 bottom-0 w-[500px] sm:w-[680px] md:w-[820px] lg:w-[940px] h-[85%] sm:h-[90%] md:h-[95%] z-0">
              <Image
                src="/images/philosophy-mascot/tema-kajian/right-mosque.png"
                alt="Mosque Theme Background"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="bg-funrun"
            className="pointer-events-none absolute right-0 bottom-0 top-0 w-full lg:w-[60%] z-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Running Track on Right (Shifted UP) */}
            <div className="absolute right-0 bottom-4 sm:bottom-6 w-[580px] sm:w-[800px] md:w-[980px] lg:w-[1150px] h-[76%] sm:h-[84%] z-0">
              <Image
                src="/images/philosophy-mascot/tema-funrun/left-running-track.png"
                alt="Running Track"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
            {/* Finish Line on Right */}
            <div className="absolute right-0 bottom-4 sm:bottom-8 w-[400px] sm:w-[560px] md:w-[680px] lg:w-[780px] h-[88%] sm:h-[92%] z-0">
              <Image
                src="/images/philosophy-mascot/tema-funrun/left-finish-line.png"
                alt="Finish Line"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Grid: Left Panel (Meaning of Name) + Center Interactive Mascot Canvas */}
      <div className="relative z-30 mx-auto max-w-7xl px-6 mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Makna Nama Aksa (Shifted to Left) */}
        <motion.div
          className="lg:col-span-5 xl:col-span-4 lg:-ml-6 xl:-ml-10 bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/60 shadow-xl shadow-black/5 z-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={spring}
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#4A00C2]">
            Makna Nama Aksa
          </h3>
          <p className="mt-3 font-subheadline text-base sm:text-lg text-[#2B2B2B] leading-relaxed">
            <span className="font-bold text-black">Aksa</span> berasal dari bahasa
            Sansekerta dan Arab, dengan makna yang selaras dengan karakter maskot
            J-FEST 37:
          </p>

          <ul className="mt-4 space-y-4 font-subheadline text-sm sm:text-base text-[#2B2B2B]">
            <li className="flex items-start gap-3">
              <span className="mt-1 size-2.5 rounded-full bg-[#4A00C2] shrink-0" />
              <div>
                <strong className="font-bold text-black">
                  Mata & Pandangan Jauh (Sansekerta):
                </strong>{" "}
                Melambangkan visi tajam, fokus, keberanian melampaui batas, serta
                karakter yang kuat, tangkas, dan cerdas.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 size-2.5 rounded-full bg-[#00B894] shrink-0" />
              <div>
                <strong className="font-bold text-black">
                  Terjauh & Tertinggi (Arab/Al-Aqsa):
                </strong>{" "}
                Melambangkan semangat menuntut ilmu setinggi-tingginya dan memberikan
                potensi terbaik dalam setiap kebaikan.
              </div>
            </li>
          </ul>

          {/* Interactive Mascot Click Guide Pill */}
          <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A00C2] bg-[#4A00C2]/10 px-4 py-2.5 rounded-xl">
            <Info className="size-4 shrink-0 text-[#4A00C2]" />
            <span>Klik bagian tubuh Aksa untuk melihat filosofi detailnya!</span>
          </div>
        </motion.div>

        {/* Center Column: Interactive Mascot Canvas (Centered in Page & Standing on Ground) */}
        <div className="lg:col-span-7 xl:col-span-8 relative min-h-[380px] sm:min-h-[560px] md:min-h-[640px] flex items-end justify-center lg:-ml-28 xl:-ml-44">
          {/* Interactive Mascot Figure + Hotspot Target Pins (Centered & Grounded in front of Ground) */}
          <div className="relative z-30 size-[360px] sm:size-[500px] md:size-[560px] translate-y-10 sm:translate-y-16 md:translate-y-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                className="relative size-full"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Mascot Image */}
                <Image
                  src={
                    theme === "kajian"
                      ? "/images/philosophy-mascot/tema-kajian/mascot-tema-kajian.png"
                      : "/images/philosophy-mascot/tema-funrun/mascot-tema-funrun.png"
                  }
                  alt={`Aksa Mascot ${theme}`}
                  fill
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                  priority
                />

                {/* Hotspot Target Pins Overlay (Visible for 5s initially, then hidden but still clickable!) */}
                {parts.map((part) => (
                  <button
                    key={part.id}
                    onClick={() => setActiveModalPart(part)}
                    className="group absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                    style={{ top: part.pinTop, left: part.pinLeft }}
                    aria-label={`Lihat filosofi ${part.title}`}
                  >
                    <div
                      className={`relative flex items-center justify-center transition-opacity duration-700 ${
                        showPins ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <span className="absolute size-8 sm:size-10 rounded-full bg-[#4A00C2]/40 animate-ping" />
                      <span className="relative flex size-8 sm:size-9 items-center justify-center rounded-full bg-white text-[#4A00C2] font-bold text-xs sm:text-sm shadow-xl border-2 border-[#4A00C2] transition-transform group-hover:scale-125">
                        <MapPin className="size-4 text-[#4A00C2] fill-[#4A00C2]/20" />
                      </span>
                      {/* Label Tooltip Hover Badge */}
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#4A00C2] px-3 py-1 text-xs font-bold text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {part.title}
                      </span>
                    </div>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Ground Backdrop Strip (Visible layer z-10, flush bottom) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[370px] sm:h-[145px] md:h-[155px] w-full overflow-hidden">
        <Image
          src={`/images/philosophy-mascot/tema-${theme}/left-ground.png`}
          alt="Ground"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* Bottom Left Bushes Asset (Shifted down further) */}
      <div className="pointer-events-none absolute left-0 -ml-4 sm:-ml-8 md:-ml-12 -bottom-4 sm:-bottom-2 md:bottom-0 z-0 w-[160px] sm:w-[230px] md:w-[290px] lg:w-[330px]">
        <Image
          src={`/images/philosophy-mascot/tema-${theme}/left-bush.png`}
          alt="Bushes"
          width={330}
          height={200}
          className="object-contain object-left-bottom"
        />
      </div>

      {/* Bottom Left Wooden Sign Asset (Shifted down further) */}
      <div className="pointer-events-none absolute left-4 sm:left-10 md:left-14 bottom-1 sm:bottom-3 md:bottom-5 z-5 w-[170px] sm:w-[230px] md:w-[280px] lg:w-[320px]">
        <Image
          src={`/images/philosophy-mascot/tema-${theme}/left-sign.png`}
          alt="Theme Sign"
          width={320}
          height={240}
          className="object-contain"
        />
      </div>

      {/* POPUP MODAL DIALOG FOR PART PHILOSOPHY */}
      <AnimatePresence>
        {activeModalPart && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-left shadow-2xl border border-white/60"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={spring}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalPart(null)}
                className="absolute top-5 right-5 grid size-9 place-items-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 active:scale-95"
              >
                <X className="size-5" />
              </button>

              {/* Category Badge */}
              <span className="inline-block rounded-full bg-[#4A00C2]/10 px-3.5 py-1 text-xs font-bold text-[#4A00C2] uppercase tracking-wider">
                {activeModalPart.badge} · Tema {theme === "kajian" ? "Kajian" : "Funrun"}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-[#4A00C2]">
                {activeModalPart.title}
              </h3>

              {/* Description Body */}
              <p className="mt-4 font-subheadline text-base sm:text-lg leading-relaxed text-[#2B2B2B]">
                {activeModalPart.description}
              </p>

              {/* Modal Footer Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActiveModalPart(null)}
                  className="rounded-full bg-[#4A00C2] px-6 py-2.5 font-heading text-sm font-bold text-white shadow-md transition-all hover:bg-[#3A008D] active:scale-95"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
