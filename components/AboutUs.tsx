import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-purple font-semibold mb-2">ABOUT US</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Why we love what we do</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Carters Care Group was founded on the simple principle that everyone deserves to age with dignity and grace. We are a team of passionate professionals dedicated to providing the highest standard of in-home care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to enrich the lives of our clients by offering compassionate, personalized support that promotes independence and well-being. We treat every client like family, because to us, they are.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1548438312-3b61404ba713?q=80&w=2070&auto=format&fit=crop" alt="Happy senior couple" className="rounded-lg shadow-lg aspect-square object-cover" />
            <img src="https://images.unsplash.com/photo-1579208031122-a7a518063773?q=80&w=1974&auto=format&fit=crop" alt="Caregiver with senior" className="rounded-lg shadow-lg aspect-square object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1610469149021-99a712a20341?q=80&w=2070&auto=format&fit=crop" alt="Senior exercising" className="rounded-lg shadow-lg aspect-square object-cover -mt-8" />
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" alt="Senior woman smiling" className="rounded-lg shadow-lg aspect-square object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
