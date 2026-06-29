import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BandCard from "../components/BandCard";

const Bands: React.FC = () => {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Navbar />
      <div className="bg-neutral-950 text-white py-30 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-12">
            Moje Kapely & Projekty
          </h2>

          {/* Grid, který hodí karty vedle sebe na PC a pod sebe na mobilu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BandCard
              name="Kapela 1"
              imageSrc="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200"
              linkUrl="https://example.com/kapela1"
            />

            <BandCard
              name="Kapela 2"
              imageSrc="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200"
              linkUrl="https://example.com/kapela2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bands;
