import React from 'react';

interface BandCardProps {
  name: string;
  imageSrc: string;
  linkUrl: string;
}

const BandCard: React.FC<BandCardProps> = ({ name, imageSrc, linkUrl }) => {
  const CardContent = () => (
    <div className="group relative w-full h-[450px] overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 cursor-pointer">
      
      {/* OBRÁZEK KAPELY */}
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
      />

      {/* TEXTOVÝ PŘEKRYV - Pouze název uprostřed/ve spodní části */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex items-end p-8">
        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors duration-300">
          {name}
        </h3>
      </div>

    </div>
  );

  if (linkUrl) {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default BandCard;