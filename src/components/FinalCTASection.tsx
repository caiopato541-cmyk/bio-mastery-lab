import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DNAIcon } from "@/components/icons/DNAIcon";

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
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Comece agora sua jornada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display leading-tight">
            Qualquer prova fica menor<br />
            <span className="text-primary">quando sua base é forte</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Junte-se a centenas de alunos que já transformaram sua forma de estudar Biologia com o método Bio em Casa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Começar agora no Bio em Casa
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Dúvidas? Entre em contato pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};
