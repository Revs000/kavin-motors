import React from 'react';
import Image from 'next/image';

export default function BodyRestorationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/images/bodywork.jpg"
                alt="Body Work"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/images/finishing.jpg"
                alt="Finishing"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 