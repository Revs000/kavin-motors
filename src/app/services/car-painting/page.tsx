import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CarPaintingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop"
            alt="Car Painting Service"
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Car Painting Services</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Professional car painting with precision and quality</p>
          <div className="flex gap-4">
            <Link href="/quote">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom & OEM-matched Paint Jobs</h2>
              <p className="text-gray-700 mb-6">
                At Kavin Motors, we offer professional car painting services that transform your vehicle's appearance. 
                Our expert team uses state-of-the-art equipment and premium quality paints to ensure a flawless finish 
                that matches your expectations.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our Painting Services Include:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Full car repainting</li>
                  <li>Partial panel painting</li>
                  <li>Color change services</li>
                  <li>OEM color matching</li>
                  <li>Custom color application</li>
                  <li>Paint protection film</li>
                  <li>Ceramic coating</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
                alt="Car Painting Process"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Painting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">Thorough cleaning, sanding, and masking to ensure perfect paint application</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600">Professional spraying with premium paints in controlled environment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finishing</h3>
              <p className="text-gray-600">Quality checks, buffing, and final detailing for a showroom finish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Before & After Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                alt="Car Painting Result 1 - Sporty Red Finish"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                <p>Sporty Red Finish</p>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
                alt="Car Painting Result 2 - Classic Black"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                <p>Classic Black</p>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop"
                alt="Car Painting Result 3 - Pearl White Premium"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                <p>Pearl White Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Car?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free quote and consultation. Our experts will help you choose the perfect color and finish for your vehicle.
          </p>
          <Link href="/quote">
            <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
} 