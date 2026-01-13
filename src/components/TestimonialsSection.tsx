import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  initials: string;
  objective: string;
  content: string;
}

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Maria Clara S.",
      initials: "MC",
      objective: "Medicina - UNICAMP",
      content: "O método do professor Vitor Hugo mudou completamente minha forma de estudar Biologia. Antes eu decorava, agora eu entendo. Passei de média para uma das melhores notas da sala.",
    },
    {
      name: "Pedro Henrique L.",
      initials: "PH",
      objective: "ENEM 2025",
      content: "Estudando em casa, achei que seria impossível competir. O Bio em Casa me mostrou que com método certo, qualquer um pode ter resultado alto. Minha nota em Biologia no simulado subiu 40%.",
    },
    {
      name: "Ana Beatriz R.",
      initials: "AB",
      objective: "Medicina - USP",
      content: "As Sinapses são incríveis. O professor conecta os conteúdos de um jeito que faz tudo fazer sentido. Nunca pensei que Biologia poderia ser tão lógica.",
    },
    {
      name: "Lucas Gabriel M.",
      initials: "LG",
      objective: "Ensino Médio",
      content: "Comecei no DNA para acompanhar a escola e agora estou muito à frente da minha turma. O método funciona de verdade!",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 hero-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-display">
            Quem já passou pelo método
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-primary-foreground/20">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/30" />
            
            <div className="relative z-10">
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">
                    {testimonials[activeIndex].initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonials[activeIndex].objective}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="heroOutline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-accent w-8"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="heroOutline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
