import React from "react";
import { Button } from "@/components/ui/button";
import { DNAIcon } from "@/components/icons/DNAIcon";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10 animate-float">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-10 animate-float animate-delay-200">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10 animate-float animate-delay-300">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 opacity-10 animate-float animate-delay-100">
          <DNAIcon className="w-full h-full text-primary-foreground" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-20 text-center">
        {/* Authority badge */}
        <div className="animate-slide-up opacity-0 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary-foreground/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">BIO EM CASA</span>
            <span className="text-sm text-primary-foreground/60">•</span>
            <span className="text-sm text-primary-foreground/70">Método do Prof. Vitor Hugo Rocha</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="animate-slide-up opacity-0 animate-delay-100 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight font-display">
          Domine Biologia no nível que{" "}
          <span className="text-gradient">Medicina exige</span>
          {" "}— mesmo estudando em casa
        </h1>

        {/* Subheadline */}
        <p className="animate-slide-up opacity-0 animate-delay-200 mt-6 max-w-2xl text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
          Um método claro, estruturado e testado para quem quer resultados altos em Medicina, ENEM e vestibulares em geral.
        </p>

        {/* CTA buttons */}
        <div className="animate-slide-up opacity-0 animate-delay-300 mt-10 flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="xl" className="group">
            Quero dominar Biologia
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Conhecer o método
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="animate-slide-up opacity-0 animate-delay-400 mt-12 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Preparação para Medicina</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>ENEM e vestibulares</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Ensino médio</span>
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
