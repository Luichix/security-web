import Navigation from '@/components/navigation';
import './globals.css';
// import '@/styles/index.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Container from '@/components/container';

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
        <footer className="relative bg-gradient-to-b from-gray-100 to-gray-400">
          <div className="custom-shape-divider-top-1693703659">
            <svg
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <Container>
            <div className="flex flex-col gap-8 py-12 justify-between">
              <div className="font-medium text-gray-700 flex text-center flex-col justify-between gap-2  ">
                <Link href="/">Política de Privacidad</Link>
                <Link href="/">Política de Cookies</Link>
                <Link href="/">Aviso Legal</Link>
                <Link href="/">Contacto</Link>
              </div>
              <div className="flex flex-col text-center gap-2  justify-between">
                <span>
                  Pagina web de recomendación sobre
                  <b className="block">Camaras de Seguridad</b>
                </span>
                <span>
                  Diseñado por: &nbsp;
                  <a
                    href="https://luichix.github.io/portafolio"
                    target="_blank"
                    className="font-bold"
                  >
                    Luichix
                  </a>
                </span>
              </div>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
