import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
    "Advocacia especializada em Direito de Família, Previdenciário e Civil. Divórcio, Guarda, Pensão, Inventário, Aposentadorias, INSS e Contratos. Atendimento humanizado e personalizado.",
  keywords: [
    "advogada",
    "direito de família",
    "previdenciário",
    "divórcio",
    "guarda",
    "pensão",
    "inventário",
    "aposentadoria",
    "INSS",
    "contratos",
    "Ludmila Morais",
  ],
  openGraph: {
    title: "Ludmila Morais | Advocacia e Consultoria Jurídica",
    description:
      "Advocacia especializada em Direito de Família, Previdenciário e Civil. Atendimento humanizado e personalizado.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
