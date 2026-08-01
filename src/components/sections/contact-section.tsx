"use client"

import { business } from "@/config/business";
import { Phone, MapPin, Clock } from "lucide-react";
import { Instagram } from "@/components/ui/icons";
import { ContactCard } from "@/components/ui/contact-card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ContactSection() {
  const scrollToMap = () => {
    document.getElementById("localizacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Fale com a gente
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Tire suas dúvidas, consulte valores ou solicite um horário diretamente pelos nossos canais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            iconBgColorClass="bg-[#25D366]/10"
            iconTextColorClass="text-[#25D366]"
            title="WhatsApp"
            description="Atendimento e agendamentos"
            buttonText="Chamar no WhatsApp"
            href={business.links.whatsapp}
            external
          />
          
          <ContactCard
            icon={<Instagram className="w-6 h-6" />}
            iconBgColorClass="bg-pink-500/10"
            iconTextColorClass="text-pink-500"
            title="Instagram"
            description="Veja nossos clientes e acompanhe o trabalho"
            buttonText="Abrir Instagram"
            href={business.links.instagram}
            external
          />

          <ContactCard
            icon={<Clock className="w-6 h-6" />}
            iconBgColorClass="bg-primary/10"
            iconTextColorClass="text-primary"
            title="Horário"
            description={`${business.hours.weekdays} | Sáb ${business.hours.saturday}`}
          />

          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            iconBgColorClass="bg-accent/10"
            iconTextColorClass="text-accent"
            title="Localização"
            description={business.address?.formatted || "Endereço em breve"}
            buttonText={business.maps?.embedUrl ? "Ver no mapa" : undefined}
            onClick={scrollToMap}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
