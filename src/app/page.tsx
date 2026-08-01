import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Servicos } from "@/components/sections/Servicos";
import { CareCtaSection } from "@/components/sections/care-cta-section";
import { Galeria } from "@/components/sections/Galeria";
import { Sobre } from "@/components/sections/Sobre";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { FAQ } from "@/components/sections/FAQ";
import { BookingFormSection } from "@/components/sections/booking-form-section";
import { ContactSection } from "@/components/sections/contact-section";
import { LocationSection } from "@/components/sections/location-section";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <Diferenciais />
        <Servicos />
        <CareCtaSection />
        <Galeria />
        <Sobre />
        <Avaliacoes />
        <section id="faq" className="py-24 px-6 relative border-t border-border">
          <FAQ />
        </section>
        
        <BookingFormSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
