import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Grafický znak / Monogram */}
      <div className="relative w-11 h-11 border-2 border-amber-500 flex items-center justify-center bg-neutral-950 transition-all duration-300 group-hover:border-white">
        {/* Jemné designové linky na pozadí evokující struny */}
        <div className="absolute inset-y-0 left-1/3 w-[1px] bg-neutral-800/50" />
        <div className="absolute inset-y-0 left-2/3 w-[1px] bg-neutral-800/50" />
        
        {/* Iniciály */}
        <span className="font-serif font-black text-amber-500 group-hover:text-white text-xl tracking-tighter transition-colors duration-300 pt-0.5">
          PH
        </span>
      </div>
      
      {/* Textová část jména */}
      <div className="flex flex-col justify-center">
        <span className="text-xl font-black tracking-[0.15em] text-white uppercase leading-none transition-colors duration-300 group-hover:text-amber-500">
          PAVEL
        </span>
        <span className="text-[15px] font-light tracking-[0.22em] text-neutral-450 uppercase leading-none mt-1">
          HANDLÍK
        </span>
      </div>
    </div>
  );
};

export default Logo;