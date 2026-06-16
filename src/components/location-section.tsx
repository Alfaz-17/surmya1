"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Building2,
  Navigation,
} from "lucide-react";

const nearbyPlaces = [
  { icon: Navigation, title: "SG Highway", distance: "2 min", description: "Direct connectivity to the main arterial road" },
  { icon: GraduationCap, title: "Schools & Colleges", distance: "5 min", description: "Top educational institutions nearby" },
  { icon: Hospital, title: "Hospitals", distance: "7 min", description: "Multi-speciality hospitals for healthcare" },
  { icon: ShoppingBag, title: "Shopping Areas", distance: "5 min", description: "Malls, markets, and retail stores" },
  { icon: Building2, title: "Business Hubs", distance: "10 min", description: "IT parks and corporate offices" },
  { icon: MapPin, title: "Shantigram", distance: "3 min", description: "Close to Shantigram township" },
];

export function LocationSection() {
  return (
    <section id="location" className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            Find Us
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            Prime Location Advantage
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-lg mx-auto">
            Located near SG Highway and Shantigram, Suramya 1 offers excellent
            connectivity to Ahmedabad and Gandhinagar while maintaining a
            peaceful residential atmosphere.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2!2d72.5!3d23.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suramya 1 Location"
              className="w-full"
            />
          </motion.div>

          {/* Nearby Connectivity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {nearbyPlaces.map((place, index) => (
              <motion.div
                key={place.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-6 group hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <place.icon className="w-6 h-6 text-primary/80 flex-shrink-0 stroke-[1.5] mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-black uppercase tracking-wide">
                        {place.title}
                      </h3>
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase text-primary font-bold block mb-1">
                      {place.distance} drive
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {place.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
