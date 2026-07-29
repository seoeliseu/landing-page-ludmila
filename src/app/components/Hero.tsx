"use client";

import Image from "next/image";
import Brand from "./Brand";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-beige-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-beige-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-0 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="space-y-8 animate-fade-in-left">
          <Brand size="lg" className="-ml-2" priority />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
            Atuação em Direito Previdenciário,{" "}
            <span className="text-gradient font-medium italic">
              Família e Sucessões
            </span>
          </h1>
          <p className="text-beige-100 text-xl lg:text-2xl leading-relaxed max-w-xl font-[var(--font-inter)] font-light">
            Soluções jurídicas com clareza, estratégia e segurança.
          </p>
          <p className="text-beige-200/50 text-base lg:text-lg leading-relaxed max-w-xl font-[var(--font-inter)] font-light">
            Atuação ampliada em outras áreas com suporte especializado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/5562982750549"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-beige-600 hover:bg-beige-500 text-dark-900 font-semibold tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-beige-600/20 hover:-translate-y-0.5"
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
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-beige-500/30 text-beige-300 hover:bg-beige-500/10 hover:border-beige-400/50 tracking-wider uppercase text-sm rounded-sm transition-all duration-300"
            >
              Áreas de atuação
            </a>
          </div>

          <a
            href="https://www.instagram.com/advludmilamorais/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-beige-300 hover:text-beige-200 transition-colors duration-300"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-beige-500/30 group-hover:bg-beige-500/10 group-hover:border-beige-400/50 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <span className="text-sm tracking-wider font-[var(--font-inter)]">
              @advludmilamorais
            </span>
          </a>
        </div>

        {/* Portrait */}
        <div className="hidden lg:flex justify-end animate-fade-in-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-beige-500/20 to-transparent rounded-sm blur-xl" />
            <div className="relative w-[420px] h-[520px] rounded-sm overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/apresentacao.jpg"
                alt="Ludmila Morais, advogada"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-beige rounded-sm px-6 py-4 animate-float">
              <p className="text-beige-300 text-xs tracking-widest uppercase font-[var(--font-inter)]">
                Áreas principais
              </p>
              <p className="text-beige-100 text-lg font-medium mt-1">
                Previdenciário · Família & Sucessões
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-beige-400/50 to-transparent" />
      </div>
    </section>
  );
}
