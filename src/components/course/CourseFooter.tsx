import React from "react";
import { DNAIcon } from "@/components/icons/DNAIcon";

export const CourseFooter: React.FC = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <DNAIcon className="w-6 h-6 text-accent" />
            <span className="font-bold font-display">Bio em Casa</span>
          </div>
          <p className="text-xs text-primary-foreground/70">
            © 2026 Bio em Casa — Prof. Vitor Hugo Rocha. Todos os direitos reservados.
          </p>
          <a
            href="https://wa.me/5519996212930"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            WhatsApp: (19) 99621-2930
          </a>
        </div>
      </div>
    </footer>
  );
};
