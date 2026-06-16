"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero_hd.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-primary mb-4 sm:mb-6 block font-bold drop-shadow-md">
              Premium Residential Community
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white mb-6 sm:mb-8 leading-[1.2] text-balance font-bold drop-shadow-2xl">
              Welcome to
              <br />
              Suramya 1
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-2 font-medium drop-shadow-md">
              A peaceful and premium residential community designed for modern
              family living surrounded by greenery and comfort.
            </p>

            {/* CTA Buttons — stacked on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a
                href="#about"
                className="w-full sm:w-auto text-center text-[10px] font-black uppercase tracking-[0.2em] px-8 sm:px-10 py-4 bg-primary text-white hover:bg-primary/90 transition-all"
              >
                Explore Society
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center text-[10px] font-black uppercase tracking-[0.2em] px-8 sm:px-10 py-4 border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </a>
            </div>

            {/* Stats — 2x2 on mobile, 4 across on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 lg:gap-20 mt-12 sm:mt-20">
              {[
                { value: "200+", label: "Happy Families" },
                { value: "10+", label: "Amenities" },
                { value: "24/7", label: "Security" },
                { value: "100%", label: "Green Living" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="font-serif text-2xl sm:text-3xl lg:text-5xl text-primary block mb-1 sm:mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-xs tracking-[0.2em] uppercase text-white/50">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — visible on all screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-black">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
