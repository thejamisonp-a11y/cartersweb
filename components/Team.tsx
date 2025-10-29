
import React from 'react';
import { LinkedinIcon, TwitterIcon } from './icons/Icons';

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ image, name, role }) => (
    <div className="text-center">
        <div className="relative inline-block">
            <img src={image} alt={name} className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg" />
            <div className="absolute inset-0 rounded-full border-4 border-white"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mt-4">{name}</h3>
        <p className="text-brand-purple font-medium">{role}</p>
        <div className="flex justify-center space-x-3 mt-2">
            <a href="#" className="text-gray-400 hover:text-brand-blue"><TwitterIcon className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-blue"><LinkedinIcon className="w-5 h-5" /></a>
        </div>
    </div>
);


const Team: React.FC = () => {
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
      name: "Eleanor Carter",
      role: "Founder & CEO",
    },
    {
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
      name: "David Chen",
      role: "Head of Care Operations",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      name: "Maria Rodriguez",
      role: "Client Relations Manager",
    },
    {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
        name: "James Wilson",
        role: "Lead Care Coordinator",
    }
  ];

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-purple font-semibold">OUR EXPERTS</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Meet Our Compassionate Team</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our dedicated and experienced professionals are the heart of Carters Care Group, committed to providing exceptional support.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
