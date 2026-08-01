import { business } from "@/config/business";

export interface BookingData {
  tutor: string;
  pet: string;
  service: string;
  date: string;
  period: string;
  taxiDog: boolean;
  observations: string;
}

export function formatWhatsAppMessage(data: BookingData): string {
  const text = `Olá! Encontrei o ${business.name} pelo site e gostaria de solicitar um agendamento.\n\n` +
    `*Tutor:* ${data.tutor}\n` +
    `*Pet:* ${data.pet}\n` +
    `*Serviço:* ${data.service}\n` +
    `*Data desejada:* ${data.date}\n` +
    `*Período:* ${data.period}\n` +
    `*Táxi Dog:* ${data.taxiDog ? "Sim" : "Não"}\n` +
    `*Observações:* ${data.observations || "Nenhuma"}`;
  
  return encodeURIComponent(text);
}

export function getWhatsAppBookingLink(data: BookingData): string {
  const message = formatWhatsAppMessage(data);
  return `${business.links.whatsapp}?text=${message}`;
}

export function getWhatsAppDefaultLink(service?: string): string {
  let text = `Olá! Encontrei o ${business.name} pelo site e gostaria de consultar um horário`;
  if (service) {
    text += ` para ${service.toLowerCase()}`;
  }
  text += ".";
  return `${business.links.whatsapp}?text=${encodeURIComponent(text)}`;
}
