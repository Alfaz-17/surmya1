"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const leftLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
];

const rightLinks = [
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="fixed left-0 right-0 z-[60] top-0 bg-white border-b border-zinc-200 py-1 shadow-md"
      >
        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-10"
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-24">
          {/* Mobile: Hamburger | Desktop: Left Links */}
          <div className="flex-1 flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-zinc-900 hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden lg:flex items-center justify-end gap-8 w-full h-full">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-primary h-full flex items-center text-zinc-900"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex-none flex items-center justify-center mx-4 lg:mx-12">
            <a href="#home" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Suramya 1"
                width={240}
                height={200}
                className="w-auto object-contain transition-all duration-300 group-hover:scale-105 h-48 md:h-48"
                priority
              />
            </a>
          </div>

          {/* Mobile: Phone CTA | Desktop: Right Links */}
          <div className="flex-1 flex items-center justify-end gap-2">
            {/* Mobile phone icon */}
            <a
              href="tel:+919876543210"
              className="lg:hidden p-2 transition-colors text-zinc-900 hover:text-primary"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>

            <nav className="hidden lg:flex items-center gap-8 h-full">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-primary h-full flex items-center text-zinc-900"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden xl:inline-flex text-[10px] font-black uppercase tracking-[0.2em] ml-8 px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-all"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Full-screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-[400px] z-[70] bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-200">
                <Image
                  src="/logo.png"
                  alt="Suramya 1"
                  width={120}
                  height={40}
                  className="h-48 w-auto object-contain"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zinc-500 hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-4">
                {allLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-6 py-4 border-b border-zinc-100 group"
                    >
                      <span className="text-[13px] font-black uppercase tracking-[0.15em] text-zinc-800 group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-5 border-t border-zinc-200 space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-3 w-full py-3.5 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em]"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 border border-zinc-200 text-zinc-800 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-zinc-50 transition-colors"
                >
                  Enquire Now
                </a>
                <div className="text-center pt-2">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">
                    Suramya 1 &copy; {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
