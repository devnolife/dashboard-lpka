"use client";
import { useState, useEffect } from "react";
import Link from 'next/link'; // Import Link from next/link

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ID");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="image/logo-unismuh.png" className="h-8" alt="Flowbite Logo" />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            UNISMUH
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isScrolled ? "text-gray-900" : "text-white"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link href="/" className={`block py-2 px-3 md:p-0 ${isScrolled ? "text-gray-900" : "text-white"} hover:text-gray-500`} aria-current="page">
                Home
              </Link>
            </li>
            
            {/* About Us with Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleDropdown("about")}
                className={`flex items-center py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                About Us
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {openDropdown === "about" && (
                <div className="absolute z-10 font-normal bg-white rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="/AboutUs/ProsedurPelayananLPKA"><span className="block px-4 py-2 hover:bg-gray-100">Prosedur Pelayanan LPKA</span></Link></li>
                    <li><Link href="/AboutUs/StrukturOrganisasi"><span className="block px-4 py-2 hover:bg-gray-100">Struktur Organisasi</span></Link></li>
                    <li><Link href="/AboutUs/PemimpinLPKA"><span className="block px-4 py-2 hover:bg-gray-100">Pemimpin LPKA</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Staff LPKA</span></Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Informasi with Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleDropdown("informasi")}
                className={`flex items-center py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Informasi
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {openDropdown === "informasi" && (
                <div className="absolute z-10 font-normal bg-white rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Kompetisi Mahasiswa</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Prestasi Mahasiswa</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Fasilitas Mahasiswa</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Alumni Awards</span></Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Layanan with Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleDropdown("layanan")}
                className={`flex items-center py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Layanan
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {openDropdown === "layanan" && (
                <div className="absolute z-10 font-normal bg-white rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Layanan Konseling & Kesehatan</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Informasi Beasiswa</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Inkubator Startup dan Bisnis</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Persiapan Karir</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Penalaran Karir dan Kreativitas Mahasiswa</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Pengembangan Minat dan Bakat Mahasiswa</span></Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Kuesioner with Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleDropdown("kuesioner")}
                className={`flex items-center py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Kuesioner
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {openDropdown === "kuesioner" && (
                <div className="absolute z-10 font-normal bg-white rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Kepuasan Pengguna Lulusan</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Kepuasan Layanan</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Tracer Study</span></Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Dokumen with Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleDropdown("dokumen")}
                className={`flex items-center py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Dokumen
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {openDropdown === "dokumen" && (
                <div className="absolute z-10 font-normal bg-white rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Policies</span></Link></li>
                    <li><Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Guidelines</span></Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/VisiMisi" className={`block py-2 px-3 md:p-0 ${isScrolled ? "text-gray-900" : "text-white"} hover:text-gray-500`} aria-current="page">
                Visi Misi
              </Link>
            </li>

            {/* Language Selector */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className={`flex items-center justify-between w-full py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                <img
                  src={`/image/${selectedLanguage.toLowerCase()}.png`}
                  alt={`${selectedLanguage} Flag`}
                  className="w-5 h-5 mr-2"
                />
                {selectedLanguage === "ID" && "Bahasa Indonesia"}
                {selectedLanguage === "EN" && "English"}
                {selectedLanguage === "AR" && "العربية"}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  id="languageDropdown"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <button
                        onClick={() => changeLanguage("ID")}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                      >
                        <img
                          src="/image/id.png"
                          alt="Indonesian Flag"
                          className="w-5 h-5 mr-2"
                        />
                        Bahasa Indonesia
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => changeLanguage("EN")}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                      >
                        <img
                          src="/image/en.png"
                          alt="English Flag"
                          className="w-5 h-5 mr-2"
                        />
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => changeLanguage("AR")}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                      >
                        <img
                          src="/image/ar.png"
                          alt="Arabic Flag"
                          className="w-5 h-5 mr-2"
                        />
                        العربية
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}