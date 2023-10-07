import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Footer } from "@/components/footer";

const Fira = Fira_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Olivas Digital",
  description:
    "A Olivas Digital é uma martech(marketing technology company), desenvolvemos interfaces(sites, lojas virtuais, aplicativos e plataformas) voltadas para o público interno e clientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${Fira.className} flex flex-col min-h-screen`}>
        <header className="flex items-center justify-center">
          <Header />
        </header>
        <main className="grow">{children}</main>
        <footer className="mt-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}