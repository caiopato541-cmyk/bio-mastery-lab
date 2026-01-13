import React from "react";
import { Check, X } from "lucide-react";

export const TargetAudienceSection: React.FC = () => {
  const forWho = [
    "Medicina",
    "ENEM",
    "Vestibulares",
    "Ensino médio",
    "Reforço de alto nível",
  ];

  const notFor = [
    "Quer atalhos",
    "Busca decoreba",
    "Não quer estudar",
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Para quem é
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            O Bio em Casa é para você?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For who */}
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-6 font-display flex items-center gap-2">
              <Check className="w-6 h-6" />
              Para quem é
            </h3>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div className="p-8 rounded-2xl bg-muted border border-border">
            <h3 className="text-xl font-bold text-muted-foreground mb-6 font-display flex items-center gap-2">
              <X className="w-6 h-6" />
              Não é para quem
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
