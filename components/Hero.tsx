
import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, PlayIcon } from './icons/Icons';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-brand-purple font-semibold mb-2">SENIOR CARE SERVICES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Compassionate care for your loved ones
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At Carters Care Group, we provide personalized and professional elder care services, ensuring your family members receive the respect, dignity, and high-quality support they deserve in the comfort of their own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="bg-brand-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors flex items-center justify-center"
              >
                Get a Quote
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex items-center justify-center gap-3"
              >
                <PlayIcon className="w-6 h-6 text-brand-purple" />
                Watch our video
              </a>
            </div>
          </div>
          <div className="relative h-96 lg:h-[450px]">
            <div className="absolute inset-0 bg-brand-blue transform -translate-x-4 translate-y-4 lg:-translate-x-8 lg:translate-y-8 rounded-lg opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1576765608866-5b438b97d14a?q=80&w=2070&auto=format&fit=crop"
              alt="Caregiver and senior woman smiling while using a tablet" 
              className="relative w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex items-center gap-4 p-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <PhoneIcon className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Call us</h3>
                <p className="text-gray-600">(215) 456 - 1189</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <MailIcon className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email us</h3>
                <p className="text-gray-600">contact@carterscaregroup.com.au</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <LocationMarkerIcon className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Visit us</h3>
                <p className="text-gray-600">123 Main Street, Anytown, AU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
