import React from "react";
import { DNAIcon } from "@/components/icons/DNAIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <DNAIcon className="w-8 h-8 text-accent" />
            <span className="font-bold text-lg font-display">Bio em Casa</span>
          </div>

          <p className="text-sm text-primary-foreground/70 text-center">
            © 2025 Bio em Casa - Método do Prof. Vitor Hugo Rocha. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/5519996212930" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              WhatsApp
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
