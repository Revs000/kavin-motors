'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  
  // Sample gallery images - in a real app, these would come from a database
  const [galleryImages, setGalleryImages] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop',
      title: 'Classic Car Restoration',
      category: 'Restoration',
      uploadedBy: 'Admin',
      date: '2023-06-15'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
      title: 'Paint Work',
      category: 'Paint',
      uploadedBy: 'Admin',
      date: '2023-06-16'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop',
      title: 'Finished Project',
      category: 'Completed',
      uploadedBy: 'Admin',
      date: '2023-06-17'
    }
  ]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first');
      return;
    }

    setIsUploading(true);
    setUploadStatus('Uploading...');

    // In a real application, you would upload the file to a server here
    // For this demo, we'll simulate an upload with a timeout
    setTimeout(() => {
      // Add the new image to the gallery
      const newImage = {
        id: galleryImages.length + 1,
        url: previewUrl || '',
        title: selectedFile.name,
        category: 'User Upload',
        uploadedBy: 'User',
        date: new Date().toISOString().split('T')[0]
      };
      
      setGalleryImages([...galleryImages, newImage]);
      setUploadStatus('Upload successful!');
      setIsUploading(false);
      setSelectedFile(null);
      setPreviewUrl(null);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">Browse our collection of restored vehicles and share your own projects</p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Share Your Project</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image-upload">
                Upload an Image
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-red-600 file:text-white
                  hover:file:bg-red-700"
              />
            </div>
            
            {previewUrl && (
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            )}
            
            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className={`px-6 py-2 rounded-md font-semibold text-white ${
                !selectedFile || isUploading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isUploading ? 'Uploading...' : 'Upload Image'}
            </button>
            
            {uploadStatus && (
              <p className={`mt-4 text-sm ${
                uploadStatus.includes('successful') ? 'text-green-600' : 'text-gray-600'
              }`}>
                {uploadStatus}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{image.category}</span>
                    <span>By: {image.uploadedBy}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {image.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Restore Your Vehicle?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quote. Our experts will assess your vehicle and create a customized restoration plan.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/quote">
              <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Get a Free Quote
              </button>
            </Link>
            <Link href="/appointment">
              <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 