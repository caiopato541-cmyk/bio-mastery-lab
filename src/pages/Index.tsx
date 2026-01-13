import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { MethodSection } from "@/components/MethodSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
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
        <AuthoritySection />
        <section id="metodo">
          <MethodSection />
        </section>
        <CoursesSection />
        <ComparisonTable />
        <TargetAudienceSection />
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
