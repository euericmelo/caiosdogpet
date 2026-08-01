"use client"

import { business } from "@/config/business";
import { Clock } from "lucide-react";

interface BusinessHoursCardProps {
  className?: string;
}

export function BusinessHoursCard({ className = "" }: BusinessHoursCardProps) {
  return (
    <div className={`bg-card/50 backdrop-blur-md rounded-[32px] p-8 border border-border text-card-foreground shadow-xl min-w-[300px] ${className}`}>
      <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
        <Clock className="w-6 h-6 text-accent" />
        Horários de Atendimento
      </h3>
      
      <ul className="space-y-4">
        <li className="flex justify-between items-center border-b border-current/10 pb-3">
          <span className="font-medium opacity-70">Segunda a Sexta</span>
          <span className="font-bold">{business.hours.weekdays}</span>
        </li>
        <li className="flex justify-between items-center border-b border-current/10 pb-3">
          <span className="font-medium opacity-70">Sábado</span>
          <span className="font-bold">{business.hours.saturday}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-medium opacity-70">Domingo e feriados</span>
          <span className="font-bold text-accent">{business.hours.sunday}</span>
        </li>
      </ul>
      <p className="mt-6 text-xs text-center opacity-70">
        Os horários estão sujeitos à confirmação pelo WhatsApp.
      </p>
    </div>
  );
}
