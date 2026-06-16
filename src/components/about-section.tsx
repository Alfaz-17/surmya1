"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, TreePine, Home, Users } from "lucide-react";

const highlights = [
  {
    icon: TreePine,
    title: "Green Living",
    description: "Surrounded by lush landscaped gardens and open green spaces",
  },
  {
    icon: Shield,
    title: "Secure Community",
    description: "Gated society with 24/7 surveillance and security personnel",
  },
  {
    icon: Home,
    title: "Modern Design",
    description: "Thoughtfully designed spaces with contemporary architecture",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "A vibrant community that celebrates togetherness and culture",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary mb-4 sm:mb-6 block">
              Discover Our Community
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 leading-[1.15]">
              About Suramya 1
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
              Suramya 1 is a premium residential community located near
              Shantigram on SG Highway, Gujarat. The society offers a peaceful
              lifestyle with modern amenities, spacious surroundings, and a
              secure environment for families.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12">
              Designed with greenery, wide roads, and community living in mind,
              Suramya 1 creates the perfect balance between comfort and nature.
            </p>

            {/* Highlight cards — single column on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <item.icon className="w-6 h-6 text-primary/80 flex-shrink-0 stroke-[1.5] mt-1" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden">
              <img
                src="/images/IMG_6114.webp"
                alt="Community Lifestyle"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating stat — repositioned for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 left-4 sm:-bottom-8 sm:-left-8 bg-white border border-border p-5 sm:p-8 shadow-2xl"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary block mb-1">
                10+
              </span>
              <span className="text-[9px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Years of Trust
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
