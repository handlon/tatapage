import React from 'react';

const AboutImage: React.FC = () => {
  return (
    <div className="w-full h-[500px] overflow-hidden shadow-2xl border border-neutral-800">
      <img 
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200" 
        alt="Profilová fotka" 
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default AboutImage;