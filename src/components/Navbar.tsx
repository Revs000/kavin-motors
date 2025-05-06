import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-emerald-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-emerald-600">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            <Link href="/appointment" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-4 py-4">
            <Link href="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-emerald-600">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            <Link href="/appointment" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-center">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 