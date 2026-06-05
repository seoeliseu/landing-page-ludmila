"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CTA() {
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
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beige-500/5 rounded-full blur-3xl" />

      <div
        className={`relative max-w-5xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1fr] gap-12 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Portrait pointing toward the CTA */}
        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-beige-500/15 to-transparent rounded-sm blur-xl" />
          <div className="relative w-full aspect-[4/5] max-w-sm rounded-sm overflow-hidden shadow-2xl shadow-black/40">
            <Image
              src="/cta.jpg"
              alt="Ludmila Morais, advogada"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />
          </div>
        </div>

        <div className="text-center lg:text-left">
        <div className="line-accent mx-auto lg:mx-0 mb-6" />
        <p className="text-beige-400 text-sm tracking-[0.3em] uppercase font-[var(--font-inter)] mb-4">
          Vamos conversar
        </p>
        <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
          Cada caso exige atenção e{" "}
          <span className="text-gradient italic font-medium">estratégia</span>
        </h2>
        <p className="text-beige-200/50 text-lg lg:text-xl font-[var(--font-inter)] font-light max-w-2xl mx-auto lg:mx-0 mb-10">
          Receba orientação jurídica com clareza e segurança.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://wa.me/5562982750549"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-beige-600 hover:bg-beige-500 text-dark-900 font-semibold tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-beige-600/30 hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale comigo no WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 text-beige-400/40 text-xs tracking-widest uppercase font-[var(--font-inter)]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Sigilo profissional
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Atendimento online
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Análise individual
          </span>
        </div>
        </div>
      </div>
    </section>
  );
}
