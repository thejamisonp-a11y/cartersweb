
import React from 'react';
import { ArrowRightIcon } from './icons/Icons';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="font-semibold text-brand-purple hover:text-brand-purple-light flex items-center gap-2">
        View service <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1612534262136-1e42823522f7?q=80&w=2070&auto=format&fit=crop",
      title: "Home care",
      description: "Personalized assistance with daily activities to help seniors live comfortably and independently at home.",
    },
    {
      image: "https://images.unsplash.com/photo-1532634898-154743552a0a?q=80&w=2070&auto=format&fit=crop",
      title: "Special needs care",
      description: "Specialized support for individuals with complex medical needs, including dementia and Alzheimer's care.",
    },
    {
        image: "https://images.unsplash.com/photo-1628348068343-f5ac54507d3a?q=80&w=2070&auto=format&fit=crop",
        title: "Respite Care",
        description: "Providing temporary relief for primary caregivers, ensuring your loved one is in safe, caring hands.",
    }
  ];

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-purple font-semibold">SENIOR CARE SERVICES</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">We provide high quality care services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
