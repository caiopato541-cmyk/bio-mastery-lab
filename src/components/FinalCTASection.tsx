import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DNAIcon } from "@/components/icons/DNAIcon";
import vitorHugoFocus from "@/assets/vitor-hugo-focus.jpg";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 opacity-5">
          <DNAIcon className="w-full h-full text-primary" />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-5">
          <DNAIcon className="w-full h-full text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Professor Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <img
                src={vitorHugoFocus}
                alt="Prof. Vitor Hugo Rocha"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Comece agora sua jornada</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display leading-tight">
              Quando a Biologia faz sentido,<br />
              <span className="text-primary">a prova muda</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Junte-se a centenas de alunos que já transformaram sua forma de estudar Biologia com o método Bio em Casa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#cursos">
                  Começar agora no Bio em Casa
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Dúvidas?{" "}
              <a 
                href="https://wa.me/5519996212930" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Entre em contato pelo WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
