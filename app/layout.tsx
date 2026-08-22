import type { Metadata } from "next";
import { Baloo_2, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-subheadline",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "J-FEST 2026 — Menebar Manfaat, Melangkah Sehat, Menggapai Syafaat",
  description:
    "J-FEST (JMMI Festival) 2026 hadir sebagai wadah kolaborasi pemuda untuk menyatukan semangat spiritualitas dengan energi fisik yang membara.",
  keywords: [
    "J-FEST 2026",
    "JMMI ITS",
    "Fun Run",
    "Kajian Islam",
    "Festival Pemuda Muslim",
    "Milad 37 JMMI",
    "Aksa Maskot JFest",
  ],
  authors: [{ name: "JMMI ITS" }],
  creator: "JMMI ITS",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "J-FEST 2026 — Menebar Manfaat, Melangkah Sehat, Menggapai Syafaat",
    description:
      "J-FEST (JMMI Festival) 2026 hadir sebagai wadah kolaborasi pemuda untuk menyatukan semangat spiritualitas dengan energi fisik yang membara.",
    url: "https://jfest2026.com",
    siteName: "J-FEST 2026",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J-FEST 2026 — JMMI Festival Milad Ke-37",
    description:
      "Menebar Manfaat, Melangkah Sehat, Menggapai Syafaat. Kolaborasi pemuda, kajian islam & fun run.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${baloo2.variable} ${bricolageGrotesque.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

