"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ID");
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="image/logo-unismuh.png" className="h-8" alt="Flowbite Logo" />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            UNISMUH
          </span>
        </a>

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
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 md:p-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-500`}
              >
                Contact
              </a>
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
