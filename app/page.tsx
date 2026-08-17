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

export default function Home() {
  return (
    <div className="min-h-screen bg-peri-blue font-sans text-ink">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Programs />
      <Schedule />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-deep-violet to-ember font-heading text-sm font-bold text-white">
            J
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">
            JFEST<span className="text-violet-primary">26</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a href="#program" className="transition-colors hover:text-ink">
            Program
          </a>
          <a href="#jadwal" className="transition-colors hover:text-ink">
            Jadwal
          </a>
          <a href="#tiket" className="transition-colors hover:text-ink">
            Tiket
          </a>
          <a href="#kontak" className="transition-colors hover:text-ink">
            Kontak
          </a>
        </div>
        <a
          href="#tiket"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-deep-violet to-ember px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(99,32,238,0.35)] transition-transform hover:scale-[1.03]"
        >
          Daftar Sekarang <ArrowRight className="size-4" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-violet-container/30 blur-3xl" />
        <div className="absolute right-1/5 top-1/3 h-80 w-80 rounded-full bg-ember/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-primary/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="font-mono text-xs font-medium tracking-[0.25em] text-violet-primary uppercase">
          12–14 September 2026 · Jakarta
        </p>
        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Langkah Spiritual,{" "}
          <span className="bg-gradient-to-r from-deep-violet via-violet-primary to-ember bg-clip-text text-transparent">
            Energi Juara
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          JFEST 2026 menghadirkan perpaduan olahraga kompetitif dan praktik
          mindfulness dalam satu festival. Temukan ketenangan batin dan taklukkan
          tantangan — karena juara sejati lahir dari keseimbangan.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#tiket"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep-violet to-ember px-8 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(254,152,0,0.35)] transition-transform hover:scale-[1.03]"
          >
            Ambil Tiket <ArrowRight className="size-4" />
          </a>
          <a
            href="#program"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-primary/40 bg-white/70 px-8 py-3.5 font-semibold text-teal-deep backdrop-blur-md transition-colors hover:bg-white"
          >
            Lihat Program
          </a>
        </div>
        <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/20 bg-white/60 p-5 text-left shadow-lg shadow-violet-container/5 backdrop-blur-md">
            <CalendarDays className="size-5 text-violet-container" />
            <p className="mt-3 font-heading text-sm font-semibold">Tanggal</p>
            <p className="text-sm text-ink-soft">12–14 September 2026</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/60 p-5 text-left shadow-lg shadow-violet-container/5 backdrop-blur-md">
            <MapPin className="size-5 text-ember" />
            <p className="mt-3 font-heading text-sm font-semibold">Lokasi</p>
            <p className="text-sm text-ink-soft">Jakarta International Stadium</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/60 p-5 text-left shadow-lg shadow-violet-container/5 backdrop-blur-md">
            <Trophy className="size-5 text-spiritual-gold" />
            <p className="mt-3 font-heading text-sm font-semibold">Tema</p>
            <p className="text-sm text-ink-soft">Spiritual & Juara</p>
          </div>
        </div>
      </div>
      <div className="h-16 -skew-y-1 bg-gradient-to-r from-deep-violet via-violet-primary to-ember" />
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-gradient-to-r from-deep-violet via-violet-primary to-ember">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-4 text-center text-white">
            <p className="font-heading text-3xl font-extrabold md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-xs tracking-widest text-white/80 uppercase">
              {s.label}
            </p>
          </div>
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
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-ember uppercase">
            Program Unggulan
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Satu Festival, Dua Energi
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Rangkaian kegiatan dirancang untuk menguatkan fisik dan menenangkan
            batin.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-white/20 bg-white/60 p-6 shadow-lg shadow-violet-container/5 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,215,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-deep-violet to-ember text-white shadow-[0_6px_16px_rgba(99,32,238,0.35)]">
                  <p.icon className="size-5" />
                </span>
                <span className="font-mono text-[10px] font-medium tracking-widest text-ink-soft">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="jadwal" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-warm-cream to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-violet-primary uppercase">
            Satu Hari Bersama JFEST
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Alur Energimu
          </h2>
        </div>
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-1 rotate-6 rounded-full bg-gradient-to-b from-deep-violet via-ember to-teal-primary md:left-1/2" />
          <div className="space-y-8">
            {schedule.map((item, i) => (
              <div
                key={item.time}
                className={`relative flex items-center gap-6 ${
                  i % 2 === 0
                    ? "md:flex-row-reverse md:text-right"
                    : "md:text-left"
                }`}
              >
                <div className="absolute left-4 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-gradient-to-br from-deep-violet to-ember shadow-[0_0_12px_rgba(99,32,238,0.6)] md:left-1/2" />
                <div className="w-10 md:w-1/2" />
                <div className="ml-10 flex-1 rounded-xl border border-white/20 bg-white/70 p-5 shadow-lg shadow-violet-container/5 backdrop-blur-md md:ml-0">
                  <p className="font-mono text-xs font-semibold tracking-widest text-ember">
                    {item.time} · {item.kind}
                  </p>
                  <h3 className="mt-1 font-heading text-base font-semibold">
                    {item.title}
                  </h3>
                </div>
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
            <figure
              key={t.name}
              className="rounded-xl border border-white/20 bg-white/60 p-8 shadow-lg shadow-violet-container/5 backdrop-blur-md"
            >
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
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="tiket" className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-deep-violet via-violet-primary to-ember p-10 text-center text-white shadow-[0_24px_60px_rgba(99,32,238,0.4)] md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.25),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(80,230,202,0.25),transparent_50%)]" />
        <div className="relative">
          <Flame className="mx-auto size-10 text-spiritual-gold" />
          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Siap Menjadi Juara Sejati?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Tiket Early Bird tersedia hingga 31 Juli 2026. Amankan tempatmu di
            garis start.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-violet-primary transition-transform hover:scale-[1.03]"
            >
              <Zap className="size-4" /> Beli Tiket
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hubungi Panitia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontak" className="border-t border-white/20 bg-white/60 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-heading text-lg font-bold">
            JFEST<span className="text-violet-primary">26</span>
          </p>
          <p className="mt-1 max-w-sm text-sm text-ink-soft">
            Langkah Spiritual, Energi Juara. © 2026 Panitia JFEST.
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs tracking-widest text-ink-soft uppercase">
          <a href="#program" className="hover:text-ink">Program</a>
          <a href="#jadwal" className="hover:text-ink">Jadwal</a>
          <a href="#tiket" className="hover:text-ink">Tiket</a>
          <a href="#" className="hover:text-ink">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
