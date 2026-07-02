import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YoutubePlayer from "../components/YoutubePlayer";
import StreamingBox from "../components/StreamingBox";

const Music: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className=" py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
          {/* NADPIS SEKCE */}
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase block mb-3">
              Tvorba a nahrávky
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Hudba
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          </div>

          {/* GRID S VAŠIMI NOVÝMI KOMPONENTY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <YoutubePlayer
              videoId="JlFN12QsiMg"
              title="Pavel Handlík - Live Concert"
            />

            <StreamingBox
              albumName="Název Alba"
              spotifyUrl="https://open.spotify.com"
              appleMusicUrl="https://music.apple.com"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Music;
