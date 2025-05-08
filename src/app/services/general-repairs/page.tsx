import React from 'react';
import Image from 'next/image';

export default function GeneralRepairsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engine Repair Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/enginerepair.jpg"
                  alt="Engine Repair"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engine Repair</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Engine diagnostics</li>
                <li>• Engine overhaul</li>
                <li>• Timing belt replacement</li>
                <li>• Oil and filter change</li>
              </ul>
            </div>
            {/* Brake Service Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/brake-service.jpg"
                  alt="Brake Service"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brake Service</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Brake pad replacement</li>
                <li>• Rotor resurfacing</li>
                <li>• Brake fluid flush</li>
                <li>• ABS system repair</li>
              </ul>
            </div>
            {/* Transmission Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/transmission.jpg"
                  alt="Transmission"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transmission</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Transmission fluid change</li>
                <li>• Clutch replacement</li>
                <li>• Gear box repair</li>
                <li>• Differential service</li>
              </ul>
            </div>
            {/* Diagnostics Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/diagnostics.jpg"
                  alt="Diagnostics"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnostics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Computer diagnostics</li>
                <li>• Error code reading</li>
                <li>• Performance testing</li>
                <li>• Sensor calibration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 