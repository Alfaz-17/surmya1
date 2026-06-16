"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Waves,
  Dumbbell,
  TreePine,
  Baby,
  ShieldCheck,
  Route,
  CarFront,
} from "lucide-react";

const amenities = [
  { icon: Building2, title: "Club House", description: "A modern clubhouse for social gatherings, events, and leisure" },
  { icon: Waves, title: "Swimming Pool", description: "A refreshing swimming pool for relaxation and fitness" },
  { icon: Dumbbell, title: "Gymnasium", description: "Fully equipped gym with modern fitness equipment" },
  { icon: TreePine, title: "Landscaped Garden", description: "Beautiful gardens for peaceful walks and relaxation" },
  { icon: Baby, title: "Children Play Area", description: "Safe and fun play zones for children of all ages" },
  { icon: ShieldCheck, title: "24x7 Security", description: "Round-the-clock security with CCTV and guard patrol" },
  { icon: Route, title: "Wide Internal Roads", description: "Spacious, well-maintained roads for easy commuting" },
  { icon: CarFront, title: "Parking Area", description: "Ample dedicated parking for residents and visitors" },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-accent mb-3 sm:mb-4 block">
            What We Offer
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl mb-3 sm:mb-4 text-white">
            World-Class Amenities
          </h2>
          <p className="text-white/70 tracking-wide max-w-lg mx-auto text-sm sm:text-base">
            Enjoy premium facilities designed for comfort, health, and
            recreation — crafted to elevate your daily living experience.
          </p>
        </motion.div>

        {/* Amenity Grid — 2 cols on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-primary p-5 sm:p-8 lg:p-10 group hover:bg-white active:bg-white transition-colors duration-500 cursor-pointer"
            >
              <amenity.icon className="w-6 sm:w-8 h-6 sm:h-8 text-accent mb-3 sm:mb-6 stroke-[1.5] group-hover:text-primary group-active:text-primary transition-colors duration-500" />
              <h3 className="text-[10px] sm:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-1.5 sm:mb-3 text-white group-hover:text-primary group-active:text-primary transition-colors duration-500">
                {amenity.title}
              </h3>
              <p className="text-[11px] sm:text-sm text-white/70 leading-relaxed group-hover:text-muted-foreground group-active:text-muted-foreground transition-colors duration-500 hidden sm:block">
                {amenity.description}
              </p>
              {/* Accent line */}
              <div className="w-0 group-hover:w-full group-active:w-full h-[2px] bg-accent mt-3 sm:mt-6 transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
