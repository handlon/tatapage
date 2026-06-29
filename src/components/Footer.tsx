import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
<footer className="bg-neutral-900 text-neutral-400 py-12 px-6 border-t border-neutral-800">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* LEVÁ STRANA: Copyright / Jméno */}
    <div className="text-center md:text-left">
      <h3 className="text-white font-bold tracking-widest uppercase mb-1">Pavel Handlík</h3>
      <p className="text-sm">© {new Date().getFullYear()} Všechna práva vyhrazena.</p>
    </div>

    {/* STŘED: Rychlé odkazy */}
    <div className="flex gap-6 text-sm uppercase tracking-wider">
      <Link to="/" className="hover:text-amber-500 transition-colors">Úvod</Link>
      <Link to="/about" className="hover:text-amber-500 transition-colors">O mně</Link>
      <Link to="/bands" className="hover:text-amber-500 transition-colors">Kapely</Link>
      <Link to="/music" className="hover:text-amber-500 transition-colors">Hudba</Link>
      <Link to="/contact" className="hover:text-amber-500 transition-colors">Kontakt</Link>
    </div>


  </div>
</footer>
    );
};

export default Footer;