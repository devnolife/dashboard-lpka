"use client";
import { useRef } from "react";
import Image from "next/image";
import React from "react";
import PengumumanSection from "./CompPengumuman/PengumumanSection";
import BeritaSection from "./CompBerita/BeritaSection";

export default function Features() {
  return (
    <section className="bg-blue-100 dark:bg-white-900 pb-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-12 px-6 mx-auto max-w-screen-xl text-center sm:py-20 lg:px-8">
          <div className="max-w-screen-md mx-auto mb-12 lg:mb-20">
            <h2 className="mb-6 text-5xl font-extrabold text-gray-900 dark:text-white">
              Dirancang untuk tim bisnis seperti Anda
            </h2>
            <p className="text-lg sm:text-2xl text-gray-500 dark:text-gray-400">
              Di Flowbite, kami berfokus pada pasar di mana teknologi, inovasi,
              dan modal dapat membuka nilai jangka panjang dan mendorong
              pertumbuhan ekonomi.
            </p>
          </div>
          <div className="space-y-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-16 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {/* Lingkaran Ikon */}
                <div className={'flex justify-center'}>
                  <div
                    className={`flex justify-center items-center mb-6 w-36 h-36 rounded-full ${feature.bgColor}`}
                  >
                    {/* Gambar Ikon */}
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-20 h-88 lg:w-10 lg:h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Judul dan Deskripsi */}
                <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Ketua LPKA
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Memperkenalkan ketua Lembaga Pengembangan Kompetensi Akademik (LPKA) yang berdedikasi tinggi.
            </p>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="image/profile.png"
                alt="Dr. Ir. NENNY, S.T., M.T."
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Name</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">Ketua LPKA</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Ketua Lembaga Pengembangan Kompetensi Akademik (LPKA) yang memimpin dengan visi kuat untuk mengembangkan strategi akademik, membangun kolaborasi yang inovatif, serta memastikan tercapainya tujuan institusional melalui pendekatan yang berorientasi pada hasil dan pengembangan sumber daya manusia.
              </p>
              {/* <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-4">
        <div className="container mx-auto text-gray-800">
          <PengumumanSection />
        </div>
      </section>

      <section className="bg-white py-8 px-4">
        <div className="container mx-auto text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Berita Terbaru</h2>
          <BeritaSection />
        </div>
      </section>
    </section>
  );
}

const features = [
  {
    title: "Salurkan Minat Bakatmu",
    description:
      "Temukan berbagai kegiatan yang dapat membantu mengasah dan mengembangkan minat serta bakatmu.",
    icon: "/image/icon/palet.png", // Replace with actual image path
    bgColor: "bg-blue-100 dark:bg-blue-900",
  },
  {
    title: "Gali Kreativitasmu",
    description:
      "Ikuti program dan workshop yang dirancang untuk mengeluarkan sisi kreatif terbaikmu.",
    icon: "/image/icon/lampu.png", // Replace with actual image path
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    title: "Yuk Bikin Usaha!",
    description:
      "Belajar cara memulai bisnis dan mengelola usaha untuk mewujudkan impianmu.",
    icon: "/image/icon/koper.png", // Replace with actual image path
    bgColor: "bg-green-100 dark:bg-green-900",
  },
  {
    title: "Rancang Karirmu Di Sini",
    description:
      "Dapatkan panduan dan dukungan untuk membangun jalur karir yang sesuai dengan potensimu.",
    icon: "/image/icon/target.png", // Replace with actual image path
    bgColor: "bg-purple-100 dark:bg-purple-900",
  },
  {
    title: "Bergabung di Organisasi Mahasiswa",
    description:
      "Perluas jaringan dan keterampilanmu dengan menjadi bagian dari organisasi mahasiswa.",
    icon: "/image/icon/tangan.png", // Replace with actual image path
    bgColor: "bg-teal-100 dark:bg-teal-900",
  },
  {
    title: "Daftar Beasiswa",
    description: "Cek peluang beasiswa untuk mendukung pendidikan dan karirmu.",
    icon: "/image/icon/sertifikat.png", // Replace with actual image path
    bgColor: "bg-red-100 dark:bg-red-900",
  },
  {
    title: "Curhat Yuk!",
    description:
      "Butuh teman bicara? Kami menyediakan ruang untuk berbagi cerita dan mendapatkan solusi.",
    icon: "/image/icon/chat.png", // Replace with actual image path
    bgColor: "bg-pink-100 dark:bg-pink-900",
  },
  {
    title: "Ajukan Reward Prestasi",
    description:
      "Dapatkan penghargaan atas pencapaian luar biasa yang telah kamu raih.",
    icon: "/image/icon/trophy.png", // Replace with actual image path
    bgColor: "bg-orange-100 dark:bg-orange-900",
  },
];