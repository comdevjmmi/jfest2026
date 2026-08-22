import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-gradient-to-r from-[#5B39D9] via-[#7B52F2] to-[#9D71FB] py-6 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-12 md:px-16">
        {/* Left Side: Footer Logo + Brand Name */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative size-8 sm:size-10 shrink-0">
            <Image
              src="/images/footer/logo.png"
              alt="J-FEST 2026 Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            J-FEST 2026
          </span>
        </div>

        {/* Right Side: Copyright Text */}
        <p className="font-subheadline text-sm sm:text-base font-medium text-white/90">
          © 2026 JMMI ITS.
        </p>
      </div>
    </footer>
  );
}
