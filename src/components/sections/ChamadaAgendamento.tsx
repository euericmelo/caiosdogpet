"use client"

import { business } from "@/config/business";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";

export function ChamadaAgendamento() {
  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Círculos decorativos */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-between max-w-6xl mx-auto">
          
          <div className="flex-1 space-y-6 text-center lg:text-left text-white">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Seu pet merece esse cuidado.
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Entre em contato pelo WhatsApp, consulte os horários disponíveis e agende o atendimento do seu melhor amigo.
            </p>
            
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                onClick={scrollToAgendamento}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg font-bold px-8"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Consultar horários
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 border border-white/20 text-white shadow-2xl min-w-[300px]">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Horários de Atendimento
              </h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-medium text-white/80">Segunda a Sexta</span>
                  <span className="font-bold">{business.hours.weekdays}</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-medium text-white/80">Sábado</span>
                  <span className="font-bold">{business.hours.saturday}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-white/80">Domingo e feriados</span>
                  <span className="font-bold text-accent">{business.hours.sunday}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
