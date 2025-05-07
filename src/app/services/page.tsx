import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop"
            alt="Car Services"
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Comprehensive car care solutions for every need</p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Full Range of Services</h2>
          
          {/* Engine & Mechanical Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Engine & Mechanical Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-semibold mb-3">Engine Diagnostics</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer diagnostics</li>
                  <li>• Performance testing</li>
                  <li>• Engine tune-up</li>
                  <li>• Fuel system service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="text-xl font-semibold mb-3">Transmission Service</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transmission repair</li>
                  <li>• Clutch replacement</li>
                  <li>• Gearbox maintenance</li>
                  <li>• Fluid changes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="relative h-32 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
                    alt="Brake Service"
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3">Brake Service</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brake pad replacement</li>
                  <li>• Rotor resurfacing</li>
                  <li>• Brake fluid flush</li>
                  <li>• ABS system repair</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Body & Paint Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Body & Paint Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🖌️</div>
                <h4 className="text-xl font-semibold mb-3">Paint Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full body painting</li>
                  <li>• Color matching</li>
                  <li>• Scratch repair</li>
                  <li>• Paint protection</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔨</div>
                <h4 className="text-xl font-semibold mb-3">Dent Repair</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Paintless dent removal</li>
                  <li>• Panel beating</li>
                  <li>• Rust repair</li>
                  <li>• Body alignment</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-semibold mb-3">Detailing</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Interior cleaning</li>
                  <li>• Exterior detailing</li>
                  <li>• Ceramic coating</li>
                  <li>• Paint correction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Maintenance Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🛢️</div>
                <h4 className="text-xl font-semibold mb-3">Oil & Filter Service</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Oil change</li>
                  <li>• Filter replacement</li>
                  <li>• Fluid top-up</li>
                  <li>• Lubrication service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-semibold mb-3">Suspension Service</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Shock absorber replacement</li>
                  <li>• Wheel alignment</li>
                  <li>• Ball joint service</li>
                  <li>• Suspension repair</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔋</div>
                <h4 className="text-xl font-semibold mb-3">Electrical Service</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Battery replacement</li>
                  <li>• Alternator repair</li>
                  <li>• Starter motor service</li>
                  <li>• Wiring repairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Professional Car Service?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free quote and consultation. Our experts will help you choose the right service for your vehicle.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/quote">
              <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Get a Free Quote
              </button>
            </Link>
            <Link href="/appointment">
              <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 