'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-gradient-to-l from-gray-500 to-gray-600">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <Link href="/" className="text-white text-lg font-bold ">
          Camaras de Seguridad &nbsp;
          <small className="text-gray-200">store</small>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Modelos
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Marcas
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Guías
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Reseñas
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contacto
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-8 py-6  border-t-2 border-white space-y-1 flex flex-col gap-4 ">
          <a href="#" className="text-white block hover:text-gray-300">
            Modelos
          </a>
          <a href="#" className="text-white block hover:text-gray-300">
            Marcas
          </a>
          <a href="#" className="text-white block hover:text-gray-300">
            Guías
          </a>
          <a href="#" className="text-white block hover:text-gray-300">
            Reseñas
          </a>
          <a href="#" className="text-white block hover:text-gray-300">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
