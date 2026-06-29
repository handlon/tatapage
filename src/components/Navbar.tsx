import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../index.css"; // Import Tailwind CSS styles

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO / JMÉNO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-widest hover:text-amber-500 transition-colors"
        >
          <Logo />
        </Link>

        {/* BURGER BUTTON */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-neutral-700 p-2 text-neutral-200 hover:border-amber-500 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative h-6 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition duration-300 ease-in-out transform ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45 origin-center" : "top-1.5"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition duration-300 ease-in-out transform ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45 origin-center" : "bottom-1.5"}`}
            />
          </div>
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden gap-8 font-medium tracking-wide md:flex">
          <Link to="/" className="hover:text-amber-500 transition-colors">
            Úvod
          </Link>
          <Link to="/about" className="hover:text-amber-500 transition-colors">
            O mně
          </Link>
          <Link to="/bands" className="hover:text-amber-500 transition-colors">
            Kapely
          </Link>
          <Link to="/music" className="hover:text-amber-500 transition-colors">
            Hudba
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-500 transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"}`}
      >
        <div className="space-y-2 border-t border-neutral-800 bg-neutral-950 px-6 py-4">
          <Link
            to="/"
            className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-neutral-900 hover:text-amber-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Úvod
          </Link>
          <Link
            to="/about"
            className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-neutral-900 hover:text-amber-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            O mně
          </Link>
          <Link
            to="/bands"
            className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-neutral-900 hover:text-amber-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Kapely
          </Link>
          <Link
            to="/music"
            className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-neutral-900 hover:text-amber-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Hudba
          </Link>
          <Link
            to="/contact"
            className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-neutral-900 hover:text-amber-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
