import React from "react";
import { Button } from "@/components/ui/button";
import { DNAIcon } from "@/components/icons/DNAIcon";
import { ArrowRight } from "lucide-react";
import vitorHugoHero from "@/assets/vitor-hugo-hero.jpg";
import logoTransparent from "@/assets/logo-bioemcasa-transparent.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated background elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10 animate-float-slow">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-10 animate-float-fast animate-delay-200">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10 animate-float animate-delay-300">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 opacity-10 animate-float-slow animate-delay-100">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen py-20 px-4 sm:px-6 gap-8 lg:gap-12">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl w-full">
          {/* Logo */}
          <div className="animate-slide-up opacity-0 mb-8">
            <img 
              src={logoTransparent} 
              alt="Bio em Casa" 
              className="h-16 sm:h-20 w-auto mx-auto lg:mx-0 brightness-0 invert"
            />
          </div>

          {/* Main headline */}
          <h1 className="animate-slide-up opacity-0 animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight font-display">
            Aprenda Biologia do zero ao nível que{" "}
            <span className="text-gradient">Medicina exige</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up opacity-0 animate-delay-200 mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
            Com método, clareza e acompanhamento — mesmo estudando em casa.
          </p>

          {/* CTA buttons */}
          <div className="animate-slide-up opacity-0 animate-delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#cursos">
                Quero dominar Biologia
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#metodo">Conhecer o método</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-slide-up opacity-0 animate-delay-400 mt-12 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 text-sm text-primary-foreground/60 px-4 sm:px-0">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="whitespace-nowrap">Preparação para Medicina</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="whitespace-nowrap">ENEM e vestibulares</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="whitespace-nowrap">Ensino médio</span>
            </div>
          </div>
        </div>

        {/* Professor Image */}
        <div className="animate-slide-up opacity-0 animate-delay-200 flex-shrink-0 relative">
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl" />
            
            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
              <img
                src={vitorHugoHero}
                alt="Prof. Vitor Hugo Rocha"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Badge */}
            <div className="absolute bottom-6 right-0 translate-x-4 sm:translate-x-6 px-4 py-2 rounded-full glass-dark border border-accent/30 whitespace-nowrap shadow-lg">
              <span className="text-sm font-semibold text-accent">+500 alunos aprovados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
