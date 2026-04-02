"use client";

import Image from "next/image";

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
          <div className="flex flex-row items-center gap-6">
            <Image
              src="/logo-transparente.png"
              alt="Logo"
              width={160}
              height={160}
              className="h-32 w-auto"
              priority
            />
            <div>
              <h2 className="text-beige-300 text-3xl md:text-4xl tracking-[0.2em] font-light uppercase mb-3">
                Ludmila Morais
              </h2>
              <p className="text-beige-400 text-sm tracking-[0.3em] uppercase font-[var(--font-inter)]">
                Advocacia e Consultoria Jurídica
              </p>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
            Protegemos o que é{" "}
            <span className="text-gradient font-medium italic">
              mais importante
            </span>{" "}
            para você
          </h1>
          <p className="text-beige-200/60 text-lg lg:text-xl leading-relaxed max-w-xl font-[var(--font-inter)] font-light">
            Sua família, seus direitos, seu futuro. Atuação especializada em
            Direito de Família, Previdenciário e Civil com atendimento
            humanizado e dedicação em cada caso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/5500000000000"
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
              Agende sua Consulta
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-beige-500/30 text-beige-300 hover:bg-beige-500/10 hover:border-beige-400/50 tracking-wider uppercase text-sm rounded-sm transition-all duration-300"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="hidden lg:flex justify-end animate-fade-in-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-beige-500/20 to-transparent rounded-sm blur-xl" />
            <div className="relative w-[420px] h-[520px] rounded-sm overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/persona.png"
                alt="Dra. Ludmila Morais - Advogada"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-beige rounded-sm px-6 py-4 animate-float">
              <p className="text-beige-300 text-xs tracking-widest uppercase font-[var(--font-inter)]">
                Especialista em
              </p>
              <p className="text-beige-100 text-lg font-medium mt-1">
                Família & Previdenciário
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
