import { ShieldCheck, Heart, Clock, Sparkles } from "lucide-react";

export function Diferenciais() {
  const differentials = [
    { label: "Cuidado individual", icon: Heart, color: "text-red-500" },
    { label: "Atendimento com carinho", icon: Sparkles, color: "text-primary" },
    { label: "Agendamento fácil", icon: Clock, color: "text-accent" },
    { label: "Ambiente seguro", icon: ShieldCheck, color: "text-emerald-500" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {differentials.map((d, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card shadow-sm border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <d.icon className={`w-10 h-10 md:w-12 md:h-12 ${d.color}`} />
              </div>
              <p className="font-medium text-sm md:text-base text-foreground mt-2">{d.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
