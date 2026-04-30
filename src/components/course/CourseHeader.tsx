import React from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-bioemcasa.png";

interface CourseHeaderProps {
  checkoutUrl: string;
  ctaText?: string;
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({ checkoutUrl, ctaText = "Quero garantir minha vaga" }) => {
  return (
    <header className="sticky top-0 z-50 py-3 glass border-b border-border">
      <div className="container flex items-center justify-between gap-4">
        <a href="/" className="flex items-center">
          <img src={logoImage} alt="Bio em Casa" className="h-9 w-auto" />
        </a>
        <Button variant="default" size="sm" asChild>
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            <span className="hidden sm:inline">{ctaText}</span>
            <span className="sm:hidden">Garantir vaga</span>
          </a>
        </Button>
      </div>
    </header>
  );
};
