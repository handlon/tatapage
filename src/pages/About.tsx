import React from "react";
import Navbar from "../components/Navbar";
import AboutText from "../components/AboutText";
import AboutImage from "../components/AboutImage";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-950 min-h-screen text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-10">
          <AboutImage />
          <AboutText />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
