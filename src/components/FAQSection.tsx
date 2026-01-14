import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Qual a diferença entre os cursos DNA e SINAPSES?",
    answer:
      "O DNA é nosso curso base, com aulas gravadas e suporte semanal — ideal para quem está começando ou quer estudar no próprio ritmo. O SINAPSES é para quem busca alto desempenho: aulas ao vivo, suporte 24h e acompanhamento intensivo com o Prof. Vitor Hugo.",
  },
  {
    question: "O que são as Revisões Fases 1 e 2?",
    answer:
      "São módulos específicos de revisão estratégica. A Fase 1 cobre os conteúdos mais recorrentes em vestibulares de medicina, enquanto a Fase 2 aprofunda temas avançados e simulados direcionados. Juntas, potencializam sua preparação final.",
  },
  {
    question: "Qual curso é ideal para quem nunca fez cursinho?",
    answer:
      "Recomendamos o Med em Casa DNA ou DNA + Revisões. O conteúdo é estruturado do zero, com cronograma guiado e metodologia comprovada. Você terá toda a base necessária sem precisar de conhecimento prévio de cursinho.",
  },
  {
    question: "Como funciona o suporte e acompanhamento?",
    answer:
      "No DNA, você tem plantões de dúvidas semanais pelo grupo exclusivo. No SINAPSES, o suporte é 24h com acesso direto ao professor e mentoria personalizada. Todos os cursos incluem grupo de WhatsApp para interação com colegas.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! Todos os cursos podem ser parcelados em até 12x no cartão de crédito. Também oferecemos desconto especial para pagamento à vista via Pix. Entre em contato pelo WhatsApp para condições especiais.",
  },
  {
    question: "Existe garantia de satisfação?",
    answer:
      "Sim! Oferecemos 7 dias de garantia incondicional. Se você sentir que o curso não é para você, devolvemos 100% do valor investido, sem burocracia. Sua confiança é nossa prioridade.",
  },
  {
    question: "Por quanto tempo tenho acesso ao material?",
    answer:
      "Você tem acesso ao conteúdo durante todo o ano letivo (até o vestibular). Isso inclui aulas, materiais em PDF, cronogramas e simulados. Após a aprovação, comemore e compartilhe sua vitória conosco!",
  },
  {
    question: "Como sei qual curso escolher?",
    answer:
      "Analise seu momento: iniciante ou já estudou antes? Precisa de acompanhamento intensivo ou prefere autonomia? Ainda com dúvidas? Envie uma mensagem pelo WhatsApp que o Prof. Vitor Hugo ajuda você a escolher o melhor caminho.",
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reunimos as principais dúvidas sobre nossos cursos, metodologia e formas de pagamento.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Fale diretamente com o professor!
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
