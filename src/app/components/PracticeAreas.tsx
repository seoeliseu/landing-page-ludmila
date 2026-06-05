"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const principais = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Direito Previdenciário",
    items: ["Aposentadorias", "Benefícios do INSS", "Planejamento previdenciário"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Famílias e Sucessões",
    items: [
      "Divórcio",
      "União estável",
      "Guarda",
      "Convivência",
      "Pensão alimentícia",
      "Interdição",
      "Curatela",
      "Inventário",
      "Alvará judicial",
    ],
  },
];

const complementares = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Direito Civil",
    items: ["Contratos", "Cobrança de dívidas", "Execuções"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
    title: "Direito Criminal",
    items: ["Defesa em processos criminais", "Acompanhamento em delegacia", "Com suporte especializado"],
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
            Áreas de Atuação
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            Foco em Previdenciário, Família e{" "}
            <span className="text-gradient italic font-medium">Sucessões</span>
          </h2>
          <p className="text-beige-200/50 text-lg font-[var(--font-inter)] font-light">
            Atuação principal em Previdenciário, Família e Sucessões, com atuação
            complementar estruturada em outras áreas do Direito.
          </p>
        </div>

        {/* Featured: principais */}
        <div
          className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-8 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative min-h-[340px] lg:min-h-full rounded-sm overflow-hidden">
            <Image
              src="/areas.jpg"
              alt="Ludmila Morais, advogada"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 inline-flex w-fit items-center gap-2 text-beige-200 text-xs tracking-[0.2em] uppercase font-[var(--font-inter)] border border-beige-300/30 bg-dark-900/40 backdrop-blur-sm rounded-full px-4 py-1.5">
              Áreas principais
            </span>
          </div>

          {/* Two principal cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            {principais.map((area) => (
              <div
                key={area.title}
                className="relative glass-beige rounded-sm p-8 flex flex-col"
              >
                <div className="text-beige-300 mb-6">{area.icon}</div>
                <h3 className="text-2xl font-light mb-5 text-gradient">
                  {area.title}
                </h3>
                <ul className="space-y-2.5">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-beige-200/70 text-sm font-[var(--font-inter)]"
                    >
                      <span className="w-1 h-1 bg-beige-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Complementary label */}
        <p className="text-center text-beige-400/70 text-sm tracking-[0.3em] uppercase font-[var(--font-inter)] mb-10">
          Atuação complementar
        </p>

        {/* Complementary cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {complementares.map((area, index) => (
            <div
              key={area.title}
              className={`group relative glass rounded-sm p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-beige-400 mb-6 transition-colors duration-300 group-hover:text-beige-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-light mb-5 group-hover:text-gradient transition-all duration-300">
                {area.title}
              </h3>
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
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-beige-500 to-beige-300 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Essential complementary text */}
        <p
          className={`max-w-3xl mx-auto text-center text-beige-200/50 text-base leading-relaxed font-[var(--font-inter)] font-light mt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Atuação em demandas específicas com suporte de profissionais
          especializados, garantindo atendimento completo, estratégico e seguro.
        </p>
      </div>
    </section>
  );
}
