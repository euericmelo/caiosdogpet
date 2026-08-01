import { business } from "@/config/business";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Sobre() {
  return (
    <section id="sobre" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          <div className="flex-1 relative order-2 lg:order-1 w-full">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-primary/5 aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full">
              {/* TODO: Substituir por foto real da equipe ou do local /images/hero/sobre-pet.webp */}
              <Image
                src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800"
                alt={`Sobre o ${business.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <p className="text-2xl font-bold">{business.name}</p>
                <p className="text-white/90">Especialistas em banho e tosa</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>

          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm">
                Conheça o Caio's Dog Pet
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                Carinho em cada atendimento.
              </h3>
              
              <div className="prose prose-lg text-muted-foreground font-medium">
                <p>
                  No <strong>{business.name}</strong>, cada animal é recebido com atenção e cuidado. Nosso objetivo é proporcionar uma experiência tranquila para o pet e mais praticidade para o tutor.
                </p>
                <p>
                  Atendemos com serviços de banho, tosa e Táxi Dog, sempre buscando respeitar as necessidades de cada animal e garantir que ele volte para casa cheiroso e muito feliz.
                </p>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <span className="font-bold text-foreground">Ambiente familiar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <span className="font-bold text-foreground">Produtos de qualidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <span className="font-bold text-foreground">Tranquilidade do tutor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <span className="font-bold text-foreground">Conforto para o pet</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
