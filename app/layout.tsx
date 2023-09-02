import Navigation from '@/components/navigation';
import './globals.css';
// import '@/styles/index.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tienda Online de Camaras de Seguridad ',
  description: 'TIenda online de camaras de seguridad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
