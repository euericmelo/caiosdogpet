import { business } from "@/config/business";
import { formatDateBR } from "@/lib/utils";

export interface BookingData {
  tutor: string;
  whatsapp: string;
  pet: string;
  size: string;
  service: string;
  date: string;
  period: string;
  taxiDog: boolean;
  neighborhood?: string;
  observations?: string;
}

export function formatWhatsAppMessage(data: BookingData): string {
  let text = `Olá! Encontrei o ${business.name} pelo site e gostaria de solicitar um agendamento.\n\n` +
    `Tutor: ${data.tutor}\n` +
    `WhatsApp: ${data.whatsapp}\n` +
    `Pet: ${data.pet}\n` +
    `Porte: ${data.size}\n` +
    `Serviço: ${data.service}\n` +
    `Data desejada: ${formatDateBR(data.date)}\n` +
    `Período: ${data.period}\n` +
    `Táxi Dog: ${data.taxiDog ? "Sim" : "Não"}\n`;
    
  if (data.taxiDog && data.neighborhood) {
    text += `Bairro para retirada: ${data.neighborhood}\n`;
  }
  
  text += `Observações: ${data.observations || "Nenhuma"}\n\n` +
          `Aguardo a confirmação do horário. Obrigado!`;
  
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
