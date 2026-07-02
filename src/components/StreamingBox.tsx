import React from 'react';

interface StreamingBoxProps {
  albumName: string;
  spotifyUrl: string;
  appleMusicUrl: string;
}

const StreamingBox: React.FC<StreamingBoxProps> = ({ albumName, spotifyUrl, appleMusicUrl }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-neutral-300">
          Aktuální Album / Singly
        </h3>
        
        <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 shadow-2xl flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-32 h-32 bg-neutral-800 flex-shrink-0 border border-neutral-700 flex items-center justify-center text-center p-2 shadow-md">
            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
              Cover Art
            </span>
          </div>
          
          <div className="text-center sm:text-left">
            <span className="text-amber-500 text-xs font-bold tracking-wider uppercase">
              Nejnovější počin
            </span>
            <h4 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
              {albumName}
            </h4>
            <p className="text-sm text-neutral-400 mt-2 font-light">
              Vychutnejte si studiové nahrávky s plným zvukem na vaší oblíbené platformě.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
        <a 
          href={spotifyUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-4 px-6 flex items-center justify-center gap-3 transition-colors uppercase tracking-wider text-sm"
        >
          Poslouchat na Spotify
        </a>

        <a 
          href={appleMusicUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-bold py-4 px-6 flex items-center justify-center gap-3 transition-all uppercase tracking-wider text-sm"
        >
          Apple Music
        </a>
      </div>
    </div>
  );
};

export default StreamingBox;