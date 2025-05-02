import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DentRepairPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625046584009-ec4f5d9c8c6e?q=80&w=2070&auto=format&fit=crop"
            alt="Dent & Scratch Repair Service"
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Dent & Scratch Repair</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Professional paintless dent removal and refinishing services</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Paintless Dent Removal</h2>
              <p className="text-gray-600 mb-6">
                At Kavin Motors, we specialize in paintless dent removal (PDR), a technique that allows us to remove dents 
                without affecting the original paint finish. This method is cost-effective, environmentally friendly, and 
                preserves your vehicle's original paint.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our PDR Services Include:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Hail damage repair</li>
                  <li>Door dings and creases</li>
                  <li>Minor collision damage</li>
                  <li>Bumper repair</li>
                  <li>Body panel straightening</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?q=80&w=2071&auto=format&fit=crop"
                alt="Paintless Dent Removal Process"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scratch Repair Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop"
                alt="Scratch Repair Process"
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Repair Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Thorough inspection to determine the best repair method for your specific damage</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600">Expert application of PDR techniques or refinishing methods as needed</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">Detailed inspection to ensure the repair meets our high standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Before & After Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop"
                alt="Dent Repair Result 1"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                <p>Door Ding Removal</p>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop"
                alt="Dent Repair Result 2"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                <p>Hail Damage Repair</p>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop"
                alt="Dent Repair Result 3"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                <p>Scratch Removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Fix Your Vehicle?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free quote and consultation. Our experts will assess your vehicle's damage and recommend the best repair solution.
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