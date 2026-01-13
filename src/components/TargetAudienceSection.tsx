import React from "react";
import { Check, Target } from "lucide-react";

export const TargetAudienceSection: React.FC = () => {
  const forWho = [
    "Quer Medicina ou outro curso concorrido",
    "Estuda, mas sente falta de direcionamento",
    "Quer parar de decorar",
    "Precisa de um cronograma claro",
    "Quer aprender Biologia de verdade",
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Para quem é
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Perfeito para você que:
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-display">
                O Bio em Casa é ideal se você...
              </h3>
            </div>
            
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust message */}
          <p className="mt-8 text-center text-muted-foreground max-w-xl mx-auto">
            👉 <span className="text-foreground font-medium">Medicina é nível, não limitação de público.</span> O Bio em Casa ensina Biologia do zero ao avançado, atendendo ENEM, vestibulares, área da saúde e ensino médio.
          </p>
        </div>
      </div>
    </section>
  );
};
