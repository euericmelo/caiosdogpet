"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart, Star } from "lucide-react";

export function Galeria() {
  const photos = [
    {
      // TODO: Substituir por fotos reais /images/gallery/pet-01.webp
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
      icon: Sparkles,
      alt: "Cachorro feliz após banho e tosa"
    },
    {
      // TODO: Substituir por fotos reais /images/gallery/pet-02.webp
      url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
      icon: Heart,
      alt: "Cachorro relaxando no pet shop"
    },
    {
      // TODO: Substituir por fotos reais /images/gallery/pet-03.webp
      url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
      icon: Star,
      alt: "Cachorro bem cuidado com laço"
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Galeria de Clientes</h2>
          <p className="text-muted-foreground text-lg font-medium">
            Confira alguns dos nossos amigos que saíram daqui limpinhos e felizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[32px] overflow-hidden group relative shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white p-4 rounded-2xl scale-50 group-hover:scale-100 transition-transform duration-500 text-primary shadow-2xl">
                  <photo.icon className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
