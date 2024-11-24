import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const fonte = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Seu Evento começa aqui',
  description: 'Aplicação Fullstack de eventos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={fonte.className}>{children}</body>
    </html>
  );
}
