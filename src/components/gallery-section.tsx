"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/hero_hd.png",
    alt: "Suramya 1 entrance gate with landscaped driveway",
    label: "Entrance Gate",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/unnamed.webp",
    alt: "Wide internal roads with tree-lined pathways",
    label: "Wide Roads",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unnamed (1).webp",
    alt: "Landscaped gardens with walking paths",
    label: "Gardens",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unnamed (2).webp",
    alt: "Modern clubhouse exterior view",
    label: "Clubhouse",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unnamed (3).webp",
    alt: "Society evening view with ambient lighting",
    label: "Evening Lights",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/unnamed (4).webp",
    alt: "Aerial panoramic view of Suramya 1 society",
    label: "Aerial View",
    span: "col-span-2 row-span-1",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 lg:py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            Inside Suramya 1
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-lg mx-auto">
            Take a visual journey through the beautiful spaces and amenities
            that make Suramya 1 truly special.
          </p>
        </motion.div>

        {/* Bento grid gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`${image.span} relative group overflow-hidden cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                  {image.label}
                </span>
              </div>
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-full md:w-0 md:group-hover:w-full h-[2px] bg-primary transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
