import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DNAIcon } from "@/components/icons/DNAIcon";
import { SynapseIcon } from "@/components/icons/SynapseIcon";
import { RevisionIcon } from "@/components/icons/RevisionIcon";
import vitorHugoDna from "@/assets/vitor-hugo-dna.jpg";

export const MethodSection: React.FC = () => {
  const pillars = [
    {
      icon: DNAIcon,
      title: "DNA",
      subtitle: "Base Completa",
      description: "Constrói a base completa em Biologia, do zero, com clareza e segurança.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: SynapseIcon,
      title: "SINAPSES",
      subtitle: "Raciocínio Avançado",
      description: "Desenvolve raciocínio biológico, conexão entre conteúdos e nível avançado.",
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
    <section className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container px-4 sm:px-6">
        {/* Header with image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">
          {/* Professor Image */}
          <div className="relative flex-shrink-0 order-1 lg:order-none overflow-hidden">
            <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl max-w-full" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
              <img
                src={vitorHugoDna}
                alt="Prof. Vitor Hugo com modelo de DNA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text */}
          <div className="text-center lg:text-left flex-1">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              O Método
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
              Um caminho claro,<br />
              <span className="text-primary">do básico ao avançado</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              A Metodologia BC foi desenvolvida para ensinar Biologia de forma lógica e integrada, conectando conceitos para que você entenda o porquê antes de decorar o como.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
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
        <div className="mt-16 text-center space-y-8 px-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground max-w-3xl mx-auto leading-relaxed break-words">
            <span className="text-primary font-semibold">Forte o suficiente para Medicina.</span>{" "}
            <span className="text-muted-foreground">Claro o suficiente para qualquer estudante dedicado.</span>
          </p>

          <Button variant="default" size="lg" className="group" asChild>
            <a href="#cursos">
              Quero aprender com método
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
