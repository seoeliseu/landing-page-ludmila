"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Maria S.",
    role: "Cliente — Direito de Família",
    text: "A Dra. Ludmila cuidou do meu processo de divórcio com muita sensibilidade. Em um momento tão difícil, ter uma advogada que realmente se importa fez toda a diferença. Recomendo de olhos fechados.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "Cliente — Previdenciário",
    text: "Após anos tentando minha aposentadoria sozinho, procurei a Dra. Ludmila. Em poucos meses, tudo estava resolvido. Profissionalismo e competência de verdade.",
    stars: 5,
  },
  {
    name: "Ana Paula M.",
    role: "Cliente — Inventário",
    text: "O inventário da minha família parecia impossível. A Dra. Ludmila conduziu tudo com muita organização e paciência, sempre nos mantendo informados. Excelente profissional.",
    stars: 5,
  },
];

export default function Testimonials() {
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
      id="depoimentos"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-dark-800/30"
    >
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
            Depoimentos
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            O que nossos clientes{" "}
            <span className="text-gradient italic font-medium">dizem</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`glass rounded-sm p-8 lg:p-10 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-beige-500/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-beige-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-beige-200/60 text-base leading-relaxed font-[var(--font-inter)] font-light italic mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-beige-500/10 pt-6">
                <p className="text-beige-200 font-medium">{t.name}</p>
                <p className="text-beige-400/50 text-xs tracking-wider uppercase font-[var(--font-inter)] mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
