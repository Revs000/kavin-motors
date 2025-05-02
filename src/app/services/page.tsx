import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop"
            alt="Car Service Garage"
            fill
            className="object-cover brightness-50"
            priority
            unoptimized
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-center tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Explore Our Full Range</span>
            <span className="block mt-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">of Car Services</span>
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Comprehensive automotive care tailored to your vehicle's needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-emerald-500">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium italic">
                From routine maintenance to advanced detailing and repair work, we offer a complete range of automotive services tailored to keep your vehicle in top shape. Whether it's expert car painting, dent removal, wheel alignment, interior cleaning, or full-body polishing, our skilled technicians use modern tools and techniques to ensure precision and quality in every job.
              </p>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed font-medium italic">
                We specialize in precision wheel alignment, thorough water washing, and accurate repair diagnostics. Additionally, our team offers expert car consultation services, helping customers make informed decisions about their vehicle's care and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Our Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Painting */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🚘🌟</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Custom Full-Body Paint Service</h3>
              <p className="text-gray-600 mb-4">Complete exterior transformation with premium paint</p>
              <Link href="/services/car-painting" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* General Repairs */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">General Repairs</h3>
              <p className="text-gray-600 mb-4">Engine, brakes, suspension, and more</p>
              <Link href="/services/general-repairs" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Dent & Scratch Repair */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🛠️🩹</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Dent & Scratch Repair</h3>
              <p className="text-gray-600 mb-4">Paintless dent removal and refinishing</p>
              <Link href="/services/dent-repair" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Full Body Restoration */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🛻🧤</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Full Body Restoration</h3>
              <p className="text-gray-600 mb-4">Classic car restoration and detailing</p>
              <Link href="/services/body-restoration" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Interior Cleaning */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🧼</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Interior Cleaning</h3>
              <p className="text-gray-600 mb-4">Deep interior cleaning and sanitizing</p>
              <Link href="/services/interior-cleaning" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Wheel Alignment */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Wheel Alignment</h3>
              <p className="text-gray-600 mb-4">Precision alignment for optimal handling</p>
              <Link href="/services/wheel-alignment" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Water Wash */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Water Wash</h3>
              <p className="text-gray-600 mb-4">Thorough cleaning with premium products</p>
              <Link href="/services/water-wash" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Car Consultation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Car Consultation</h3>
              <p className="text-gray-600 mb-4">Expert advice for your vehicle's care</p>
              <Link href="/services/consultation" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Full Body Polish */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🧴✨</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Full Body Polish</h3>
              <p className="text-gray-600 mb-4">Professional polishing for showroom shine</p>
              <Link href="/services/body-polish" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Why Choose Our Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Expert Technicians</h3>
              <p className="text-gray-600">Our team has years of experience and specialized training</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Modern Equipment</h3>
              <p className="text-gray-600">We use state-of-the-art tools and diagnostic systems</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600">We stand behind our work with satisfaction guarantees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ready to Experience Our Services?</h2>
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