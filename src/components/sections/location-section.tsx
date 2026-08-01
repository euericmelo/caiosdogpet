import { business } from "@/config/business";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function LocationSection() {
  if (!business.maps?.embedUrl) {
    if (process.env.NODE_ENV === "development") {
      return (
        <section className="py-12 bg-destructive/10 text-destructive text-center">
          <p className="font-bold">⚠️ [Dev] O mapa não será renderizado porque `business.maps.embedUrl` não foi configurado.</p>
        </section>
      );
    }
    return null;
  }

  return (
    <AnimatedSection id="localizacao" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Onde estamos
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Encontre o {business.name} e trace a melhor rota para o atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-1 space-y-8 bg-card p-8 rounded-[32px] border border-border shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {business.address?.formatted || "Atualizando..."}
                </p>
              </div>
            </div>

            <hr className="border-border" />

            <div className="space-y-4">
              <a 
                href={business.maps.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <Button className="w-full h-14 text-lg">
                  <Navigation className="w-5 h-5 mr-2" />
                  Como chegar
                </Button>
              </a>
              <a 
                href={business.links.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <Button variant="outline" className="w-full h-14 text-lg">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 h-[400px] lg:h-full min-h-[400px] rounded-[32px] overflow-hidden border border-border shadow-xl bg-card">
            <iframe
              src={business.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa mostrando a localização do ${business.name}`}
              className="w-full h-full grayscale-[20%] contrast-125 opacity-90 dark:grayscale-[40%] dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
