import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutProfessorSection } from "@/components/AboutProfessorSection";
import { MethodSection } from "@/components/MethodSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutProfessorSection />
        <section id="metodo">
          <MethodSection />
        </section>
        <TargetAudienceSection />
        <CoursesSection />
        <ComparisonTable />
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
