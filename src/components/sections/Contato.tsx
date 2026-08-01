import { business } from "@/config/business";
import { getWhatsAppDefaultLink } from "@/lib/whatsapp";
import { Phone, MapPin, Clock } from "lucide-react";
import { Instagram } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Contato() {
  return (
    <section id="contato" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-[40px] shadow-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Infos de Contato */}
            <div className="p-10 lg:p-14 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  Fale com a gente
                </h2>
                <p className="text-muted-foreground font-medium">
                  Tem alguma dúvida ou prefere agendar conversando com a gente? Mande uma mensagem!
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href={business.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">+55 11 91447-0113</p>
                  </div>
                </a>

                <a 
                  href={business.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Instagram</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">@{business.instagram}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Segunda a Sexta</p>
                    <p className="text-muted-foreground">{business.hours.weekdays}</p>
                  </div>
                </div>

                {business.address && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Endereço</p>
                      <p className="text-muted-foreground">{business.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Secundário */}
            <div className="bg-primary p-10 lg:p-14 text-white flex flex-col justify-center items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              
              <h3 className="text-3xl font-black mb-4 relative z-10">Pronto para o banho?</h3>
              <p className="text-white/80 font-medium mb-8 relative z-10 text-lg">
                Seu melhor amigo vai adorar o tratamento especial que preparamos para ele.
              </p>
              
              <a href={getWhatsAppDefaultLink()} target="_blank" rel="noopener noreferrer" className="relative z-10 w-full">
                <Button className="w-full bg-white text-primary hover:bg-white/90 h-14 text-lg">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
