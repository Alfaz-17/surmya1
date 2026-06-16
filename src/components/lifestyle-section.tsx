"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sun, Users, Sparkles } from "lucide-react";

export function LifestyleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/unnamed%20(1).webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary mb-6 block">
              Life at Suramya 1
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl text-white mb-8 leading-[1.15] text-balance">
              Experience Community
              <br />
              Living
            </h2>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              Experience a calm and connected lifestyle where families enjoy
              safety, comfort, greenery, and community celebrations together.
            </p>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Suramya 1 is built to provide a modern yet peaceful living
              experience for all generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 lg:gap-20">
              {[
                { icon: Heart, title: "Family First", label: "Safe Spaces" },
                { icon: Sun, title: "Morning Bliss", label: "Fresh Air" },
                { icon: Users, title: "Community", label: "Events & Culture" },
                { icon: Sparkles, title: "Premium", label: "Elevated Living" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <item.icon className="w-8 h-8 text-primary/80 mb-4 stroke-[1.5]" />
                  <span className="font-serif text-2xl lg:text-3xl text-primary block mb-2">
                    {item.title}
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/50">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
