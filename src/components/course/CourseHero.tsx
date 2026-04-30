import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DNAIcon } from "@/components/icons/DNAIcon";
import type { Course } from "@/data/courses";

interface CourseHeroProps {
  course: Course;
}

export const CourseHero: React.FC<CourseHeroProps> = ({ course }) => {
  const Icon = course.icon;
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-28 h-28 opacity-10 animate-float-slow">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-16 right-12 w-24 h-24 opacity-10 animate-float-fast">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Icon className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
              {course.subtitle}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight font-display">
            {course.shortTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {course.longDescription}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href={course.checkoutUrl} target="_blank" rel="noopener noreferrer">
                {course.ctaText}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#oferta">Ver o que está incluso</a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70">
            12x de <span className="font-semibold text-accent">{course.installmentPrice}</span> · {course.discount} de desconto por tempo limitado
          </p>
        </div>
      </div>
    </section>
  );
};
