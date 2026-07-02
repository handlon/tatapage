import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import Tailwind CSS styles
import hero from "../assets/hero.jpg";
const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Background image with subtle darkening for better contrast */}
      <img
        src={hero}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center z-0 contrast-110 transition-all duration-700"
      />

      {/* Dark gradient overlay that keeps the photo visible */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.80)_32%,rgba(0,0,0,0.0)_100%)]" />

      {/* Left-aligned hero content */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="max-w-xl rounded-3xl bg-black/50 backdrop-blur-[2px] border border-white/10 p-6 shadow-2xl sm:bg-transparent sm:backdrop-blur-none sm:border-transparent sm:p-0 sm:shadow-none sm:p-0 sm:px-0 lg:p-0 lg:px-0 sm:rounded-none">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 animate-fade-in">
              Oficiální web
            </span>
            <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tight md:text-7xl lg:text-8xl">
              Pavel Handlík
            </h1>
            <p className="mb-10 max-w-2xl text-lg font-light tracking-wide text-neutral-300 md:text-2xl">
              Bluegrassový muzikant, kytarista a producent. Hudba, která má
              kořeny i srdce.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/about"
                className="w-full bg-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 shadow-2xl transition-all hover:bg-amber-600 sm:w-auto"
              >
                Více o mně
              </Link>
              <Link
                to="/music"
                className="w-full border-2 border-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-neutral-900 sm:w-auto"
              >
                Poslouchat tvorbu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
