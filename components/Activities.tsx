"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Flame, HeartHandshake, BookOpen, ArrowRight, X, CheckCircle2 } from "lucide-react";

const spring = { type: "spring", bounce: 0.15, duration: 0.6 } as const;

// =========================================================================
// CONFIGURE REGISTER LINKS IN HERE:
// Change the `registerUrl` values below to redirect to any registration site!
// =========================================================================
interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badgeBg: string;
  badgeIcon: any;
  pillBg: string;
  pillText: string;
  btnBg: string;
  date: string;
  location: string;
  registerUrl: string; // <-- Change registration URL link here
}

const activities: Activity[] = [
  {
    id: "funrun",
    title: "Fun Run 5K",
    category: "Olahraga",
    description:
      "Berlari bersama menyusuri rute ikonik kota, kumpulkan energi, dan raih medali kebanggaan.",
    image: "/images/card/card-funrun.png",
    badgeBg: "bg-[#FF8A00]",
    badgeIcon: Flame,
    pillBg: "bg-[#E2F9F0]",
    pillText: "text-[#10B981]",
    btnBg: "bg-[#FF7E1D] hover:bg-[#e06910]",
    date: "12 September 2026",
    location: "Kampus ITS Surabaya",
    registerUrl: "https://jfest2026.com/register/funrun", // <-- Fun Run registration link
  },
  {
    id: "donor",
    title: "Aksi Donor Darah",
    category: "Sosial",
    description:
      "Setetes darahmu menyelamatkan nyawa. Wujud nyata kepedulian sosial untuk sesama.",
    image: "/images/card/card-donor-darah.png",
    badgeBg: "bg-[#FF4D79]",
    badgeIcon: HeartHandshake,
    pillBg: "bg-[#FFE6EC]",
    pillText: "text-[#FF4D79]",
    btnBg: "bg-[#FF4D79] hover:bg-[#e63662]",
    date: "12 September 2026",
    location: "Gedung Pusat Robotika ITS",
    registerUrl: "https://jfest2026.com/register/donor", // <-- Donor Darah registration link
  },
  {
    id: "kajian",
    title: "Kajian Inspiratif",
    category: "Spiritual",
    description:
      "Penuhi asupan spiritual dengan sesi talkshow inspiratif dari narasumber ternama.",
    image: "/images/card/card-kajian.png",
    badgeBg: "bg-[#6320EE]",
    badgeIcon: BookOpen,
    pillBg: "bg-[#EAE3FF]",
    pillText: "text-[#6320EE]",
    btnBg: "bg-[#6320EE] hover:bg-[#4d16c5]",
    date: "12 September 2026",
    location: "Masjid Manarul Ilmi ITS",
    registerUrl: "https://jfest2026.com/register/kajian", // <-- Kajian registration link
  },
];

export function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleRegisterClick = (act: Activity) => {
    setSelectedActivity(act);
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="kegiatan"
      className="relative z-10 w-full overflow-hidden bg-white pt-20 sm:pt-28 md:pt-32 pb-24 sm:pb-32 md:pb-40"
    >
      {/* Top Left Hanging ID Card / Tag Asset (Flush left, 0 margin/padding) */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 w-[120px] sm:w-[190px] md:w-[250px] lg:w-[280px]">
        <Image
          src="/images/activities/top-left-tag.png"
          alt="ID Tag Decor"
          width={280}
          height={320}
          className="object-contain object-left-top"
        />
      </div>

      {/* Top Right Hanging Medal Asset (Flush right, 0 margin/padding) */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 w-[130px] sm:w-[200px] md:w-[260px] lg:w-[300px]">
        <Image
          src="/images/activities/top-right-medal.png"
          alt="Medal Decor"
          width={300}
          height={340}
          className="object-contain object-right-top"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        {/* Section Header: Rangkaian Kegiatan */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A00C2] tracking-tight">
            Rangkaian Kegiatan
          </h2>
        </motion.div>

        {/* 3 Activity Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {activities.map((act, index) => {
            const Icon = act.badgeIcon;
            return (
              <motion.div
                key={act.id}
                className="group flex flex-col justify-between rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#4A00C2]/15"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...spring, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                {/* Upper Image Container with Badge */}
                <div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Badge Icon on Image Bottom-Left */}
                    <div
                      className={`absolute left-5 bottom-5 flex size-11 sm:size-12 items-center justify-center rounded-2xl ${act.badgeBg} text-white shadow-lg`}
                    >
                      <Icon className="size-6 sm:size-7" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F]">
                      {act.title}
                    </h3>
                    <p className="mt-3 font-subheadline text-base text-[#5A5A5A] leading-relaxed">
                      {act.description}
                    </p>

                    {/* Category Tag Pill */}
                    <div className="mt-5 flex items-center">
                      <span
                        className={`inline-block rounded-full px-4 py-1.5 font-subheadline text-sm font-bold ${act.pillBg} ${act.pillText}`}
                      >
                        {act.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action: Easy-to-edit External Redirect Registration Link */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <a
                    href={act.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-2xl ${act.btnBg} text-white font-heading font-extrabold text-base sm:text-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 group/btn`}
                  >
                    <span>Daftar Sekarang</span>
                    <ArrowRight className="size-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Registration Modal Popup */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
            />

            {/* Modal Dialog Box */}
            <motion.div
              className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl overflow-hidden border border-slate-100"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={spring}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              >
                <X className="size-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block rounded-full px-3.5 py-1 font-subheadline text-xs font-bold ${selectedActivity.pillBg} ${selectedActivity.pillText}`}
                    >
                      Pendaftaran {selectedActivity.category}
                    </span>
                  </div>

                  <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-black text-[#1F1F1F]">
                    {selectedActivity.title}
                  </h3>

                  <p className="mt-1 font-subheadline text-sm text-[#666666]">
                    📅 {selectedActivity.date} &nbsp;•&nbsp; 📍 {selectedActivity.location}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block font-subheadline text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Ahmad Fauzi"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#4A00C2] focus:outline-none focus:ring-2 focus:ring-[#4A00C2]/20"
                      />
                    </div>

                    <div>
                      <label className="block font-subheadline text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        No. WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="081234567890"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#4A00C2] focus:outline-none focus:ring-2 focus:ring-[#4A00C2]/20"
                      />
                    </div>

                    <div>
                      <label className="block font-subheadline text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email (Opsional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#4A00C2] focus:outline-none focus:ring-2 focus:ring-[#4A00C2]/20"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`mt-4 w-full py-3.5 px-6 rounded-2xl ${selectedActivity.btnBg} text-white font-heading font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2`}
                    >
                      <span>Konfirmasi Pendaftaran</span>
                      <ArrowRight className="size-5" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h4 className="font-heading text-2xl font-black text-slate-900">
                    Pendaftaran Berhasil!
                  </h4>
                  <p className="mt-2 font-subheadline text-sm text-slate-600">
                    Terima kasih, <span className="font-bold text-slate-800">{formData.name}</span>! Tiket pendaftaran Anda untuk{" "}
                    <span className="font-bold text-[#4A00C2]">{selectedActivity.title}</span> telah terkonfirmasi.
                  </p>

                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="mt-6 w-full py-3 px-6 rounded-2xl bg-slate-900 text-white font-heading font-bold text-sm hover:bg-slate-800 transition-colors"
                  >
                    Tutup Modal
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
