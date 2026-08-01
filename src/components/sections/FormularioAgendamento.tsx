"use client"

import { useState } from "react";
import { getWhatsAppBookingLink, type BookingData } from "@/lib/whatsapp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export function FormularioAgendamento() {
  const [formData, setFormData] = useState<BookingData>({
    tutor: "",
    pet: "",
    service: "Banho",
    date: "",
    period: "Manhã",
    taxiDog: false,
    observations: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.tutor || !formData.pet || !formData.date) {
      setError("Por favor, preencha os campos obrigatórios (Tutor, Pet e Data).");
      return;
    }

    const link = getWhatsAppBookingLink(formData);
    window.open(link, "_blank");
  };

  return (
    <section id="agendamento" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Solicitar Agendamento
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Preencha os dados abaixo e você será direcionado para o nosso WhatsApp para confirmar o horário.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-border shadow-xl rounded-[40px] overflow-hidden">
          <CardHeader className="bg-primary/5 pb-8 pt-10 text-center border-b">
            <CardTitle className="text-2xl font-bold">Informações do Atendimento</CardTitle>
            <CardDescription className="text-base mt-2">Nenhum dado é armazenado. O envio é feito diretamente no seu WhatsApp.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tutor">Nome do Tutor *</Label>
                  <Input 
                    id="tutor" 
                    name="tutor" 
                    value={formData.tutor} 
                    onChange={handleChange} 
                    placeholder="Seu nome" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pet">Nome do Pet *</Label>
                  <Input 
                    id="pet" 
                    name="pet" 
                    value={formData.pet} 
                    onChange={handleChange} 
                    placeholder="Nome do animal" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço Desejado *</Label>
                  {/* Select nativo para melhor acessibilidade e uso em mobile */}
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-12 w-full appearance-none rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="Banho">Banho</option>
                      <option value="Tosa">Tosa</option>
                      <option value="Banho e Tosa">Banho e Tosa</option>
                      <option value="Táxi Dog Apenas">Táxi Dog Apenas</option>
                      <option value="Consultar outro serviço">Consultar outro serviço</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Data Desejada *</Label>
                  <Input 
                    id="date" 
                    name="date" 
                    type="date"
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="period">Período de Preferência</Label>
                  <div className="relative">
                    <select
                      id="period"
                      name="period"
                      value={formData.period}
                      onChange={handleChange}
                      className="flex h-12 w-full appearance-none rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="Manhã (10h às 12h)">Manhã (10h às 12h)</option>
                      <option value="Tarde (12h às 18h)">Tarde (12h às 18h)</option>
                      <option value="Sábado (11h às 15h)">Sábado (11h às 15h)</option>
                      <option value="Qualquer horário">Qualquer horário</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 flex flex-col justify-center pt-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="taxiDog"
                        checked={formData.taxiDog}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <div className="h-6 w-11 rounded-full bg-input transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"></div>
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                    </div>
                    <span className="text-sm font-bold select-none">Precisa de Táxi Dog?</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="observations">Observações (Opcional)</Label>
                <Textarea 
                  id="observations" 
                  name="observations" 
                  value={formData.observations} 
                  onChange={handleChange} 
                  placeholder="Seu pet tem alguma alergia ou comportamento específico? Descreva aqui." 
                />
              </div>

              {error && (
                <div className="p-4 bg-destructive/10 text-destructive text-sm font-bold rounded-2xl">
                  {error}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full h-16 text-lg group">
                <MessageCircle className="w-6 h-6 mr-2" />
                Continuar no WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
