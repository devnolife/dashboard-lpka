const Feature = () => {
  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">Struktur Organisasi Universitas Muhammadiyah Makassar</h2>
      <div className="space-y-16">
        {/* Prosedur 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/image/StrukturOrganisasi/download.png"
            alt="Prosedur 1"
            className="w-full max-w-4xl max-h-[800px] object-contain rounded-lg shadow-md"
          />
          <p className="mt-4 text-center text-gray-700 text-lg font-medium">
            Struktur Organisasi : Contoh Gambar Struktur (Hanya contohnya bukan stuktur yang asli)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
