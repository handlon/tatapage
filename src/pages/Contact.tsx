import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />

        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          {/* NADPIS */}
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase block mb-3">
            Domluvte si vystoupení nebo spolupráci
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Kontakt
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-12" />

          <p className="text-neutral-400 text-lg font-light max-w-xl mx-auto mb-16">
            Máte zájem o koncert, studiovou produkci nebo máte jakýkoliv jiný
            dotaz? Ozvěte se přímo na telefon nebo napište e-mail.
          </p>

          {/* KONTAKTNÍ ÚDAJE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* EMAIL BOX */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 shadow-xl hover:border-amber-500 transition-colors duration-300">
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block mb-2">
                Napište e-mail
              </span>
              <a
                href="mailto:musicbg@centrum.cz"
                className="text-xl md:text-2xl font-bold text-white hover:text-amber-400 transition-colors break-all"
              >
                musicbg@centrum.cz
              </a>
            </div>

            {/* TELEFON BOX */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 shadow-xl hover:border-amber-500 transition-colors duration-300">
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block mb-2">
                Zavolejte
              </span>
              <a
                href="tel:+420731112171"
                className="text-xl md:text-2xl font-bold text-white hover:text-amber-400 transition-colors"
              >
                +420 731 112 171
              </a>
            </div>
          </div>

          {/* DOPLŇUJÍCÍ INFO */}
          <div className="mt-16 text-sm text-neutral-500 font-light tracking-wide">
            Působnost po celé České republice i v zahraničí.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
