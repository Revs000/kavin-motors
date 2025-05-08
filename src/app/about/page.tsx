import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="Our Team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl font-black text-white mb-4 text-center tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Our Story</span>
            <span className="block mt-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">of Excellence</span>
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-500">
              <p className="text-base text-gray-700 mb-4 leading-relaxed font-medium">
                From routine maintenance to advanced detailing and repair work, we offer a complete range of automotive services tailored to keep your vehicle in top shape. Whether it's expert car painting, dent removal, wheel alignment, interior cleaning, or full-body polishing, our skilled technicians use modern tools and techniques to ensure precision and quality in every job.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed font-medium">
                We specialize in precision wheel alignment, thorough water washing, and accurate repair diagnostics. Additionally, our team offers expert car consultation services, helping customers make informed decisions about their vehicle's care and performance.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed font-medium">
                Fast forward to today — it's been nearly 8 years since we began our journey, and Kavin Motors has grown into a trusted name in automotive care in Nambiyur, Erode, Tirupur and Coimbatore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Growth Through the Years</h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Journey</h3>
                <p className="text-base text-gray-700 mb-4">
                  Fast forward to today — it's been nearly 8 years since we began our journey, and Kavin Motors has grown into a trusted name in automotive care in Nambiyur, Erode, Tirupur and Coimbatore.
                </p>
                <p className="text-base text-gray-700">
                  We're proud of the progress we've made and the relationships we've built along the way.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">New Chapter</h3>
                <p className="text-base text-gray-700 mb-4">
                  We're now entering an exciting new chapter by expanding our garage with a dedicated car paint service unit.
                </p>
                <p className="text-base text-gray-700">
                  This expansion allows us to offer high-quality painting solutions for all types of vehicles with professional-grade equipment and trained specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Foundation</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-emerald-500">
              <p className="text-base text-gray-700 mb-4">
                Kavin Motors was founded in 2017 with a clear mission: to provide exceptional automotive services rooted in trust, transparency, and technical excellence.
              </p>
              <p className="text-base text-gray-700">
                Our founder, Mr. Kavin, brought with him over a decade of hands-on industry experience and a deep understanding of what car owners truly need — honest, skilled service they can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Milestones</h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-base text-gray-600">Served 1,000+ happy customers and counting</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Reputation</h3>
                  <p className="text-base text-gray-600">Built a strong reputation in Erode, Coimbatore District</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Service Expansion</h3>
                  <p className="text-base text-gray-600">Expanded services to include advanced paint work, diagnostics, and wheel alignment</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-base text-gray-600">Formed a dependable team that shares our values of quality and customer focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-600 p-6 rounded-lg shadow-lg text-center">
              <p className="text-xl text-white italic mb-4">
                "At Kavin Motors, we don't just repair cars — we build trust, deliver value, and treat every vehicle as if it were our own."
              </p>
              <p className="text-base text-emerald-100">
                Our journey is proof that with passion, the right support, and relentless effort, even the most uncertain beginnings can lead to incredible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Kavin Motors</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="text-black mr-4 text-4xl font-bold">•</span>
                  <span className="text-black text-2xl font-bold">Experienced Team</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-4 text-4xl font-bold">•</span>
                  <span className="text-black text-2xl font-bold">State-of-the-art Equipment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-4 text-4xl font-bold">•</span>
                  <span className="text-black text-2xl font-bold">Customer Satisfaction Guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book an appointment today and let our experts take care of your vehicle
          </p>
          <div className="flex flex-col gap-4">
            <Link href="/quote">
              <button className="w-full bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Get a Free Quote
              </button>
            </Link>
            <Link href="/appointment">
              <button className="w-full bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 