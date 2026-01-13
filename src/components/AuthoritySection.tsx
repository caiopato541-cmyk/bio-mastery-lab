import React from "react";
import { Award, BookOpen, Users, Target } from "lucide-react";

export const AuthoritySection: React.FC = () => {
  const credentials = [
    { icon: BookOpen, label: "Professor de Biologia" },
    { icon: Target, label: "Criador do método Bio em Casa" },
    { icon: Award, label: "Especialista em ensino claro" },
    { icon: Users, label: "Foco em raciocínio real" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Seu professor
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Quem vai te guiar até o<br />
            <span className="text-primary">domínio da Biologia</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Professor image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl hero-gradient overflow-hidden elevated-shadow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold font-display">VH</span>
                  </div>
                  <p className="text-2xl font-bold font-display">Prof. Vitor Hugo Rocha</p>
                  <p className="text-primary-foreground/70 mt-2">Criador do Bio em Casa</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <cred.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm font-medium text-foreground">{cred.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="relative pl-6 border-l-4 border-accent">
              <p className="text-xl lg:text-2xl font-medium text-foreground italic leading-relaxed">
                "Quando o aluno entende Biologia, a prova vira consequência."
              </p>
              <footer className="mt-4 text-muted-foreground">
                — Prof. Vitor Hugo Rocha
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
