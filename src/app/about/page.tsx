import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Kavin Motors Team"
            fill
            className="object-cover brightness-50"
            priority
            unoptimized
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About Kavin Motors
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Our journey of excellence in automotive care since 2017
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Story</h2>
            
            {/* Story Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Beginning */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">The Beginning</h3>
                    <p className="text-gray-700">
                      During my college years as an engineering student, I struggled to find purpose in academics. I felt lost — unsure of my path, uncertain about the future.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* Discovery */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">The Discovery</h3>
                    <p className="text-gray-700">
                      Eventually, I couldn't complete my engineering degree. The answer came unexpectedly — in the form of a job at a local car workshop. There, I discovered a new side of myself.
                    </p>
                  </div>
                </div>
                
                {/* The Idea */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">The Idea</h3>
                    <p className="text-gray-700">
                      That's when the idea struck me: "Why not start a garage of my own?" My father supported me completely, suggesting we build on our own land.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* The Beginning of Kavin Motors */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">Kavin Motors is Born</h3>
                    <p className="text-gray-700">
                      Despite mixed reactions from people around us, we started small with just a handful of tools, limited resources, and a team of five. Every step forward was hard-earned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Growth Through the Years</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Journey</h3>
                <p className="text-gray-700 mb-6">
                  Fast forward to today — it's been nearly 8 years since we began our journey, and Kavin Motors has grown into a trusted name in automotive care in Nambiyur, Erode.
                </p>
                <p className="text-gray-700">
                  We're proud of the progress we've made and the relationships we've built along the way.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">New Chapter</h3>
                <p className="text-gray-700 mb-6">
                  We're now entering an exciting new chapter by expanding our garage with a dedicated car paint service unit.
                </p>
                <p className="text-gray-700">
                  This expansion allows us to offer high-quality painting solutions for all types of vehicles with professional-grade equipment and trained specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Foundation</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-emerald-500">
              <p className="text-lg text-gray-700 mb-6">
                Kavin Motors was founded in 2017 with a clear mission: to provide exceptional automotive services rooted in trust, transparency, and technical excellence.
              </p>
              <p className="text-lg text-gray-700">
                Our founder, Mr. Kavin, brought with him over a decade of hands-on industry experience and a deep understanding of what car owners truly need — honest, skilled service they can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Milestones</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Served 1,000+ happy customers and counting</p>
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
                  <p className="text-gray-600">Built a strong reputation in Erode, Coimbatore District</p>
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
                  <p className="text-gray-600">Expanded services to include advanced paint work, diagnostics, and wheel alignment</p>
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
                  <p className="text-gray-600">Formed a dependable team that shares our values of quality and customer focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-600 p-10 rounded-lg shadow-lg text-center">
              <p className="text-xl text-white italic mb-6">
                "At Kavin Motors, we don't just repair cars — we build trust, deliver value, and treat every vehicle as if it were our own."
              </p>
              <p className="text-lg text-emerald-100">
                Our journey is proof that with passion, the right support, and relentless effort, even the most uncertain beginnings can lead to incredible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="max-w-4xl mx-auto text-center">
            {/* Founder Profile */}
            <div className="inline-block flex flex-col items-center gap-4">
              <div className="bg-gray-50 p-[1px] rounded-sm shadow-sm w-[16px] h-[20px] overflow-hidden border border-gray-100">
                <Image
                  src="/images/kavin-profile.jpg"
                  alt="Kavin - Founder"
                  width={16}
                  height={20}
                  className="w-full h-full object-cover"
                  priority
                  quality={100}
                />
              </div>
              <div className="text-center">
                <p className="text-[24px] font-bold text-emerald-600 leading-tight tracking-normal">Kavin Prasanth</p>
                <p className="text-[10px] text-gray-600 leading-none font-medium mt-2">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Kavin Motors</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <ul className="space-y-8">
                <li className="flex items-center">
                  <span className="text-black mr-4 text-4xl font-bold">✓</span>
                  <span className="text-black text-2xl font-bold">Experienced Team</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-4 text-4xl font-bold">✓</span>
                  <span className="text-black text-2xl font-bold">State-of-the-art Equipment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-4 text-4xl font-bold">✓</span>
                  <span className="text-black text-2xl font-bold">Customer Satisfaction Guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book an appointment today and let our experts take care of your vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book an Appointment
              </button>
            </Link>
            <Link href="/quote">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 