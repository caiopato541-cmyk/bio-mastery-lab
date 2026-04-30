import { DNAIcon } from "@/components/icons/DNAIcon";
import { BrainIcon } from "@/components/icons/BrainIcon";

export interface Course {
  slug: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  originalPrice: string;
  installmentPrice: string;
  discount: string;
  checkoutUrl: string;
  format: {
    title: string;
    text: string;
  }[];
  metaDescription: string;
}

export const courses: Course[] = [
  {
    slug: "sinapses-revisoes",
    icon: BrainIcon,
    title: "Med em Casa 2026 — SINAPSES + Revisões",
    shortTitle: "SINAPSES + Revisões",
    subtitle: "Alto desempenho",
    description: "Alto desempenho com acompanhamento próximo até a prova.",
    longDescription:
      "O pacote mais completo do Bio em Casa. Aulas ao vivo, suporte 24h, simulados, lives de revisão e mentoria intensiva pré-prova. Para quem quer chegar pronto em qualquer vestibular de Medicina.",
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
    checkoutUrl:
      "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-sinapses-revisoes-1767888055866",
    format: [
      {
        title: "Aulas ao vivo",
        text: "3 encontros semanais ao vivo com o Prof. Vitor Hugo, com gravação disponível para revisar.",
      },
      {
        title: "Suporte 24h",
        text: "Tire dúvidas a qualquer hora pelo WhatsApp e tenha acompanhamento contínuo do seu desempenho.",
      },
      {
        title: "Revisões 1ª e 2ª fase",
        text: "Módulos de revisão estratégica + simulados modulares + mentoria intensiva nas semanas que antecedem a prova.",
      },
    ],
    metaDescription:
      "Med em Casa 2026 SINAPSES + Revisões: alto desempenho em Biologia para Medicina, com aulas ao vivo, suporte 24h e revisões 1ª e 2ª fase.",
  },
  {
    slug: "sinapses",
    icon: BrainIcon,
    title: "Med em Casa 2026 — SINAPSES",
    shortTitle: "SINAPSES",
    subtitle: "Raciocínio avançado",
    description: "Para quem já tem base e quer raciocínio avançado.",
    longDescription:
      "Curso avançado para quem já tem base em Biologia e quer dominar o raciocínio que Medicina exige. Aulas ao vivo, suporte 24h e acompanhamento próximo do professor.",
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
    checkoutUrl:
      "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-sinapses-1767888331309",
    format: [
      {
        title: "Aulas ao vivo",
        text: "3 encontros semanais ao vivo com o Prof. Vitor Hugo, com gravação para revisar quando quiser.",
      },
      {
        title: "Suporte 24h",
        text: "Plantão de dúvidas direto pelo WhatsApp, sem esperar plantão semanal.",
      },
      {
        title: "Foco em desempenho",
        text: "Simulados modulares, exercícios em 3 níveis e lives de revisão por módulo.",
      },
    ],
    metaDescription:
      "Med em Casa 2026 SINAPSES: curso avançado de Biologia para Medicina, com aulas ao vivo, suporte 24h e acompanhamento próximo.",
  },
  {
    slug: "dna-revisoes",
    icon: DNAIcon,
    title: "Med em Casa 2026 — DNA + Revisões",
    shortTitle: "DNA + Revisões",
    subtitle: "Base + segurança",
    description: "Base sólida + segurança até a prova.",
    longDescription:
      "Construa uma base sólida em Biologia do zero e ainda receba toda a estrutura de revisões 1ª e 2ª fase. O caminho mais seguro para chegar preparado em Medicina sem queimar etapas.",
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
    checkoutUrl:
      "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-dna-revisoes",
    format: [
      {
        title: "Aulas gravadas",
        text: "3 aulas gravadas por semana seguindo a Metodologia BC, no seu ritmo.",
      },
      {
        title: "Plantão semanal",
        text: "Plantão de dúvidas semanal + grupo de WhatsApp para tirar dúvidas com o time.",
      },
      {
        title: "Revisões 1ª e 2ª fase",
        text: "Módulos completos de revisão para chegar preparado em qualquer etapa do vestibular.",
      },
    ],
    metaDescription:
      "Med em Casa 2026 DNA + Revisões: base completa em Biologia + revisões 1ª e 2ª fase. O caminho mais seguro até a aprovação em Medicina.",
  },
  {
    slug: "dna",
    icon: DNAIcon,
    title: "Med em Casa 2026 — DNA",
    shortTitle: "DNA",
    subtitle: "Base completa",
    description: "Base completa em Biologia para quem está começando.",
    longDescription:
      "O ponto de partida ideal para quem quer aprender Biologia do zero, com método e clareza. Aulas gravadas, cronograma e suporte semanal — no seu ritmo, com toda a estrutura da Metodologia BC.",
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
    checkoutUrl:
      "https://bioemcasa.eveclass.com/pt/comprar/produto/med-em-casa-2026-dna-1767891008479",
    format: [
      {
        title: "Aulas gravadas",
        text: "3 aulas por semana seguindo a Metodologia BC, no seu ritmo e a qualquer hora.",
      },
      {
        title: "Plantão semanal",
        text: "Tire dúvidas no plantão semanal e no grupo de WhatsApp com a turma.",
      },
      {
        title: "Cronograma guiado",
        text: "Cronograma de estudos + lives de revisão por módulo para você não se perder.",
      },
    ],
    metaDescription:
      "Med em Casa 2026 DNA: aprenda Biologia do zero com a Metodologia BC. Aulas gravadas, plantão semanal e cronograma completo.",
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);
