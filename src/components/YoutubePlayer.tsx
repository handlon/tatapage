import React from 'react';

interface YoutubePlayerProps {
  videoId: string;
  title?: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId, title = "Video" }) => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-neutral-300">
        Živá vystoupení & Videoklipy
      </h3>
      <div className="relative w-full aspect-video border border-neutral-800 shadow-2xl bg-neutral-900">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubePlayer;