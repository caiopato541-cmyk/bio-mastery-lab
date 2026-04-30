import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseFinalCTAProps {
  course: Course;
}

export const CourseFinalCTA: React.FC<CourseFinalCTAProps> = ({ course }) => {
  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho dúvidas sobre o curso ${course.shortTitle}.`
  );

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Pronto para começar o<br />
              <span className="text-accent">{course.shortTitle}</span>?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/85 max-w-xl mx-auto">
              Garanta sua vaga agora com {course.discount} de desconto por tempo limitado.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href={course.checkoutUrl} target="_blank" rel="noopener noreferrer">
                  {course.ctaText}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a
                  href={`https://wa.me/5519996212930?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/70">
              12x de <span className="font-semibold text-accent">{course.installmentPrice}</span> · 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
