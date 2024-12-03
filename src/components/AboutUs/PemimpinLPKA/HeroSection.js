import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/image/gedung_crop.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Prosedur Pelayanan LPKA</h1>
          <p className="text-lg md:text-2xl">Kami berkomitmen untuk mencapai tujuan kami dengan dedikasi dan integritas.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;