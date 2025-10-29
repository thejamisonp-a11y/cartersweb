
import React from 'react';
import { QuoteIcon, StarIcon } from './icons/Icons';

interface TestimonialCardProps {
  quote: string;
  image: string;
  name: string;
  relation: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, image, name, relation }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <QuoteIcon className="w-10 h-10 text-brand-purple opacity-20 mx-auto mb-4" />
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
        <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            ))}
        </div>
        <img src={image} alt={name} className="w-16 h-16 mx-auto rounded-full object-cover mb-2" />
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{relation}</p>
    </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The care my mother received was exceptional. The team was so compassionate and professional. We couldn't have asked for better support during a difficult time.",
      image: "https://images.unsplash.com/photo-1557555187-23d685287d39?q=80&w=1935&auto=format&fit=crop",
      name: "Sarah L.",
      relation: "Daughter of Client"
    },
    {
      quote: "Carters Care Group provided wonderful companionship for my father. His caregiver was a perfect match, and it gave our family great peace of mind. Highly recommended!",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop",
      name: "Michael B.",
      relation: "Son of Client"
    },
    {
      quote: "From the initial consultation to the daily care, every step was handled with professionalism and genuine kindness. Thank you for making my husband's final years comfortable.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286de2?q=80&w=1888&auto=format&fit=crop",
      name: "Janet P.",
      relation: "Wife of Client"
    }
  ];

  return (
    <section className="py-20 bg-white" style={{
        backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
        backgroundSize: '20px 20px'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-purple font-semibold">TESTIMONIALS</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">What Our Families Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Real stories from the families we've had the privilege to serve.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
