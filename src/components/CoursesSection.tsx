import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { DNAIcon } from "@/components/icons/DNAIcon";
import { SynapseIcon } from "@/components/icons/SynapseIcon";
import vitorHugoTablet from "@/assets/vitor-hugo-tablet.jpg";

interface CourseCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  originalPrice: string;
  installmentPrice: string;
  discount: string;
  checkoutUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  ctaText,
  featured = false,
  originalPrice,
  installmentPrice,
  discount,
  checkoutUrl,
}) => (
  <div
    className={`relative p-5 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden ${
      featured
        ? "bg-primary text-primary-foreground border-primary elevated-shadow"
        : "bg-card border-border card-shadow hover:border-primary/30"
    }`}
  >
    {featured && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="px-4 py-1 text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
          Mais popular
        </span>
      </div>
    )}

    <div className="flex items-start gap-4 mb-4">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
          featured ? "bg-primary-foreground/10" : "bg-primary/10"
        }`}
      >
        <Icon className={`w-8 h-8 ${featured ? "text-accent" : "text-primary"}`} />
      </div>
      <div>
        <h3 className="text-xl font-bold font-display">{title}</h3>
        <p className={`text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      </div>
    </div>

    {/* Pricing */}
    <div className={`mb-4 pb-4 border-b ${featured ? "border-primary-foreground/20" : "border-border"}`}>
      <div className={`text-sm line-through ${featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
        {originalPrice}
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>12x</span>
        <span className={`text-3xl font-bold font-display ${featured ? "text-accent" : "text-primary"}`}>
          {installmentPrice}
        </span>
      </div>
      <div className={`text-xs font-semibold mt-1 ${featured ? "text-accent" : "text-green-600"}`}>
        {discount} de desconto por tempo limitado!
      </div>
    </div>

    <p className={`mb-4 text-sm ${featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
      {description}
    </p>

    <ul className="space-y-2.5 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${featured ? "text-accent" : "text-primary"}`} />
          <span className={`text-sm break-words ${featured ? "text-primary-foreground/90" : "text-foreground"}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <Button
      variant={featured ? "hero" : "default"}
      size="lg"
      className="w-full group mt-auto"
      asChild
    >
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        {ctaText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  </div>
);

export const CoursesSection: React.FC = () => {
  const courses: CourseCardProps[] = [
    {
      icon: SynapseIcon,
      title: "Med em Casa 2026 — SINAPSES + Revisões",
      subtitle: "Alto desempenho",
      description: "Alto desempenho com acompanhamento próximo até a prova.",
      features: [
        "3 aulas ao vivo semanais",
        "Material digital completo",
        "Exercícios em 3 níveis",
        "Resumos das aulas",
        "Simulados modulares",
        "Plantão de dúvidas 24h via WhatsApp",
        "Acompanhamento do desempenho",
        "Lives de revisão por módulo",
        "Revisões de 1ª fase",
        "Revisões de 2ª fase",
        "Mentoria intensiva pré-prova",
        "Preparação completa para vestibulares",
      ],
      ctaText: "Quero o SINAPSES + Revisões",
      originalPrice: "R$ 2.499,00",
      installmentPrice: "R$ 144,99",
      discount: "30%",
      checkoutUrl: "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-sinapses-revisoes-1767888055866",
    },
    {
      icon: SynapseIcon,
      title: "Med em Casa 2026 — SINAPSES",
      subtitle: "Raciocínio avançado",
      description: "Para quem já tem base e quer raciocínio avançado.",
      features: [
        "3 aulas ao vivo semanais",
        "Material digital completo",
        "Exercícios em 3 níveis",
        "Resumos das aulas",
        "Simulados modulares",
        "Plantão de dúvidas 24h via WhatsApp",
        "Acompanhamento do desempenho",
        "Lives de revisão por módulo",
      ],
      ctaText: "Quero o SINAPSES",
      originalPrice: "R$ 1.899,00",
      installmentPrice: "R$ 119,99",
      discount: "24%",
      checkoutUrl: "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-sinapses-1767888331309",
    },
    {
      icon: DNAIcon,
      title: "Med em Casa 2026 — DNA + Revisões",
      subtitle: "Base + segurança",
      description: "Base sólida + segurança até a prova.",
      features: [
        "3 aulas gravadas semanais (Metodologia BC)",
        "Material digital completo",
        "Exercícios em 3 níveis (texto + vídeo)",
        "Plantão de dúvidas semanal",
        "Lives de revisão por módulo",
        "Cronograma de estudos",
        "Grupo de apoio no WhatsApp",
        "Revisões de 1ª fase",
        "Revisões de 2ª fase",
        "Acompanhamento contínuo",
        "Suporte prioritário",
      ],
      ctaText: "Quero o DNA + Revisões",
      featured: true,
      originalPrice: "R$ 1.299,00",
      installmentPrice: "R$ 74,99",
      discount: "31%",
      checkoutUrl: "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-dna-revisoes",
    },
    {
      icon: DNAIcon,
      title: "Med em Casa 2026 — DNA",
      subtitle: "Base completa",
      description: "Base completa em Biologia para quem está começando.",
      features: [
        "3 aulas gravadas semanais (Metodologia BC)",
        "Material digital completo",
        "Exercícios em 3 níveis (texto + vídeo)",
        "Plantão de dúvidas semanal",
        "Lives de revisão por módulo",
        "Cronograma de estudos",
        "Grupo de apoio no WhatsApp",
      ],
      ctaText: "Quero começar pelo DNA",
      originalPrice: "R$ 999,00",
      installmentPrice: "R$ 49,99",
      discount: "40%",
      checkoutUrl: "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-dna-1767891008479",
    },
  ];

  return (
    <section id="cursos" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container px-4 sm:px-6">
        {/* Header with image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
          {/* Text */}
          <div className="text-center lg:text-left flex-1">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Cursos
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
              Escolha o curso ideal<br />
              <span className="text-primary">para o seu momento</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Todos os cursos têm nível suficiente para Medicina. A diferença está no ponto de partida e no acompanhamento.
            </p>
          </div>

          {/* Professor Image */}
          <div className="relative flex-shrink-0 overflow-hidden">
            <div className="absolute -inset-3 bg-secondary/20 rounded-2xl blur-xl max-w-full" />
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden border-2 border-secondary/20 shadow-xl">
              <img
                src={vitorHugoTablet}
                alt="Prof. Vitor Hugo planejando aulas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
