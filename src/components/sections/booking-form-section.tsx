import { AnimatedSection } from "@/components/ui/animated-section";
import { BookingForm } from "@/components/forms/booking-form";

export function BookingFormSection() {
  return (
    <AnimatedSection id="agendamento" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Solicitar Agendamento
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Preencha os dados abaixo e você será direcionado para o nosso WhatsApp para confirmar o horário.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border shadow-2xl rounded-[40px] overflow-hidden p-8 md:p-12">
          <BookingForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
