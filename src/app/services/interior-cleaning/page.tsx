import React from 'react';
import Image from 'next/image';

export default function InteriorCleaningPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Interior Care</h2>
              <p className="text-gray-600 mb-6">
                Our interior cleaning service goes beyond basic cleaning. We use professional-grade equipment and 
                eco-friendly products to thoroughly clean and sanitize every inch of your vehicle's interior, 
                leaving it fresh and spotless.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our Interior Cleaning Services Include:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Upholstery deep cleaning</li>
                  <li>Carpet and floor mat cleaning</li>
                  <li>Dashboard and console cleaning</li>
                  <li>Air vent cleaning</li>
                  <li>Window and mirror cleaning</li>
                  <li>Interior sanitization</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/images/complete-interior-care.jpg"
                alt="Complete Interior Care"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 