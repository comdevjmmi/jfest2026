"use client";

import { useRef, type ReactNode } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { MascotPhilosophy } from "@/components/MascotPhilosophy";
import { Countdown } from "@/components/Countdown";
import { Activities } from "@/components/Activities";
import { Timeline } from "@/components/Timeline";
import { SupportedBy } from "@/components/SupportedBy";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  ArrowRight,
  Flame,
  Leaf,
  Medal,
  CalendarDays,
  MapPin,
  Sparkles,
  Trophy,
  Zap,
  Music,
  Utensils,
  HeartPulse,
  Quote,
} from "lucide-react";

const stats = [
  { value: "3 Hari", label: "Festival Berlangsung" },
  { value: "40+", label: "Sesi & Workshop" },
  { value: "25+", label: "Kategori Olahraga" },
  { value: "10K+", label: "Peserta" },
];

const programs = [
  {
    icon: Medal,
    title: "Kompetisi Juara",
    desc: "Bersaing di 25+ cabang olahraga dengan sistem poin, klasemen real-time, dan hadiah bergengsi.",
    tag: "ENERGI",
  },
  {
    icon: Leaf,
    title: "Ruang Tenang",
    desc: "Sesi meditasi, yoga, dan refleksi terbimbing untuk menyeimbangkan tubuh dan jiwa.",
    tag: "SPIRITUAL",
  },
  {
    icon: HeartPulse,
    title: "Pusat Kebugaran",
    desc: "Zona latihan fungsional, uji kebugaran, dan konsultasi nutrisi bersama praktisi.",
    tag: "AKTIF",
  },
  {
    icon: Music,
    title: "Panggung Hiburan",
    desc: "Penampilan live music, komunitas seni, dan pertunjukan budaya yang membakar semangat.",
    tag: "MERIAH",
  },
  {
    icon: Utensils,
    title: "Pasar Rasa",
    desc: "Pilihan makanan sehat dan kuliner khas Nusantara dari UMKM pilihan.",
    tag: "RASA",
  },
  {
    icon: Sparkles,
    title: "Komunitas & Umum",
    desc: "Zona komunitas, sharing session inspiratif, dan area bermain untuk seluruh keluarga.",
    tag: "BERSAMA",
  },
];

const schedule = [
  { time: "07:00", title: "Sambutan & Doa Bersama", kind: "SPIRITUAL" },
  { time: "08:30", title: "Lari 5K Pembuka", kind: "ENERGI" },
  { time: "10:00", title: "Yoga di Ruang Terbuka", kind: "TENANG" },
  { time: "13:00", title: "Final Futsal & Voli", kind: "JUARA" },
  { time: "16:00", title: "Sharing Session Inspiratif", kind: "BERSAMA" },
  { time: "19:00", title: "Konser Penutup", kind: "MERIAH" },
];

const testimonials = [
  {
    quote:
      "Saya datang untuk bertanding, pulang membawa kedamaian. Kombinasi yang jarang ditemukan.",
    name: "Raka Prasetya",
    role: "Atlet Futsal",
  },
  {
    quote:
      "Sesi meditasinya mengubah cara saya memandang persiapan kompetisi. Sangat menenangkan.",
    name: "Dewi Lestari",
    role: "Peserta Yoga",
  },
];

const spring = { type: "spring", bounce: 0, duration: 0.5 } as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...spring, delay }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-peri-blue font-sans text-ink">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <MascotPhilosophy />
      <Countdown />
      <Activities />
      <Timeline />
      <SupportedBy />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}



function StatsStrip() {
  return (
    <section className="relative z-10 bg-gradient-to-r from-deep-violet via-violet-primary to-ember pt-8 sm:pt-12 md:pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-12 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="px-4 py-4 text-center text-white">
              <p className="font-heading text-3xl font-extrabold md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-xs tracking-widest text-white/80 uppercase">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="program" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-vibrant-pink/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-ember uppercase">
              Program Unggulan
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.02em] text-balance md:text-4xl">
              Satu Festival, Dua Energi
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg text-ink-soft">
              Rangkaian kegiatan dirancang untuk menguatkan fisik dan menenangkan
              batin.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <motion.div
              key={p.title}
              className="group rounded-xl border border-white/20 bg-white/60 p-6 shadow-lg shadow-violet-container/5 backdrop-blur-md"
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={spring}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.1 }}
              >
                <motion.span
                  className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-deep-violet to-ember text-white shadow-[0_6px_16px_rgba(99,32,238,0.35)]"
                  whileHover={{ scale: 1.1, rotate: -6 }}
                >
                  <p.icon className="size-5" />
                </motion.span>
                <span className="font-mono text-[10px] font-medium tracking-widest text-ink-soft">
                  {p.tag}
                </span>
              </motion.div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const reduced = useReducedMotion();

  return (
    <section id="jadwal" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-warm-cream to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-violet-primary uppercase">
              Satu Hari Bersama JFEST
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.02em] text-balance md:text-4xl">
              Alur Energimu
            </h2>
          </Reveal>
        </div>
        <div className="relative mt-14" ref={lineRef}>
          <motion.div
            className="absolute left-4 top-0 h-full w-1 rotate-6 rounded-full bg-gradient-to-b from-deep-violet via-ember to-teal-primary md:left-1/2"
            style={{ scaleY: reduced ? 1 : scaleY, originY: 0 }}
          />
          <div className="space-y-8">
            {schedule.map((item, i) => (
              <div
                key={item.time}
                className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:text-left"
                  }`}
              >
                <motion.div
                  className="absolute left-4 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-gradient-to-br from-deep-violet to-ember shadow-[0_0_12px_rgba(99,32,238,0.6)] md:left-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.05 }}
                />
                <div className="w-10 md:w-1/2" />
                <motion.div
                  className="ml-10 flex-1 rounded-xl border border-white/20 bg-white/70 p-5 shadow-lg shadow-violet-container/5 backdrop-blur-md md:ml-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...spring, delay: i * 0.05 }}
                >
                  <p className="font-mono text-xs font-semibold tracking-widest text-ember">
                    {item.time} · {item.kind}
                  </p>
                  <h3 className="mt-1 font-heading text-base font-semibold">{item.title}</h3>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="rounded-xl border border-white/20 bg-white/60 p-8 shadow-lg shadow-violet-container/5 backdrop-blur-md">
              <Quote className="size-7 text-ember" />
              <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-violet-primary to-teal-primary font-heading text-sm font-bold text-white">
                  {t.name[0]}
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold">{t.name}</p>
                  <p className="font-mono text-xs text-ink-soft">{t.role}</p>
                </div>
              </figcaption>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const reduced = useReducedMotion();

  return (
    <section id="tiket" className="px-6 py-24">
      <motion.div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-deep-violet via-violet-primary to-ember p-10 text-center text-white shadow-[0_24px_60px_rgba(99,32,238,0.4)] md:p-16"
        initial={{ opacity: 0, y: 40, scale: reduced ? 1 : 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={spring}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.25),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(80,230,202,0.25),transparent_50%)]" />
        <div className="relative">
          <motion.span
            className="mx-auto grid size-14 place-items-center rounded-full bg-white/15 backdrop-blur-sm"
            animate={reduced ? undefined : { rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Flame className="size-7 text-spiritual-gold" />
          </motion.span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl">
            Siap Menjadi Juara Sejati?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Tiket Early Bird tersedia hingga 31 Juli 2026. Amankan tempatmu di
            garis start.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-violet-primary active:scale-95"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="size-4" /> Beli Tiket
            </motion.a>
            <motion.a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 active:scale-95"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Panitia
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

