"use client"

import { business } from "@/config/business";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] -z-10 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
      <div
        className="absolute bottom-[-10%] left-[-10%] -z-10 w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm border border-primary/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>BANHO, TOSA E TÁXI DOG</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
              Cuidado e{" "}
              <span className="text-primary">
                carinho
              </span>{" "}
              para o seu melhor amigo.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Banho, tosa e transporte com atenção, segurança e muito carinho para deixar seu pet limpo, confortável e feliz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button
                onClick={scrollToAgendamento}
                size="lg"
                className="group"
              >
                Agendar pelo WhatsApp
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-secondary/50 backdrop-blur-md"
                onClick={scrollToServicos}
              >
                Conhecer os serviços
              </Button>
            </div>

            <div className="flex flex-col gap-3 pt-6 lg:items-start items-center text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Atendimento com horário marcado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Contato direto pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Táxi Dog disponível</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white aspect-square md:aspect-[4/4] bg-muted">
              {/* TODO: Add real hero image - placeholder for now */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-center">
                <Image src="/images/hero/hero-pet.png" alt="Pet feliz no banho" fill className="object-cover" priority />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>

            {/* Floating Design Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-6 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 flex items-center gap-4 border border-border"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <p className="font-black text-lg text-foreground">Ambiente Seguro</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Para o seu pet
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 md:-right-10 bg-white p-4 rounded-3xl shadow-xl z-20 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="font-bold text-sm text-foreground">Muito Carinho</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
