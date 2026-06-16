import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { AmenitiesSection } from "@/components/amenities-section";
import { LifestyleSection } from "@/components/lifestyle-section";
import { GallerySection } from "@/components/gallery-section";
import { LocationSection } from "@/components/location-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <LifestyleSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
