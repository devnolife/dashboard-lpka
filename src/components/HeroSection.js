export default function HeroSection() {
  return (
    <div>
      <div className="bg-cover bg-center py-16 px-8" style={{ backgroundImage: "url('/image/gedung_crop.png')" }}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-800">
              Take your time and learn from anywhere
            </h1>
            <p className="mt-4 text-gray-600">
              A learning system based on formalized teaching but with the help of electronic resources.
            </p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Learn Now
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img src="/image/ini222.png" alt="Learning" className="w-96 h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}