"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-beige-600/30 to-transparent" />
      <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-beige-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden">
              <Image
                src="/persona-2.jpeg"
                alt="Dra. Ludmila Morais"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-beige-500/20 rounded-sm max-w-md mx-auto lg:mx-0 -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="line-accent mb-6" />
              <p className="text-beige-400 text-sm tracking-[0.3em] uppercase font-[var(--font-inter)] mb-4">
                Sobre a Advogada
              </p>
              <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                Compromisso com a{" "}
                <span className="text-gradient italic font-medium">
                  justiça
                </span>{" "}
                e seus direitos
              </h2>
            </div>

            <p className="text-beige-200/60 text-lg leading-relaxed font-[var(--font-inter)] font-light">
              A Dra. Ludmila Morais é advogada especializada em Direito de
              Família, Previdenciário e Contratos Cíveis, dedicada a oferecer um
              atendimento jurídico humanizado e personalizado. Cada caso é
              tratado com a atenção e o cuidado que merece.
            </p>

            <p className="text-beige-200/60 text-lg leading-relaxed font-[var(--font-inter)] font-light">
              Com formação sólida e experiência comprovada, atua na defesa dos
              interesses de seus clientes com ética, transparência e
              comprometimento — valores que são a base de toda a sua prática
              jurídica.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "684+", label: "Seguidores" },
                { number: "100%", label: "Dedicação" },
                { number: "3", label: "Áreas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left border-t border-beige-500/20 pt-4"
                >
                  <p className="text-3xl lg:text-4xl text-gradient font-light">
                    {stat.number}
                  </p>
                  <p className="text-beige-400/60 text-xs tracking-widest uppercase mt-1 font-[var(--font-inter)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
