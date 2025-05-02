"use client";

import { useState } from "react";

export default function BookingForm() {
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    vehicleModel: "",
    service: "",
    date: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingDetails(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          className="w-full p-3 border-2 border-gray-300 rounded-md text-black text-lg placeholder-gray-500 bg-white"
          value={bookingData.name}
          onChange={handleInputChange}
          required
        />
        <input 
          type="text" 
          name="vehicleModel"
          placeholder="Vehicle Model" 
          className="w-full p-3 border-2 border-gray-300 rounded-md text-black text-lg placeholder-gray-500 bg-white"
          value={bookingData.vehicleModel}
          onChange={handleInputChange}
          required
        />
        <select 
          name="service"
          className="w-full p-3 border-2 border-gray-300 rounded-md text-black text-lg bg-white"
          value={bookingData.service}
          onChange={handleInputChange}
          required
        >
          <option value="" className="text-gray-500">Select Service</option>
          <option value="Car Painting" className="text-black">Car Painting</option>
          <option value="General Repairs" className="text-black">General Repairs</option>
          <option value="Dent & Scratch Repair" className="text-black">Dent & Scratch Repair</option>
          <option value="Full Body Restoration" className="text-black">Full Body Restoration</option>
          <option value="Interior Cleaning" className="text-black">Interior Cleaning</option>
        </select>
        <input 
          type="date" 
          name="date"
          className="w-full p-3 border-2 border-gray-300 rounded-md text-black text-lg bg-white"
          value={bookingData.date}
          onChange={handleInputChange}
          required
        />
        <button 
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition"
        >
          Book Now
        </button>
      </form>

      {showBookingDetails && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-emerald-600">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmation</h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {bookingData.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Vehicle Model:</span> {bookingData.vehicleModel}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Service:</span> {bookingData.service}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> {new Date(bookingData.date).toLocaleDateString()}
            </p>
            <p className="text-emerald-600 font-semibold mt-4">
              We will contact you shortly to confirm your appointment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 