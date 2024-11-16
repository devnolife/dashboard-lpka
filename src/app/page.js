export default function HeroSection() {
  return (
    <div className="px-8 py-16 bg-gradient-to-r from-yellow-100 via-teal-100 to-white">
      <div className="container flex flex-col items-center mx-auto lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-teal-800 lg:text-5xl">Take your time and learn from anywhere</h1>
          <p className="mt-4 text-gray-600">
            A learning system based on formalized teaching but with the help of electronic resources.
          </p>
          <button className="px-6 py-3 mt-6 text-white bg-teal-500 rounded-lg hover:bg-teal-600">
            Learn Now
          </button>
        </div>
        <div className="flex justify-center mt-8 lg:w-1/2 lg:mt-0">
          <img src="/images/hero.png" alt="Learning" className="h-auto rounded-lg shadow-lg w-96" />
        </div>
      </div>
    </div>
  );
}
