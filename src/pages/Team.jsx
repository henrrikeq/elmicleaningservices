import React from 'react';
import { User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: null
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Manager",
      image: null
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Cleaner",
      image: null
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Customer Relations",
      image: null
    }
  ];

  return (
    <div className="min-h-screen via-stone-800 to-stone-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-black text-center mb-16 tracking-wider">
          MEET THE TEAM
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Image Placeholder */}
              <div className="w-48 h-48 mb-6 bg-stone-700/50 border-2 border-white/30 rounded-full overflow-hidden flex items-center justify-center group-hover:border-white/60 transition-all duration-300">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-20 h-20 text-black" />
                )}
              </div>
              
              {/* Name */}
              <h2 className="text-2xl font-light text-black tracking-wide mb-2">
                {member.name}
              </h2>
              
              {/* Role */}
              <p className="text-lg text-black tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="mt-20 border-t border-white/30"></div>
      </div>
    </div>
  );
};

export default Team;