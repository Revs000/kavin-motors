import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop"
            alt="Our Services"
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Premium Services</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Discover our range of professional automotive services</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dent & Scratch Repair */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1625046584009-ec4f5d9c8c6e?q=80&w=2070&auto=format&fit=crop"
                  alt="Dent & Scratch Repair"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Dent & Scratch Repair</h2>
                <p className="text-gray-600 mb-4">
                  Professional paintless dent removal and refinishing services to restore your vehicle's appearance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Paintless Dent Removal
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Scratch Repair
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Color Matching
                  </li>
                </ul>
                <Link href="/services/dent-repair">
                  <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Full Body Restoration */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop"
                  alt="Full Body Restoration"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Full Body Restoration</h2>
                <p className="text-gray-600 mb-4">
                  Complete vehicle restoration services to bring your car back to its former glory.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Complete Body Work
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Paint Restoration
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Rust Removal
                  </li>
                </ul>
                <Link href="/services/body-restoration">
                  <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Interior Cleaning */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070&auto=format&fit=crop"
                  alt="Interior Cleaning"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Interior Cleaning</h2>
                <p className="text-gray-600 mb-4">
                  Professional interior cleaning and sanitizing services for a fresh, clean cabin.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Deep Cleaning
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Sanitization
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    Odor Removal
                  </li>
                </ul>
                <Link href="/services/interior-cleaning">
                  <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly trained professionals with years of experience in automotive services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
              <p className="text-gray-600">State-of-the-art tools and equipment for precise, professional results</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help you restore and maintain your vehicle.
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