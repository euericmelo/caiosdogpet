"use client"

import { useState } from "react";
import { getWhatsAppBookingLink, type BookingData } from "@/lib/whatsapp";
import { formatDateBR } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export function BookingForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState<BookingData>({
    tutor: "",
    whatsapp: "",
    pet: "",
    size: "Pequeno",
    service: "Banho",
    date: "",
    period: "Manhã",
    taxiDog: false,
    neighborhood: "",
    observations: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => {
    setError("");
    if (step === 1) {
      if (!formData.tutor || !formData.whatsapp || !formData.pet) {
        setError("Preencha todos os campos obrigatórios desta etapa.");
        return;
      }
    } else if (step === 2) {
      if (!formData.date || (formData.taxiDog && !formData.neighborhood)) {
        setError("Preencha a data e o bairro (caso necessite de Táxi Dog).");
        return;
      }
    }
    setStep((prev) => (prev + 1) as 1 | 2 | 3);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = getWhatsAppBookingLink(formData);
    window.open(link, "_blank");
  };

  return (
    <div className="w-full">
      {/* Indicador de progresso */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 w-full h-1 bg-border -z-10 -translate-y-1/2"></div>
        <div className="absolute left-0 top-1/2 h-1 bg-primary -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
        
        {[1, 2, 3].map((num) => (
          <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 ${step >= num ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-muted-foreground border-border'}`}>
            {num}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold text-foreground mb-4">Etapa 1: Tutor e Pet</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tutor">Nome do Tutor *</Label>
                <Input id="tutor" name="tutor" value={formData.tutor} onChange={handleChange} placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp do Tutor *</Label>
                <Input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} placeholder="(11) 90000-0000" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="pet">Nome do Pet *</Label>
                <Input id="pet" name="pet" value={formData.pet} onChange={handleChange} placeholder="Nome do animal" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Porte do Pet *</Label>
                <div className="relative">
                  <select id="size" name="size" value={formData.size} onChange={handleChange} className="flex h-12 w-full appearance-none rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground" required>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                    <option value="Não sei informar">Não sei informar</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold text-foreground mb-4">Etapa 2: Atendimento</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="service">Serviço Desejado *</Label>
                <div className="relative">
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="flex h-12 w-full appearance-none rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground" required>
                    <option value="Banho">Banho</option>
                    <option value="Tosa">Tosa</option>
                    <option value="Banho e Tosa">Banho e Tosa</option>
                    <option value="Táxi Dog">Táxi Dog Apenas</option>
                    <option value="Consultar outro serviço">Consultar outro serviço</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data Desejada *</Label>
                <Input id="date" name="date" type="date" min={new Date().toISOString().split("T")[0]} value={formData.date} onChange={handleChange} required />
                <p className="text-xs text-muted-foreground mt-1">A data é uma preferência e será confirmada no WhatsApp.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="period">Período *</Label>
                <div className="relative">
                  <select id="period" name="period" value={formData.period} onChange={handleChange} className="flex h-12 w-full appearance-none rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground">
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Primeiro horário disponível">Primeiro horário disponível</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 flex flex-col justify-center pt-2 md:pt-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" name="taxiDog" checked={formData.taxiDog} onChange={handleChange} className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-input transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring"></div>
                    <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                  </div>
                  <span className="text-sm font-bold text-foreground">Precisa de Táxi Dog?</span>
                </label>
              </div>
            </div>

            {formData.taxiDog && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                <Label htmlFor="neighborhood">Bairro para Retirada *</Label>
                <Input id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Qual o seu bairro?" required={formData.taxiDog} />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="observations">Observações (Opcional)</Label>
              <Textarea id="observations" name="observations" value={formData.observations} onChange={handleChange} placeholder="Seu pet tem alguma alergia ou comportamento específico?" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Resumo do Agendamento</h3>
              <p className="text-muted-foreground text-sm mt-2">Revise os dados antes de enviar para o nosso WhatsApp.</p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-2xl border border-border space-y-3 text-sm text-foreground">
              <p><strong className="font-semibold w-24 inline-block">Tutor:</strong> {formData.tutor}</p>
              <p><strong className="font-semibold w-24 inline-block">WhatsApp:</strong> {formData.whatsapp}</p>
              <p><strong className="font-semibold w-24 inline-block">Pet:</strong> {formData.pet} ({formData.size})</p>
              <p><strong className="font-semibold w-24 inline-block">Serviço:</strong> {formData.service}</p>
              <p><strong className="font-semibold w-24 inline-block">Data:</strong> {formatDateBR(formData.date)}</p>
              <p><strong className="font-semibold w-24 inline-block">Período:</strong> {formData.period}</p>
              <p><strong className="font-semibold w-24 inline-block">Táxi Dog:</strong> {formData.taxiDog ? `Sim (${formData.neighborhood})` : "Não"}</p>
              {formData.observations && <p><strong className="font-semibold w-24 inline-block">Obs:</strong> {formData.observations}</p>}
            </div>

            <p className="text-xs text-center text-muted-foreground mt-4">
              O envio não confirma o agendamento. O horário será confirmado pela nossa equipe.
              Nenhum dado é armazenado neste site.
            </p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive text-sm font-bold rounded-2xl">
            {error}
          </div>
        )}

        <div className="flex gap-4 pt-4">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep} className="h-14 px-6" aria-label="Voltar etapa">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          
          {step < 3 ? (
            <Button type="button" onClick={nextStep} className="flex-1 h-14 text-lg group">
              Próxima Etapa
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button type="submit" className="flex-1 h-14 text-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar pelo WhatsApp
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
