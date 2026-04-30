import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import type { Course } from "@/data/courses";

interface CourseOfferCardProps {
  course: Course;
}

export const CourseOfferCard: React.FC<CourseOfferCardProps> = ({ course }) => {
  const Icon = course.icon;
  const featured = course.featured;

  return (
    <section id="oferta" className="py-20 lg:py-28 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              A oferta
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-display">
              Tudo o que você recebe
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-2xl mx-auto">
            {featured && (
              <div className="flex justify-center mb-3">
                <span className="px-4 py-1 text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                  Mais popular
                </span>
              </div>
            )}
            <div
              className={`relative p-6 sm:p-10 rounded-2xl border overflow-hidden ${
                featured
                  ? "bg-primary text-primary-foreground border-primary elevated-shadow"
                  : "bg-card border-border card-shadow"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${
                    featured ? "bg-primary-foreground/10" : "bg-primary/10"
                  }`}
                >
                  <Icon className={`w-9 h-9 ${featured ? "text-accent" : "text-primary"}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display">{course.shortTitle}</h3>
                  <p className={`text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {course.subtitle}
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className={`mb-6 pb-6 border-b ${featured ? "border-primary-foreground/20" : "border-border"}`}>
                <div className={`text-sm line-through ${featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  De {course.originalPrice}
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className={`text-base ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    12x de
                  </span>
                  <span className={`text-4xl sm:text-5xl font-bold font-display ${featured ? "text-accent" : "text-primary"}`}>
                    {course.installmentPrice}
                  </span>
                </div>
                <div className={`text-sm font-semibold mt-2 ${featured ? "text-accent" : "text-green-600"}`}>
                  {course.discount} de desconto por tempo limitado
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${featured ? "text-accent" : "text-primary"}`} />
                    <span className={`text-base break-words ${featured ? "text-primary-foreground/95" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={featured ? "hero" : "default"}
                size="xl"
                className="w-full group"
                asChild
              >
                <a href={course.checkoutUrl} target="_blank" rel="noopener noreferrer">
                  {course.ctaText}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <p className={`mt-4 text-center text-xs ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                Pagamento seguro · Acesso imediato após a confirmação
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
