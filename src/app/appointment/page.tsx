import React from 'react';

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Your Appointment</h1>
          <p className="text-gray-600 mb-8">Fill out the form below to schedule your service appointment.</p>

          <form className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Vehicle Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Make</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="e.g., Honda, Toyota"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="e.g., City, Innova"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="e.g., 2020"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter registration number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Service Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500" required>
                  <option value="">Select a service</option>
                  <option value="car-painting">Car Painting</option>
                  <option value="general-repairs">General Repairs</option>
                  <option value="dent-repair">Dent & Scratch Repair</option>
                  <option value="body-restoration">Full Body Restoration</option>
                  <option value="interior-cleaning">Interior Cleaning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  rows={4}
                  placeholder="Please describe any specific issues or requirements..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 