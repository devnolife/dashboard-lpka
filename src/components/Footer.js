export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 relative">
      {/* SVG Wave */}
      <div className="absolute -top-10 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[80px] rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,42.35c-69.22,4.58-141.89,18.11-211.24,13.5-77.54-5.3-155.44-29.68-233.45-35.45C432.06,13.37,345,25.53,261,36.12c-58.72,7.54-117.23,15-176,16.77C56.13,54.66,0,49.93,0,49.93V120H1200V95.56S1054.88,37.77,985.66,42.35Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="sm:flex sm:items-center sm:justify-between py-8">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/image/logo-lpka-w-300x94.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Lkp™</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <span className="block text-sm text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Lkp™</a>. All Rights Reserved.
          </span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}