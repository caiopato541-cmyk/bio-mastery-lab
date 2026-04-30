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
    question: "Como recebo o acesso depois da compra?",
    answer:
      "Assim que o pagamento é confirmado, você recebe um e-mail com seus dados de acesso à plataforma e ao grupo exclusivo de WhatsApp. O acesso é imediato no caso de cartão de crédito e Pix.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim. Todos os cursos podem ser parcelados em até 12x no cartão de crédito. Para Pix à vista, há condição especial — fale pelo WhatsApp para mais detalhes.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. Você tem 7 dias de garantia incondicional. Se sentir que o curso não é para você, devolvemos 100% do valor investido, sem burocracia.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "Você tem acesso ao conteúdo durante todo o ano letivo de 2026, até o vestibular. Aulas, materiais e simulados ficam liberados nesse período.",
  },
];

export const CourseFAQ: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Tire suas dúvidas
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-display">
              Perguntas frequentes
            </h2>
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
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
