import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
        <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop"
            alt="Kavin Motors Garage"
            fill
            className="object-cover brightness-50"
          priority
            unoptimized
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col">
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
            Est. 2017 • Trusted by 1000+ Customers
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 text-center pt-20 tracking-tight">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Precision Repairs</span>
            <span className="block mt-2 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Flawless Finish</span>
          </h1>
          
          <div className="flex-1 flex flex-col justify-center items-center">
            <p className="text-3xl font-extrabold text-emerald-400 mb-6 text-center tracking-wider">
              Comprehensive Car Care Services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xl text-white mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Expert Painting
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Wheel Alignment
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Dent Repair
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Water Wash
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400 group">
                Routine Servicing
              </span>
            </div>
            <p className="text-xl text-emerald-400 text-center font-semibold mb-8">
              in Nambiyur, Erode
            </p>
          </div>

          <div className="flex gap-4 justify-center pb-8">
            <Link href="/appointment">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 group">
                <span className="flex items-center">
                  <span className="mr-2">📅</span>
                  Book an Appointment
                </span>
              </button>
            </Link>
            <Link href="/quote">
              <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:from-gray-800 hover:to-gray-950 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="flex items-center">
                  <span className="mr-2">💰</span>
                  Get a Free Quote
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experience excellence in every aspect of car care with our comprehensive range of services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-2">Custom Full-Body Paint Service</h3>
              <p className="text-gray-600 mb-4">Complete exterior transformation with premium paint</p>
              <Link href="/services/car-painting" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-2">General Repairs</h3>
              <p className="text-gray-600 mb-4">Engine, brakes, suspension, etc.</p>
              <Link href="/services/general-repairs" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-2">Dent & Scratch Repair</h3>
              <p className="text-gray-600 mb-4">Paintless dent removal and refinishing</p>
              <Link href="/services/dent-repair" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-2">Full Body Restoration</h3>
              <p className="text-gray-600 mb-4">Classic car restoration and detailing</p>
              <Link href="/services/body-restoration" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-2">Interior Cleaning</h3>
              <p className="text-gray-600 mb-4">Deep interior cleaning and sanitizing</p>
              <Link href="/services/interior-cleaning" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
            <Image
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team at Work"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                Serving car owners in Nambiyur, Erode for over 10 years with expert workmanship and honest service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Experienced Team
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  State-of-the-art Equipment
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Customer Satisfaction Guaranteed
                </li>
              </ul>
              <Link href="/about" className="mt-6 inline-block">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🚘🌟</div>
              <h3 className="text-xl font-semibold mb-2">Custom Full-Body Paint Service</h3>
              <p className="text-gray-600">Complete exterior transformation with premium paint</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🛠️🩹</div>
              <h3 className="text-xl font-semibold mb-2">Dent Repair</h3>
              <p className="text-gray-600">Paintless dent removal with perfect finish</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🛻🧤</div>
              <h3 className="text-xl font-semibold mb-2">Classic Car Restoration</h3>
              <p className="text-gray-600">Complete restoration of vintage vehicles</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🧽🧼</div>
              <h3 className="text-xl font-semibold mb-2">Interior Detailing</h3>
              <p className="text-gray-600">Deep cleaning and sanitization of car interiors</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🧰🪞</div>
              <h3 className="text-xl font-semibold mb-2">Scratch Removal</h3>
              <p className="text-gray-600">Professional scratch repair and paint matching</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🧴✨</div>
              <h3 className="text-xl font-semibold mb-2">Full Body Polish</h3>
              <p className="text-gray-600">Professional polishing for showroom shine</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
                View Full Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"They brought my car back to life – highly recommend!"</p>
              <p className="font-semibold">- Raj K.</p>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
                <input type="text" placeholder="Vehicle Model" className="w-full p-3 border rounded-md" />
                <select className="w-full p-3 border rounded-md">
                  <option>Select Service</option>
                  <option>Car Painting</option>
                  <option>General Repairs</option>
                  <option>Dent & Scratch Repair</option>
                  <option>Full Body Restoration</option>
                  <option>Interior Cleaning</option>
                </select>
                <input type="date" className="w-full p-3 border rounded-md" />
                <button className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
                  Book Now
                </button>
              </form>
            </div>
            <div>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Nambiyur, Erode
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  [0000000000]
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  [Your Email]
                </p>
                {/* Add Google Maps embed here */}
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
                <li><Link href="/learn-more" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="/quote" className="text-gray-400 hover:text-white">Get a Quote</Link></li>
                <li><Link href="/appointment" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
                <li className="text-emerald-400 font-medium">Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
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
