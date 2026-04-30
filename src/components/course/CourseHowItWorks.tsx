import React from "react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import type { Course } from "@/data/courses";

interface CourseHowItWorksProps {
  course: Course;
}

export const CourseHowItWorks: React.FC<CourseHowItWorksProps> = ({ course }) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Como funciona
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-display">
              O formato do curso
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {course.format.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div className="p-6 rounded-2xl bg-card border border-border card-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-display mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
