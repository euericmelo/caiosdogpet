"use client"

import { business } from "@/config/business";
import { getWhatsAppDefaultLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Droplets, Scissors, Car } from "lucide-react";

export function Servicos() {
  const iconMap: Record<string, React.ReactNode> = {
    "banho": <Droplets className="w-10 h-10" />,
    "tosa": <Scissors className="w-10 h-10" />,
    "taxi-dog": <Car className="w-10 h-10" />,
  };

  // Filtrar apenas serviços ativos
  const activeServices = business.services.filter(s => s.active);

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
          >
            Especialidades <span className="text-primary">Caio's Dog Pet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground font-medium"
          >
            Cuidado e dedicação para deixar o seu amigo de quatro patas impecável e feliz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {activeServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-border bg-card rounded-3xl overflow-hidden hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6 h-full justify-between">
                  <div className="space-y-6 flex flex-col items-center">
                    <div className="p-5 bg-secondary rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-sm">
                      {iconMap[service.id] || <Droplets className="w-10 h-10" />}
                    </div>
                    <h3 className="font-black text-2xl tracking-tight">{service.title}</h3>
                    <p className="text-muted-foreground font-medium">{service.description}</p>
                  </div>
                  
                  <div className="pt-6 w-full">
                    <a
                      href={getWhatsAppDefaultLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                        Consultar pelo WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
