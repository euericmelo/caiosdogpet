import { business } from "@/config/business";
import { MapPin, Phone, Clock } from "lucide-react";
import { Instagram } from "@/components/ui/icons";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear(); // Ou hardcoded para 2026 como pedido

  return (
    <footer className="bg-zinc-950 text-zinc-50 pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          
          {/* Marca e Descrição */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative flex items-center justify-center bg-white rounded-full overflow-hidden border border-white/20 p-1">
                <img 
                  src="/images/logo/caios-dog-pet.png" 
                  alt="Logo Caio's Dog Pet" 
                  className="w-full h-full object-contain p-1" 
                />
              </div>
              <span className="text-xl font-bold text-white">{business.name}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {business.slogan} Banho, tosa e Táxi Dog com segurança e muito carinho para o seu pet.
            </p>
            <div className="flex gap-4">
              <a
                href={business.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={business.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors text-white hover:text-white"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Links Rápidos</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><a href="#hero" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-primary transition-colors">Galeria</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Horário de Funcionamento</h4>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-white">Segunda a Sexta</p>
                  <p>{business.hours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-white">Sábado</p>
                  <p>{business.hours.saturday}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-muted-foreground shrink-0" />
                <div>
                  <p className="font-bold text-white">Domingo e Feriados</p>
                  <p>{business.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contato Direto */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Contato</h4>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href={business.links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +55 11 91447-0113
                </a>
              </li>
              {business.address ? (
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span>{business.address} - {business.city}, {business.state}</span>
                </li>
              ) : (
                <li className="flex items-start gap-3 text-muted-foreground italic">
                  Endereço sob consulta via WhatsApp
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 {business.name}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a 
              href="https://www.devmartins.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-primary transition-colors"
            >
              Dev Martins
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
