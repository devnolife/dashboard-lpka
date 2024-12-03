"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  const slides = [
    { src: "/image/gedung_crop.png", alt: "Deskripsi gambar 1" },
    { src: "/image/prestasi1.jpg", alt: "Deskripsi gambar 2" },
    { src: "/image/banner2.jpg", alt: "Deskripsi gambar 3" },
    { src: "/image/prestasi2.jpeg", alt: "Deskripsi gambar 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="indicators-carousel" className="relative w-full h-screen"> {/* Ubah padding top */}
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9 5 5 1 1"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
