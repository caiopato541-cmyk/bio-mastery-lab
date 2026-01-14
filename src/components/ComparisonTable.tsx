import React from "react";

export const ComparisonTable: React.FC = () => {
  const courses = [
    {
      name: "DNA",
      idealFor: "Iniciantes",
      differential: "Base completa",
    },
    {
      name: "DNA + Revisões",
      idealFor: "Iniciantes que querem segurança",
      differential: "Base + revisões",
    },
    {
      name: "SINAPSES",
      idealFor: "Quem já tem base",
      differential: "Raciocínio e aulas ao vivo",
    },
    {
      name: "SINAPSES + Revisões",
      idealFor: "Alto desempenho",
      differential: "Acompanhamento + revisões",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 font-display">
            Compare os cursos
          </h3>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card card-shadow">
            <table className="w-full">
              <thead>
                <tr className="hero-gradient text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Curso</th>
                  <th className="text-left p-4 font-semibold">Ideal para quem</th>
                  <th className="text-left p-4 font-semibold">Diferencial</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-t border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4 font-semibold text-foreground">{course.name}</td>
                    <td className="p-4 text-muted-foreground">{course.idealFor}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {course.differential}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-bold text-foreground mb-2">{course.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Para:</span> {course.idealFor}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {course.differential}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
            Todos os cursos têm nível suficiente para Medicina. A diferença está no{" "}
            <span className="text-foreground font-medium">ponto de partida</span> e no{" "}
            <span className="text-foreground font-medium">acompanhamento</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
