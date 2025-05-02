"use client";

import BookingForm from "../components/BookingForm";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Your Service</h1>
          <BookingForm />
        </div>
      </div>
    </main>
  );
} 