import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ludmila Morais | Advocacia e Consultoria Jurídica",
  description:
    "Atuação em Direito Previdenciário, de Família e Sucessões, com atuação complementar em Civil e Criminal mediante suporte especializado. Orientação jurídica com clareza, estratégia e segurança.",
  keywords: [
    "advogada",
    "previdenciário",
    "INSS",
    "aposentadoria",
    "direito de família",
    "sucessões",
    "inventário",
    "divórcio",
    "pensão alimentícia",
    "Ludmila Morais",
  ],
  openGraph: {
    title: "Ludmila Morais | Advocacia e Consultoria Jurídica",
    description:
      "Atuação em Direito Previdenciário, de Família e Sucessões. Orientação jurídica com clareza, estratégia e segurança.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
