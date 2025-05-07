import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BodyRestorationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Full Body Restoration</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Transform your classic car to its former glory with our expert restoration services</p>
          <div className="flex gap-4">
            <Link href="/quote">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Vehicle Restoration</h2>
              <p className="text-gray-600 mb-6">
                At Kavin Motors, our full body restoration service is a comprehensive process that brings your vehicle back to its original condition or better. We combine traditional craftsmanship with modern techniques to deliver exceptional results that exceed expectations.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you have a classic car that needs a complete overhaul or a modern vehicle that has suffered significant damage, our expert team has the skills and experience to restore it to showroom quality.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Choose Our Restoration Service:</h3>
                <ul className="list-disc list-inside space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-3 text-2xl font-bold">✓</span>
                    <span className="text-gray-900 text-lg font-semibold">Experienced Team</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-3 text-2xl font-bold">✓</span>
                    <span className="text-gray-900 text-lg font-semibold">State-of-the-art Equipment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-3 text-2xl font-bold">✓</span>
                    <span className="text-gray-900 text-lg font-semibold">Customer Satisfaction Guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop"
                alt="Restoration Process"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Restoration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">Thorough inspection and detailed evaluation to create a comprehensive restoration plan</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Initial condition assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Damage documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Restoration scope definition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Timeline and cost estimation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Disassembly & Repair</h3>
              <p className="text-gray-600">Careful disassembly and systematic repair of all vehicle components</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Complete disassembly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Rust removal and metal repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Panel replacement if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Structural integrity restoration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Refinishing & Assembly</h3>
              <p className="text-gray-600">Professional painting, finishing, and careful reassembly of all components</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Surface preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Professional painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Component reassembly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Final detailing and protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Services Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/Bodywork.jpg"
                  alt="Body Work"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Body Work</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Rust repair and prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Panel replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Dent removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Gap alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Structural repairs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/paintwork.jpg"
                  alt="Paint Work"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paint Work</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Complete respray</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Color matching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Clear coat application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Paint protection film</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Custom color options</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/images/Finishing.jpg"
                  alt="Finishing"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finishing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Polishing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Waxing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Ceramic coating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Final detailing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Interior restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👨</div>
                <div>
                  <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
                  <p className="text-gray-600">Classic Car Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"They restored my 1972 Ambassador to its original glory. The attention to detail was incredible, and the results exceeded my expectations. Highly recommend their restoration services!"</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👩</div>
                <div>
                  <h3 className="text-xl font-semibold">Priya Sharma</h3>
                  <p className="text-gray-600">Vintage Car Collector</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"I've had several cars restored by Kavin Motors, and they never disappoint. Their expertise in classic car restoration is unmatched. They truly bring cars back to life!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Restore Your Vehicle?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quote. Our experts will assess your vehicle and create a customized restoration plan to bring it back to its former glory.
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