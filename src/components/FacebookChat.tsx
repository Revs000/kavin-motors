import React from 'react';
import Link from 'next/link';

const FacebookChat = () => {
  // Facebook page URL for Kavin Motors
  const facebookPageUrl = 'https://www.facebook.com/kavinmotors';
  
  return (
    <Link 
      href={facebookPageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-40 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group"
      aria-label="Follow us on Facebook"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="mr-2"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
      <span className="absolute right-16 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Follow us
      </span>
    </Link>
  );
};

export default FacebookChat; 