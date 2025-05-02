"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const SocialMediaLinks = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center"
        aria-label="Social Media Links"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
        </svg>
      </button>

      {/* Social Media Buttons */}
      <div className={`absolute bottom-16 right-0 flex flex-col gap-2 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {/* WhatsApp */}
        <Link 
          href="https://api.whatsapp.com/send?phone=919345801993&text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services%20at%20Kavin%20Motors."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2 group"
          aria-label="Chat with us on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white text-green-500 px-2 py-1 rounded text-sm">
            WhatsApp
          </span>
        </Link>

        {/* Instagram */}
        <Link 
          href="https://www.instagram.com/kavin_motors"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 group"
          aria-label="Follow us on Instagram"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white text-pink-500 px-2 py-1 rounded text-sm">
            Instagram
          </span>
        </Link>

        {/* Facebook */}
        <Link 
          href="https://www.facebook.com/kavinmotors"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 group"
          aria-label="Follow us on Facebook"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white text-blue-600 px-2 py-1 rounded text-sm">
            Facebook
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaLinks; 