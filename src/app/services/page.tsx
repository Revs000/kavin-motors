import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-20 bg-gray-900">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 text-center tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Explore Our Full Range</span>
            <span className="block mt-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">of Car Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 text-center max-w-3xl mx-auto px-4">
            Comprehensive automotive care tailored to your vehicle's needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Service Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Engine Diagnostics</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Advanced diagnostic services to identify and resolve engine issues using state-of-the-art equipment.
                </p>
                <Link href="/services/engine-diagnostics" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center text-sm sm:text-base">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Add more service cards here */}
          </div>
        </div>
      </section>
    </main>
  );
} 