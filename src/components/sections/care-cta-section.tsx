"use client"

import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { BusinessHoursCard } from "@/components/ui/business-hours-card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CareCtaSection() {
  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection className="py-24 relative overflow-hidden bg-primary">
      {/* Elementos decorativos subtis */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-background/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-accent font-bold uppercase tracking-wider text-sm">
              Agende o cuidado do seu pet
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-primary-foreground">
              Seu pet merece esse cuidado.
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Consulte os horários disponíveis e agende banho, tosa ou Táxi Dog diretamente pelo WhatsApp.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToAgendamento}
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 text-lg font-bold px-8 h-14"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Consultar horários
              </Button>
              <Button
                onClick={scrollToServicos}
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14"
              >
                Conhecer os serviços
              </Button>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <BusinessHoursCard className="bg-background/10 border-primary-foreground/10 text-primary-foreground backdrop-blur-xl shadow-2xl" />
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
