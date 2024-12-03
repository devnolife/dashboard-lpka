import React, { useRef } from "react";
import Pengumuman from "./PengumumanCards";
import { pengumumanData } from "./../data/PengumumanData";

export default function PengumumanSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 100; // Scroll berdasarkan nilai tetap
            const newPosition =
                direction === "left"
                    ? scrollRef.current.scrollLeft - scrollAmount
                    : scrollRef.current.scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: newPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-white py-8 px-4">
            <div className="container mx-auto text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Pengumuman</h2>

                {/* Wrapper untuk tombol dan slider */}
                <div className="relative">
                    {/* Tombol scroll (desktop-only) */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
                            aria-label="Scroll Left"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
                            aria-label="Scroll Right"
                        >
                            ▶
                        </button>
                    </div>

                    {/* Slider */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-4 py-4 w-full scroll-smooth"
                    >
                        {pengumumanData.map((item, index) => (
                            <Pengumuman
                                key={index}
                                title={item.title}
                                author={item.author}
                                date={item.date}
                                description={item.description}
                                linkText={item.linkText}
                                image={item.image}
                                avatar={item.avatar}
                                className="flex-shrink-0 w-64"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
