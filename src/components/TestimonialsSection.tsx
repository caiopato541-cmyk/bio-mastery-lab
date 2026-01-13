import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
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
      name: "Ana",
      initials: "A",
      objective: "Aprovada em Medicina",
      content: "Você se tornou um grande amigo que me mostrou, todos os dias, o meu potencial — até mesmo quando eu não acreditava nele. Meu carinho e admiração por você vão muito além de ver meu nome na lista de uma faculdade de medicina.",
    },
    {
      name: "Aluna UNIFESP",
      initials: "U",
      objective: "Vestibular UNIFESP",
      content: "Ontem na UNIFESP caiu sobre splicing e eu lembrei na hora de você explicando! Muito obrigada, sua revisão foi incrível!",
    },
    {
      name: "Aluna UFSC",
      initials: "F",
      objective: "Vestibular UFSC",
      content: "PROF MAIS MARAVILHOSO DO MUNDO! Tive UFSC ontem — 8,35/10! Fiquei muito feliz!",
    },
    {
      name: "Aluna Sinapses",
      initials: "S",
      objective: "Med em Casa - Sinapses",
      content: "Esse curso foi a MELHOR escolha que fiz esse ano, não só pelo conteúdo, que é incrível, mas por você! Queria te agradecer pela diferença que fez na minha vida esse ano!",
    },
    {
      name: "Aluna UNESP",
      initials: "N",
      objective: "Vestibular UNESP",
      content: "Prof, acabei de sair da prova da UNESP! Caiu sobre nucleotídeo e só lembrei da cabeça do pato, o corpo do pato! kkkkkk",
    },
    {
      name: "Aluna Sinapses",
      initials: "B",
      objective: "Vestibulares 2026",
      content: "Antes Biologia era uma das minhas matérias terroristas, agora faz parte das legais! Suas aulas ajudaram muito, não só no aprendizado, mas também nos resultados dos vestibulares. Levarei para a vida cada ensinamento!",
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

          {/* CTA after testimonials */}
          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" className="group">
              Se funcionou para eles, quero começar também
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
