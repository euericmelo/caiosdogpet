"use client"

import { useState, useEffect } from "react";
import { business } from "@/config/business";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Início", id: "hero" },
    { label: "Serviços", id: "servicos" },
    { label: "Galeria", id: "galeria" },
    { label: "Sobre", id: "sobre" },
    { label: "Dúvidas", id: "faq" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection("hero")}
        >
          {/* Fallback se a logo não estiver disponível, mas deixaremos preparado */}
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
            <span className="font-bold text-xl leading-none">CP</span>
            {/* TODO: Substituir por <Image src="/images/logo/caios-dog-pet.webp" fill alt="Logo Caio's Dog Pet" className="object-contain p-1" /> quando a logo for adicionada */}
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
            {business.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(1).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-bold hover:text-primary transition-all hover:-translate-y-0.5 relative group text-foreground/80 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          ))}
          
          <div className="h-6 w-px bg-border mx-2" />
          
          <Button
            onClick={() => scrollToSection("agendamento")}
            className="rounded-2xl"
          >
            Agendar pelo WhatsApp
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-lg font-bold p-2 hover:bg-primary/5 rounded-xl transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <Button
              onClick={() => scrollToSection("agendamento")}
              className="w-full h-14 text-base"
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
