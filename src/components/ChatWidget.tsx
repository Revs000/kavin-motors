'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Add Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWKTO_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return null; // The chat widget will be injected by the script
} 