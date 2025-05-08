import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GeneralRepairsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632823471565-1ecdf0c6c0a9?q=80&w=2070&auto=format&fit=crop"
            alt="General Repairs Service"
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">General Repairs</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Comprehensive repair services for all your vehicle needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/enginerepair.jpg"
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

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/Brake service.jpg"
                  alt="Brake Service"
                  fill
                  className="object-cover"
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

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/suspension.jpg"
                  alt="Suspension"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suspension</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Shock absorber replacement</li>
                <li>• Strut replacement</li>
                <li>• Wheel alignment</li>
                <li>• Ball joint service</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/transmission.jpg"
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

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/electrical-systems.jpg"
                  alt="Electrical Systems"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Systems</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Battery service</li>
                <li>• Alternator repair</li>
                <li>• Starter motor repair</li>
                <li>• Wiring diagnostics</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/Diagnostics.jpg"
                  alt="Diagnostics"
                  fill
                  className="object-cover"
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience in automotive repair</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Efficient repairs without compromising on quality</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Parts</h3>
              <p className="text-gray-600">Only genuine or high-quality compatible parts used</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Repair?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a detailed inspection and quote. Our expert team is ready to help get your vehicle back in perfect condition.
          </p>
          <Link href="/quote">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
} 