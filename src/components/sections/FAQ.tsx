"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { business } from "@/config/business";

export function FAQ() {
  const faqs = [
    {
      question: "Preciso agendar com antecedência?",
      answer: "Recomendamos o agendamento prévio para garantir o melhor horário, especialmente aos sábados. Entre em contato pelo WhatsApp para consultar nossa disponibilidade.",
    },
    {
      question: "Como funciona o Táxi Dog?",
      answer: `O serviço de Táxi Dog oferece comodidade para buscar e levar seu pet. A disponibilidade e a taxa variam conforme o endereço. Chame no WhatsApp para confirmar!`,
    },
    {
      question: "Quais são os horários de atendimento?",
      answer: `Atendemos de segunda a sexta, das ${business.hours.weekdays.replace("às", "até")} e aos sábados das ${business.hours.saturday.replace("às", "até")}. Aos domingos e feriados, estamos fechados.`,
    },
    {
      question: "Como consulto os valores?",
      answer: "Os valores dos serviços dependem do porte, raça e tipo de pelagem do pet. Envie uma foto do seu amigo no nosso WhatsApp e passaremos o orçamento correto.",
    },
    {
      question: "Quais animais vocês atendem?",
      answer: "Nosso foco principal são cães. Para consultar a possibilidade de atendimento a felinos ou cães de porte muito grande, nos mande uma mensagem.",
    },
    {
      question: "Como preparo meu pet para o atendimento?",
      answer: "Basta garantir que ele tenha feito suas necessidades antes e informe se ele possui alguma alergia, problema de pele ou condição especial de saúde no momento do agendamento.",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Tudo o que você precisa saber sobre nossos serviços.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border/50 bg-background rounded-3xl px-6 py-2 shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline font-bold text-lg text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-medium text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
