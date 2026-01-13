import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Users, Brain } from "lucide-react";

export const AboutProfessorSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Seu professor
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Sobre o seu professor
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Professor image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl hero-gradient overflow-hidden elevated-shadow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 border-4 border-accent/30">
                    <span className="text-5xl font-bold font-display">VH</span>
                  </div>
                  <p className="text-2xl font-bold font-display">Prof. Vitor Hugo Rocha</p>
                  <p className="text-primary-foreground/70 mt-2">Professor de Biologia e criador do método Bio em Casa</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed">
                Sou <span className="text-foreground font-semibold">Vitor Hugo Rocha</span>, professor de Biologia e criador do método Bio em Casa.
              </p>
              <p className="leading-relaxed">
                Ao longo dos anos, aprendi exatamente onde os alunos travam em Biologia e como ensinar de um jeito que realmente faz sentido — <span className="text-foreground font-medium">sem decoreba, sem confusão</span>.
              </p>
              <p className="leading-relaxed">
                Aqui você aprende a <span className="text-primary font-semibold">entender Biologia</span>, não apenas a responder questões.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Professor de Biologia</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <Brain className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Criador do método Bio em Casa</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Ensino claro e estruturado</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <Users className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Foco em raciocínio real</p>
              </div>
            </div>

            <blockquote className="relative pl-6 border-l-4 border-accent">
              <p className="text-xl lg:text-2xl font-medium text-foreground italic leading-relaxed">
                "Quando o aluno entende Biologia, a prova vira consequência."
              </p>
            </blockquote>

            <Button variant="default" size="lg" className="w-full sm:w-auto group">
              Quero estudar com o Prof. Vitor Hugo Rocha
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
