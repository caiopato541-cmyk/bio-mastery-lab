import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Users, Brain, Award } from "lucide-react";
import professorImage from "@/assets/vitor-hugo-professor.jpg";

export const AboutProfessorSection: React.FC = () => {
  return (
    <section id="professor" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Seu professor
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Sobre o seu professor
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Professor image */}
          <div className="relative order-2 lg:order-1 overflow-hidden">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden elevated-shadow">
              <img 
                src={professorImage} 
                alt="Prof. Vitor Hugo Rocha - Professor de Biologia e fundador do Bio em Casa"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            
            {/* Stats badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+500</p>
                  <p className="text-sm text-muted-foreground">alunos aprovados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="prose prose-lg text-muted-foreground space-y-4 break-words">
              <p className="text-xl leading-relaxed">
                Eu sou o <span className="text-foreground font-semibold">Vitor Hugo</span>, professor de Biologia há mais de <span className="text-primary font-semibold">10 anos</span> e fundador do Bio em Casa.
              </p>
              <p className="leading-relaxed">
                Ao longo dessa trajetória, já ajudei mais de <span className="text-foreground font-medium">quinhentos estudantes</span> a compreenderem Biologia de forma lógica, integrada e visual, conquistando aprovação em diversos cursos e universidades pelo Brasil.
              </p>
              <p className="leading-relaxed">
                Minha experiência dentro e fora da sala de aula me permitiu identificar, com precisão, as principais dificuldades e lacunas dos alunos — especialmente aquelas que surgem quando a Biologia é ensinada de forma fragmentada e baseada apenas em memorização.
              </p>
              <p className="leading-relaxed">
                Foi a partir disso que desenvolvi uma metodologia que ensina Biologia de um jeito que <span className="text-foreground font-medium">faz sentido</span>, conectando conceitos, estruturas e processos, <span className="text-primary font-semibold">sem decoreba</span>. Com a Metodologia BC, o aluno entende o <em>porquê</em> antes de decorar o <em>como</em>.
              </p>
              <p className="leading-relaxed">
                Toda essa organização, estratégia e paixão pelo ensino estão presentes nos cursos extensivos do Bio em Casa — do básico ao avançado, do micro ao macro — para te ajudar a organizar os estudos, ganhar confiança e transformar a Biologia em uma aliada real na sua aprovação.
              </p>
              <p className="leading-relaxed text-foreground font-medium">
                Se você quiser caminhar comigo em 2026, eu estarei aqui para te acompanhar em cada etapa dessa jornada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">+10 anos de experiência</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <Brain className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Metodologia BC exclusiva</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Ensino lógico e visual</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                <Users className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">+500 alunos aprovados</p>
              </div>
            </div>

            <blockquote className="relative pl-6 border-l-4 border-accent mt-6">
              <p className="text-xl lg:text-2xl font-medium text-foreground italic leading-relaxed">
                "Quando o aluno entende Biologia, a prova vira consequência."
              </p>
            </blockquote>

            <Button variant="default" size="lg" className="w-full sm:w-auto group mt-6">
              Quero estudar com o Prof. Vitor Hugo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
