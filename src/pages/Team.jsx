import React from 'react';
import { User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Abusuapa",
      role: "Co-Founder & Operations Manager",
      image: null
    },
    {
      id: 2,
      name: "Elizabeth Adu Serwaa",
      role: "Co-Founder & Administration Manager",
      image: null
    },
    
  ];

  return (
    <div className="min-h-screen via-stone-800 to-stone-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">MANAGEMENT TEAM</h2>
      <p className="border w-12 mb-9 border-[#044eaf]"></p>
        
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