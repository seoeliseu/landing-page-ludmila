"use client";

import { useEffect, useRef, useState } from "react";

const areas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Famílias e Sucessões",
    subtitle: "Direito de Família",
    items: [
      "Divórcio consensual e litigioso",
      "União estável",
      "Guarda e convivência",
      "Pensão alimentícia",
      "Interdição",
      "Inventário e alvará",
    ],
    description:
      "Resolvemos conflitos familiares com sensibilidade e eficiência, protegendo seus vínculos mais importantes.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Previdenciário",
    subtitle: "Direito Previdenciário",
    items: [
      "Aposentadorias (todos os tipos)",
      "Benefícios do INSS",
      "Revisão de benefícios",
      "Auxílio-doença",
      "BPC/LOAS",
      "Pensão por morte",
    ],
    description:
      "Garantimos que você receba os benefícios a que tem direito, com acompanhamento em todas as etapas do processo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Contratos Cíveis",
    subtitle: "Direito Civil",
    items: [
      "Análise de contratos",
      "Revisão contratual",
      "Elaboração de contratos",
    ],
    description:
      "Assessoria jurídica exclusiva e especializada em contratos cíveis para garantir total segurança nas suas negociações.",
  },
];

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-dark-800/30"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-beige-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-beige-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="line-accent mx-auto mb-6" />
          <p className="text-beige-400 text-sm tracking-[0.3em] uppercase font-[var(--font-inter)] mb-4">
            Expertise Jurídica
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            Áreas de{" "}
            <span className="text-gradient italic font-medium">atuação</span>
          </h2>
          <p className="text-beige-200/50 text-lg font-[var(--font-inter)] font-light">
            Cada área do Direito exige conhecimento técnico e sensibilidade.
            Oferecemos assessoria completa nas seguintes especialidades.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative glass rounded-sm p-8 lg:p-10 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-beige-500/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="text-beige-400 mb-6 transition-colors duration-300 group-hover:text-beige-300">
                {area.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-light mb-2 group-hover:text-gradient transition-all duration-300">
                {area.title}
              </h3>
              <p className="text-beige-500/60 text-xs tracking-widest uppercase font-[var(--font-inter)] mb-4">
                {area.subtitle}
              </p>

              {/* Description */}
              <p className="text-beige-200/50 text-sm leading-relaxed font-[var(--font-inter)] font-light mb-6">
                {area.description}
              </p>

              {/* Items */}
              <ul className="space-y-2.5">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-beige-200/60 text-sm font-[var(--font-inter)]"
                  >
                    <span className="w-1 h-1 bg-beige-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-beige-500 to-beige-300 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
