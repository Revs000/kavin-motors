import { PhoneIcon } from '@heroicons/react/24/outline';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-6">Book Your Service</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-6 w-6 text-emerald-600" />
              <div>
                <p className="text-gray-600">Call us to book your service:</p>
                <a href="tel:+911234567890" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  +91 1234567890
                </a>
              </div>
            </div>
            <p className="text-gray-600">Or fill out the form below:</p>
            <form className="space-y-4">
              {/* Form fields will go here */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 