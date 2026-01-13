import React from "react";
import { DNAIcon } from "@/components/icons/DNAIcon";
import { SynapseIcon } from "@/components/icons/SynapseIcon";
import { RevisionIcon } from "@/components/icons/RevisionIcon";

export const MethodSection: React.FC = () => {
  const pillars = [
    {
      icon: DNAIcon,
      title: "DNA",
      subtitle: "Base Completa",
      description: "Base completa em Biologia, do zero, com clareza e segurança.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: SynapseIcon,
      title: "SINAPSES",
      subtitle: "Raciocínio Avançado",
      description: "Conexão entre conteúdos, raciocínio biológico e nível avançado.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: RevisionIcon,
      title: "REVISÕES",
      subtitle: "Fixação Estratégica",
      description: "Fixação estratégica para não esquecer até o dia da prova.",
      color: "text-accent",
      bgColor: "bg-accent/20",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            O Método
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Um método criado para o<br />
            <span className="text-primary">cérebro aprender de verdade</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <pillar.icon className={`w-12 h-12 ${pillar.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground font-display mb-1">
                {pillar.title}
              </h3>
              <p className={`text-sm font-semibold ${pillar.color} mb-4`}>
                {pillar.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative line */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full ${pillar.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Reinforcement phrase */}
        <div className="mt-16 text-center">
          <p className="text-xl lg:text-2xl font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">Forte o suficiente para Medicina.</span>{" "}
            <span className="text-muted-foreground">Claro o suficiente para qualquer estudante dedicado.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
