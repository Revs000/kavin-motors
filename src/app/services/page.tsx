import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/our-services.jpg"
            alt="Car Services"
            fill
            className="object-cover blur-[1px]"
            priority
            unoptimized
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Full Range of Services</h2>
          
          {/* Engine & Mechanical Services */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Engine & Mechanical Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Engine Diagnostics</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Computer diagnostics</li>
                  <li>• Performance testing</li>
                  <li>• Engine tune-up</li>
                  <li>• Fuel system service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Transmission Service</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Transmission repair</li>
                  <li>• Clutch replacement</li>
                  <li>• Gearbox maintenance</li>
                  <li>• Fluid changes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚗</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Engine Repair</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Engine overhaul</li>
                  <li>• Timing belt replacement</li>
                  <li>• Cylinder head repair</li>
                  <li>• Engine rebuild</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Body & Paint Services */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Body & Paint Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🖌️</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Paint Services</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Full body painting</li>
                  <li>• Color matching</li>
                  <li>• Scratch repair</li>
                  <li>• Paint protection</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔨</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Dent Repair</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Paintless dent removal</li>
                  <li>• Panel beating</li>
                  <li>• Rust repair</li>
                  <li>• Body alignment</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✨</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Detailing</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Interior cleaning</li>
                  <li>• Exterior detailing</li>
                  <li>• Ceramic coating</li>
                  <li>• Paint correction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Maintenance Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛢️</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Oil & Filter Service</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Oil change</li>
                  <li>• Filter replacement</li>
                  <li>• Fluid top-up</li>
                  <li>• Lubrication service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Suspension Service</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Shock absorber replacement</li>
                  <li>• Wheel alignment</li>
                  <li>• Ball joint service</li>
                  <li>• Suspension repair</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔋</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Electrical Service</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
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
      <section className="py-12 sm:py-16 bg-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Need Professional Car Service?</h2>
          <p className="text-white mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Get in touch with us for a free quote and consultation. Our experts will help you choose the right service for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <button className="w-full sm:w-auto bg-white text-black border border-black px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Get a Free Quote
              </button>
            </Link>
            <Link href="/appointment">
              <button className="w-full sm:w-auto bg-white text-black border border-black px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 