"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const spring = { type: "spring", bounce: 0, duration: 0.5 } as const;

// Animated Circle Light Orbs (3 Lights: Left of Title, Right of Title [Bigger], Bottom Left [Tiny])
const circleLights = [
  // 1. Left side of Title (Shifted further left on mobile)
  { id: 1, top: "32%", left: "14%", smLeft: "32%", size: 95, duration: 3.5, delay: 0 },
  // 2. Right side of Title (Bigger scale, shifted down)
  { id: 2, top: "28%", left: "59%", smLeft: "59%", size: 155, duration: 4.2, delay: 0.8 },
  // 3. Bottom Left (Tiny scale)
  { id: 3, top: "52%", left: "6%", smLeft: "6%", size: 38, duration: 3.8, delay: 1.5 },
];

// Dynamic Twinkling Star that repositions to a new random spot on every fade cycle
function RandomTwinklingStar({ id, delay }: { id: number; delay: number }) {
  const [cycle, setCycle] = useState(0);
  const [pos, setPos] = useState({ top: "12%", left: "20%", size: 24 });

  useEffect(() => {
    const randomTop = Math.floor(Math.random() * 42 + 5) + "%";
    const randomLeft = Math.floor(Math.random() * 85 + 5) + "%";
    const randomSize = Math.floor(Math.random() * 12 + 18);
    setPos({ top: randomTop, left: randomLeft, size: randomSize });
  }, [cycle]);

  const handleCycleComplete = () => {
    setCycle((prev) => prev + 1);
  };

  return (
    <motion.div
      key={cycle}
      className="absolute pointer-events-none"
      style={{ top: pos.top, left: pos.left, width: pos.size, height: pos.size }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.4, 1.2, 0.4],
      }}
      transition={{
        duration: 2.4 + (id % 3) * 0.6,
        delay: cycle === 0 ? delay : Math.random() * 0.8,
        ease: "easeInOut",
      }}
      onAnimationComplete={handleCycleComplete}
    >
      <Image
        src="/images/hero/animate-star/star.png"
        alt="Star"
        fill
        className="object-contain"
        priority={false}
      />
    </motion.div>
  );
}

// Pure CSS Animated Shooting Stars (Falling from top-left to bottom-right)
const shootingStars = [
  { id: 1, top: "8%", left: "15%", angle: 35, length: 160, duration: 2.4, repeatDelay: 3.2 },
  { id: 2, top: "16%", left: "45%", angle: 40, length: 190, duration: 2.0, repeatDelay: 5.5 },
  { id: 3, top: "4%", left: "70%", angle: 38, length: 140, duration: 2.6, repeatDelay: 7.0 },
];

// Hardware-Accelerated Silky-Smooth Glowing Crescent Moon
function GlowingMoon() {
  return (
    <div className="pointer-events-none absolute top-28 right-6 sm:top-20 sm:right-16 md:top-24 md:right-24 z-10 size-16 sm:size-24 md:size-28">
      {/* 1. GPU-Accelerated Soft Glowing Aura Layer */}
      <motion.div
        className="absolute -inset-4 rounded-full bg-[#50E6CA]/35 blur-xl will-change-transform"
        animate={{
          opacity: [0.25, 0.85, 0.25],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 2. Moon Asset Image with Smooth Dimming & Micro-Float */}
      <motion.div
        className="relative size-full will-change-transform"
        animate={{
          opacity: [0.75, 1, 0.75],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/animate-star/moon.png"
          alt="Moon"
          fill
          className="object-contain drop-shadow-[0_0_12px_rgba(80,230,202,0.5)]"
          priority
        />
      </motion.div>
    </div>
  );
}

function HeroSkyAnimations({ reduced }: { reduced: boolean | null }) {
  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* 0. Luminous Glowing Crescent Moon */}
      <GlowingMoon />

      {/* 1. Circle Light Orbs (Fading in and out individually) */}
      {circleLights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute pointer-events-none"
          style={{ top: light.top, left: light.left, width: light.size, height: light.size }}
          initial={{ opacity: 0.2, scale: 0.85 }}
          animate={{ opacity: [0.15, 0.95, 0.15], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: light.duration,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero/animate-star/circle-light.png"
            alt="Circle Light"
            fill
            className="object-contain opacity-90"
            priority={false}
          />
        </motion.div>
      ))}

      {/* 2. Dynamic Twinkling Stars (Repositioning to new spots on each fade cycle) */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <RandomTwinklingStar key={i} id={i} delay={i * 0.6} />
      ))}

      {/* 3. Pure CSS Animated Shooting Stars (Falling diagonally from top-left to bottom-right) */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className="absolute pointer-events-none origin-top-left"
          style={{
            top: ss.top,
            left: ss.left,
            transform: `rotate(${ss.angle}deg)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{
              x: [0, 550],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: ss.duration,
              repeat: Infinity,
              repeatDelay: ss.repeatDelay,
              ease: "linear",
            }}
          >
            <div
              className="relative h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#FFF39D] to-white shadow-[0_0_12px_#FFF39D,0_0_24px_rgba(255,255,255,0.9)]"
              style={{ width: `${ss.length}px` }}
            >
              {/* Luminous Star Head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 rounded-full bg-white shadow-[0_0_12px_4px_#FFFFFF,0_0_24px_8px_#FFB830]" />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle parallax offsets
  const parallaxGlow = useTransform(scrollY, [0, 500], [0, 60]);
  const parallaxMountains = useTransform(scrollY, [0, 500], [0, 30]);

  return (
    <section className="relative z-20 min-h-[90vh] w-full overflow-x-clip bg-gradient-to-br from-[#9B7DFF] via-[#7B52F2] to-[#4320B2] pt-36 pb-20 md:pt-32 md:pb-28">
      {/* Animated Sky Elements (Circle Lights, Twinkling Stars, Shooting Stars) */}
      <HeroSkyAnimations reduced={reduced} />

      {/* Mountains (Midground Landscape) */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex items-end justify-between px-0 opacity-95"
        style={{ y: reduced ? 0 : parallaxMountains }}
      >
        <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[580px] w-[54%] -ml-4 scale-100 sm:scale-110 md:scale-120 lg:scale-125 origin-bottom-left transition-transform">
          <Image
            src="/images/hero/left-mountain.png"
            alt="Left Mountain"
            fill
            className="object-contain object-bottom-left"
            priority
          />
        </div>
        <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[580px] w-[54%] -mr-4 scale-100 sm:scale-110 md:scale-120 lg:scale-125 origin-bottom-right transition-transform">
          <Image
            src="/images/hero/right-mountain.png"
            alt="Right Mountain"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>
      </motion.div>

      {/* Center Focal Point: Glow Orbs + Tag Banner + Title Text (Shifted down on mobile) */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-28 sm:pt-14 md:pt-16">
        <div className="relative flex w-full items-center justify-center">
          {/* Gradient L2 (Outer Radiant Sun Disk) */}
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[440px] sm:size-[640px] md:size-[840px] lg:size-[980px] opacity-95 scale-50 sm:scale-20 md:scale-30 lg:scale-40 origin-center transition-transform"
            style={{ y: reduced ? 0 : parallaxGlow }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ ...spring, duration: 0.8 }}
          >
            <Image
              src="/images/hero/center-gradient-l2.png"
              alt="Hero Glow L2"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Gradient L1 (Inner Sun Core Glow) */}
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[320px] sm:size-[480px] md:size-[640px] lg:size-[760px] opacity-95 scale-90 sm:scale-60 md:scale-70 lg:scale-80 origin-center transition-transform"
            style={{ y: reduced ? 0 : parallaxGlow }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ ...spring, duration: 0.8 }}
          >
            <Image
              src="/images/hero/center-gradient-l1.png"
              alt="Hero Glow L1"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Scaled Title Typography with Motion Animations */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center scale-70 sm:scale-60 md:scale-80 lg:scale-90 origin-center transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={
              reduced
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [0, -8, 0] }
            }
            transition={
              reduced
                ? { ...spring, delay: 0.1 }
                : { y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 } }
            }
          >
            <div className="relative flex items-center justify-center">
              {/* Separate Typography Stack Rotation */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center select-none pt-4 rotate-3 space-y-0">
                {/* 1. JMMI */}
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.15 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 select-none font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold tracking-widest text-white [-webkit-text-stroke:14px_#FFFFFF] [paint-order:stroke_fill] leading-[0.92]"
                  >
                    JMMI
                  </span>
                  <span className="relative z-10 font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold tracking-widest text-[#FF8A2A] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] leading-[0.92]">
                    JMMI
                  </span>
                </motion.div>

                {/* 2. FESTIVAL */}
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...spring, delay: 0.25 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 select-none font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black tracking-wider text-white [-webkit-text-stroke:14px_#FFFFFF] [paint-order:stroke_fill] leading-[0.92]"
                  >
                    FESTIVAL
                  </span>
                  <span className="relative z-10 font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black tracking-wider bg-gradient-to-r from-[#FFF39D] via-[#FFB830] to-[#FF8A2A] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] leading-[0.92]">
                    FESTIVAL
                  </span>
                </motion.div>

                {/* 3. 2026 */}
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.35 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 select-none font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold tracking-[0.2em] text-white [-webkit-text-stroke:14px_#FFFFFF] [paint-order:stroke_fill] leading-[0.92]"
                  >
                    2026
                  </span>
                  <span className="relative z-10 font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold tracking-[0.2em] text-[#FFD96B] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] leading-[0.92]">
                    2026
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Foreground Elements (Mosque, Trees, Bamboo) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-30 flex items-end justify-between pl-0 pr-2 sm:pr-6">
        {/* Left Side: Trees */}
        <div className="relative flex items-end -ml-2 sm:-ml-4 md:-ml-6">
          <div className="relative h-[190px] sm:h-[280px] md:h-[370px] lg:h-[420px] w-[160px] sm:w-[250px] md:w-[330px] lg:w-[380px] scale-100 sm:scale-105 md:scale-110 origin-bottom-left transition-transform">
            <Image
              src="/images/hero/left-tree.png"
              alt="Left Tree"
              fill
              className="object-contain object-bottom-left"
              priority
            />
          </div>
        </div>

        {/* Right Side: Mosque, Bamboo */}
        <div className="relative flex items-end justify-end">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] w-[240px] sm:w-[360px] md:w-[480px] lg:w-[560px] scale-105 sm:scale-115 md:scale-125 origin-bottom-right transition-transform">
            <Image
              src="/images/hero/right-mosque.png"
              alt="Right Mosque"
              fill
              className="object-contain object-bottom-right"
              priority
            />
          </div>
          <div className="relative -ml-16 h-[160px] sm:h-[240px] md:h-[310px] w-[80px] sm:w-[120px] md:w-[160px]">
            <Image
              src="/images/hero/right-bamboo.png"
              alt="Right Bamboo"
              fill
              className="object-contain object-bottom-right"
              priority
            />
          </div>
        </div>
      </div>

      {/* 5. Bottom Track Strip (Overlaying Half Onto Next Section) */}
      <div className="pointer-events-none absolute -left-[6%] bottom-0 z-50 h-[50px] sm:h-[75px] md:h-[100px] lg:h-[120px] w-[112%] translate-y-1/2 scale-x-110 sm:scale-x-115 md:scale-x-120 origin-center transition-transform">
        <Image
          src="/images/hero/bottom-track.png"
          alt="Bottom Track"
          fill
          className="object-fill object-bottom"
          priority
        />
      </div>

      {/* 6. Frontmost Bushes Layer (Aligned At Top Edge Of Running Track) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 sm:bottom-9 md:bottom-12 z-[60] flex items-end justify-between pl-0 pr-2 sm:pr-6">
        {/* Left Bush */}
        <div className="relative h-[110px] sm:h-[165px] md:h-[215px] lg:h-[245px] w-[110px] sm:w-[165px] md:w-[215px] lg:w-[245px] ml-[50px] sm:ml-[90px] md:ml-[130px] scale-100 sm:scale-105 md:scale-110 origin-bottom-left transition-transform">
          <Image
            src="/images/hero/left-bush.png"
            alt="Left Bush"
            fill
            className="object-contain object-bottom-left"
            priority
          />
        </div>

        {/* Right Bush */}
        <div className="relative h-[80px] sm:h-[120px] md:h-[160px] w-[70px] sm:w-[110px] md:w-[140px]">
          <Image
            src="/images/hero/right-bush.png"
            alt="Right Bush"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
