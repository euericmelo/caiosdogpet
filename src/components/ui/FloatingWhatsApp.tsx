"use client"

import { getWhatsAppDefaultLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppDefaultLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Caio's Dog Pet no WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-in slide-in-from-bottom-10 fade-in duration-500 fill-mode-both delay-1000 group"
    >
      {/* Tooltip on hover for desktop */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-popover border border-border text-popover-foreground font-medium text-sm rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
        Agendar horário
        <div className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-border" />
        <div className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[5px] border-l-popover" />
      </div>
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
