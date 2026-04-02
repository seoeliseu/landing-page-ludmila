"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - only visible when scrolled */}
        <a 
          href="#inicio" 
          className={`flex items-center gap-3 group transition-all duration-500 overflow-hidden ${
            scrolled ? "opacity-100 translate-y-0 w-auto md:mr-8" : "opacity-0 -translate-y-4 w-0 pointer-events-none"
          }`}
        >
          <Image
            src="/logo-transparente.png"
            alt="Ludmila Morais - Advocacia e Consultoria Jurídica"
            width={160}
            height={48}
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>
        {/* Empty div placeholder to keep flex distribution when not scrolled */}
        {!scrolled && <div className="w-0"></div>}

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-beige-200/70 hover:text-beige-300 text-sm font-[var(--font-inter)] tracking-wider uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-beige-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-beige-600 hover:bg-beige-500 text-dark-900 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-beige-600/20"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[2px] bg-beige-300 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-beige-300 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-beige-300 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6 bg-dark-900/98 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-beige-200/70 hover:text-beige-300 text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 bg-beige-600 hover:bg-beige-500 text-dark-900 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
