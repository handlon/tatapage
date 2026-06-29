import React from 'react';

const AboutText: React.FC = () => {
  return (
    <div className="space-y-6">
      <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase block">
        Příběh a pozadí
      </span>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
        O mně
      </h2>
      <div className="h-1 w-20 bg-amber-500" />
      
      <p className="text-neutral-300 leading-relaxed text-lg font-light">
        Zde bude hlavní text o tátovi, jeho hudební cestě, projektech a zkušenostech. Můžeš sem napsat, jak dlouho hraje, co ho inspiruje a jaké žánry ho formovaly.
      </p>
      
      <p className="text-neutral-400 leading-relaxed">
        Další odstavec pro doplňující informace – například o studiové práci, produkci, nástrojích, na které hraje, nebo kapelách, kterými prošel.
      </p>
    </div>
  );
};

export default AboutText;