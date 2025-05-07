"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/919345801993?text=Hi,%20I%20have%20a%20query%20about%20car%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
            alt="Car Service Garage"
            fill
            className="object-cover brightness-50"
            priority
            unoptimized
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col">
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-800 hidden sm:flex items-center gap-1 sm:gap-2">
            <span>Est. 2017</span>
            <span className="hidden sm:inline">•</span>
            <span>Trusted by 1000+ Customers</span>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 sm:mb-8 text-center tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Precision Repairs</span>
              <span className="block mt-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Flawless Finish</span>
            </h1>
            
            <p className="text-xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6 text-center tracking-wider">
              Comprehensive Car Care Services
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-xl text-white mb-4 sm:mb-6">
              <span className="px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Expert Painting
              </span>
              <span className="px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Wheel Alignment
              </span>
              <span className="px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Dent Repair
              </span>
              <span className="px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Water Wash
              </span>
              <span className="px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Routine Servicing
              </span>
            </div>
            <p className="text-lg sm:text-xl text-emerald-400 text-center font-semibold mb-6 sm:mb-8">
              in Nambiyur, Erode
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pb-6 sm:pb-8">
            <Link href="/appointment" className="w-full sm:w-auto">
              <button className="w-full bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 group">
                <span className="flex items-center justify-center">
                  <span className="mr-2">📅</span>
                  Book an Appointment
                </span>
              </button>
            </Link>
            <Link href="/quote" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:from-gray-800 hover:to-gray-950 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="flex items-center justify-center">
                  <span className="mr-2">💰</span>
                  Get a Free Quote
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🚘</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Custom Full-Body Paint Service</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Complete exterior transformation with premium paint</p>
              <Link href="/services/car-painting" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🚗</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">General Repairs</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Engine, brakes, suspension, etc.</p>
              <Link href="/services/general-repairs" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🔧</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🛠️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Dent & Scratch Repair</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Paintless dent removal and refinishing</p>
              <Link href="/services/dent-repair" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🛠️</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🛻</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Full Body Restoration</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Classic car restoration and detailing</p>
              <Link href="/services/body-restoration" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🚘</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🧽</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Interior Cleaning</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Deep interior cleaning and sanitizing</p>
              <Link href="/services/interior-cleaning" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🧽</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team at Work"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">About Us</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Serving car owners in Nambiyur, Erode for over 10 years with expert workmanship and honest service.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="mr-2">✓</span>
                  Experienced Team
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="mr-2">✓</span>
                  State-of-the-art Equipment
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="mr-2">✓</span>
                  Customer Satisfaction Guaranteed
                </li>
              </ul>
              <Link href="/about" className="mt-4 sm:mt-6 inline-block">
                <button className="bg-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🚘🌟</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Expertise</h3>
              <p className="text-sm sm:text-base text-gray-700">Our team of experts has been in the industry for over 10 years.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔧🛠️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Quality</h3>
              <p className="text-sm sm:text-base text-gray-700">We use high-quality materials and state-of-the-art equipment.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🧽🧴</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Customer Service</h3>
              <p className="text-sm sm:text-base text-gray-700">We prioritize customer satisfaction and provide exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">"They brought my car back to life – highly recommend!"</p>
              <p className="font-semibold text-gray-800">- Raj K.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">"Professional service and excellent results. Will definitely come back!"</p>
              <p className="font-semibold text-gray-800">- Priya M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">"Best car service in town. Very satisfied with their work."</p>
              <p className="font-semibold text-gray-800">- Kumar S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3">📞</span>
                  <a href="tel:+919345801993" className="text-gray-700 hover:text-emerald-600 transition-colors">
                    +91 93458 01993
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span className="text-gray-700">info@kavinmotors.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span className="text-gray-700">Nambiyur, Erode</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Operating Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kavin Motors</h3>
              <p className="text-gray-400">Precision Repairs. Flawless Finish.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="/quote" className="text-gray-400 hover:text-white">Get a Quote</Link></li>
                <li><Link href="/appointment" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Kavin Motors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
