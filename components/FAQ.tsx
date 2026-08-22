"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const spring = { type: "spring", bounce: 0.15, duration: 0.6 } as const;

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Kapan dan di mana J-FEST 2026 diadakan?",
    answer:
      "J-FEST 2026 akan diselenggarakan pada tanggal 12 - 13 September 2026 berlokasi di area Kampus Institut Teknologi Sepuluh Nopember (ITS) Surabaya.",
  },
  {
    id: 2,
    question: "Apakah acara ini gratis?",
    answer:
      "Sebagian besar rangkaian kegiatan J-FEST 2026 seperti Kajian Inspiratif dan Aksi Donor Darah bersifat gratis dan terbuka untuk umum. Untuk kegiatan Fun Run 5K terdapat biaya pendaftaran yang sudah mencakup Jersey eksklusif, Nomor BIB, Medali Finisher, dan Refreshment.",
  },
  {
    id: 3,
    question: "Bagaimana cara mendaftar kegiatan J-FEST 2026?",
    answer:
      "Anda dapat mendaftar dengan menekan tombol 'Daftar Sekarang' pada kartu kegiatan yang diinginkan di bagian Rangkaian Kegiatan, kemudian mengikuti petunjuk pendaftaran online.",
  },
  {
    id: 4,
    question: "Siapa saja yang boleh mengikuti J-FEST 2026?",
    answer:
      "Seluruh lapisan masyarakat umum, mahasiswa, pelajar, serta komunitas running dan keagamaan di seluruh Indonesia dapat berpartisipasi dalam J-FEST 2026.",
  },
  {
    id: 5,
    question: "Kapan dan di mana pengambilan Racepack Fun Run?",
    answer:
      "Pengambilan Racepack (Nomor BIB & Jersey) akan dilaksanakan pada tanggal 7 - 9 September 2026 di Sekretariat JMMI ITS Surabaya. Informasi detail teknis akan disampaikan melalui Kontak Terdaftar.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="relative z-10 w-full overflow-hidden bg-white pt-20 sm:pt-28 md:pt-32 pb-44 sm:pb-56 md:pb-72"
    >
      <div className="relative z-20 mx-auto max-w-4xl px-6">
        {/* Section Header: FAQ */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#4A00C2] tracking-tight">
            FAQ
          </h2>
        </motion.div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...spring, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md overflow-hidden"
              >
                {/* Accordion Header / Question Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-7 text-left font-heading text-lg sm:text-xl md:text-2xl font-bold text-slate-900 focus:outline-none"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div
                    className={`flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#4A00C2]/10 text-[#4A00C2]" : ""
                    }`}
                  >
                    <ChevronDown className="size-5 sm:size-6" />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-0 sm:px-7 sm:pb-7 font-subheadline text-base sm:text-lg text-slate-600 leading-relaxed border-t border-slate-100/80 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
