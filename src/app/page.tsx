import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Servicos } from "@/components/sections/Servicos";
import { ChamadaAgendamento } from "@/components/sections/ChamadaAgendamento";
import { Galeria } from "@/components/sections/Galeria";
import { Sobre } from "@/components/sections/Sobre";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { FAQ } from "@/components/sections/FAQ";
import { FormularioAgendamento } from "@/components/sections/FormularioAgendamento";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <Diferenciais />
        <Servicos />
        <ChamadaAgendamento />
        <Galeria />
        <Sobre />
        <Avaliacoes />
        <section id="faq" className="py-24 px-6 relative border-t">
          <FAQ />
        </section>

        {/* Formulário Agendamento */}
        <section id="agendamento" className="py-24 px-6 relative">
          <FormularioAgendamento />
        </section>
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
