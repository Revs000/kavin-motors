import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InteriorCleaningPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070&auto=format&fit=crop"
            alt="Interior Cleaning Service"
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Interior Cleaning</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Professional interior cleaning and sanitizing services</p>
        </div>
      </section>

      {/* Service Details */}
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
                src="/images/complete-interior-care.jpg"
                alt="Complete Interior Care"
                fill
                className="object-cover rounded-lg"
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Cleaning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600">Detailed assessment of interior condition and specific cleaning needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Cleaning</h3>
              <p className="text-gray-600">Professional cleaning of all interior surfaces and components</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sanitization</h3>
              <p className="text-gray-600">Complete sanitization and deodorization for a fresh interior</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Refresh Your Interior?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free quote and consultation. Our experts will help you restore your vehicle's interior to its former glory.
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