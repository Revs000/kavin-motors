import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-emerald-600">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            <Link href="/appointment" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 