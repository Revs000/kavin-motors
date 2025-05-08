import React from 'react';
import Image from 'next/image';

export default function DentRepairPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 relative h-[400px]">
              <Image
                src="/images/images/scratch-repair-refinishing.jpg"
                alt="Scratch Repair & Refinishing"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scratch Repair & Refinishing</h2>
              <p className="text-gray-600 mb-6">
                Our scratch repair services restore your vehicle's appearance by carefully removing scratches and 
                refinishing affected areas. We use advanced techniques and premium materials to ensure a seamless 
                finish that matches your car's original paint.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our Scratch Repair Services:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Clear coat scratch removal</li>
                  <li>Deep scratch repair</li>
                  <li>Paint touch-up</li>
                  <li>Bumper scratch repair</li>
                  <li>Wheel scratch repair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 