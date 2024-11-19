"use client";
import { useRef } from 'react';
import Image from 'next/image';
import React from 'react';


export default function Features() {
  const scrollRef = useRef(null);

  // Function to handle left/right scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth;
      const scrollAmount = cardWidth * 3; // Scroll tiga card sekaligus
      const newPosition = direction === 'left' ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-blue-100 dark:bg-white-900 pb-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-12 px-6 mx-auto max-w-screen-xl text-center sm:py-20 lg:px-8">
          <div className="max-w-screen-md mx-auto mb-12 lg:mb-20">
            <h2 className="mb-6 text-5xl font-extrabold text-gray-900 dark:text-white">
              Dirancang untuk tim bisnis seperti Anda
            </h2>
            <p className="text-lg sm:text-2xl text-gray-500 dark:text-gray-400">
              Di Flowbite, kami berfokus pada pasar di mana teknologi, inovasi, dan modal dapat membuka nilai jangka panjang dan mendorong pertumbuhan ekonomi.
            </p>
          </div>
          <div className="space-y-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-16 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {/* Lingkaran Ikon */}
                <div className={`flex justify-center items-center mb-6 w-16 h-16 rounded-full ${feature.bgColor}`}>
                  {/* Gambar Ikon */}
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={feature.icon} // Gambar sebagai ikon
                      alt={feature.title} // Deskripsi gambar untuk aksesibilitas
                      className="w-8 h-8 lg:w-10 lg:h-10 object-contain" // Ukuran dan pengaturan objek
                    />
                  </div>
                </div>
                {/* Judul dan Deskripsi */}
                <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {/* Team Member 1 */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="image/icon/do1.png" alt="Dr. Ir. NENNY, S.T., M.T." />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr. Ir. NENNY, S.T., M.T.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">JAB FUNG : Lektor Kepala </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Bonnie drives the technical strategy of the Flowbite platform and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="image/icon/do2.png" alt="Jese Avatar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr. Ir. ANDI MAKBUL SYAMSURI, S.T., M.T., IPM.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">JAB FUNG : Lektor</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Jese drives the technical strategy of the Flowbite platform and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="image/icon/do3.png" alt="Jese Avatar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Ir. ASNITA VIRLAYANI, S.T., M.T.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">JAB FUNG : Lektor </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Jese drives the technical strategy of the Flowbite platform and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="image/icon/do4.png" alt="Bonnie Avatar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr. MARUPAH, S.P., M.P.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">JAB FUNG : Lektor </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Bonnie drives the technical strategy of the Flowbite platform and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-4">
      <div className="container mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Pengumuman</h2>
        
        {/* Scroll Buttons */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
            aria-label="Scroll Left"
          >
            ◀
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
            aria-label="Scroll Right"
          >
            ▶
          </button>

          {/* Card Slider */}
          <div ref={scrollRef} className="flex overflow-hidden space-x-4 py-4 w-full">
            <Pengumuman
              title="Beasiswa Pendidikan LPKA"
              author="Diana Sari"
              date="10 Nov 2024"
              description="Beasiswa khusus untuk anak-anak di LPKA yang berprestasi, diberikan oleh Unismuh Makassar untuk mendukung pendidikan mereka."
              linkText="Pelajari lebih lanjut"
              image="/image/p1.jpg"
              avatar="/image/avatar1.jpg"
              className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            />
            <Pengumuman
              title="Pelatihan Karir Mahasiswa"
              author="Rizky Ramadhan"
              date="5 Nov 2024"
              description="Program pelatihan karir bagi mahasiswa Unismuh, yang melibatkan pembinaan dan bimbingan langsung dari ahli di bidangnya."
              linkText="Daftar sekarang"
              image="/image/p2.jpg"
              avatar="/image/avatar2.jpg"
              className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            />
            <Pengumuman
              title="Kesempatan Relawan LPKA"
              author="Siti Nurhaliza"
              date="1 Nov 2024"
              description="Ayo bergabung sebagai relawan di LPKA Makassar dan berkontribusi dalam pembinaan anak-anak di lingkungan khusus ini."
              linkText="Lamar sekarang"
              image="/image/p3.jpg"
              avatar="/image/avatar3.jpg"
              className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            />
            <Pengumuman
              title="Sosialisasi Lingkungan Hidup"
              author="Budi Santoso"
              date="28 Okt 2024"
              description="Program sosialisasi peduli lingkungan untuk anak-anak di LPKA, mengajarkan pentingnya menjaga kebersihan dan kelestarian lingkungan."
              linkText="Baca selengkapnya"
              image="/image/p4.jpg"
              avatar="/image/avatar4.jpg"
              className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            />
            <Pengumuman
              title="Workshop Keterampilan Hidup"
              author="Indah Permata"
              date="20 Okt 2024"
              description="Workshop keterampilan hidup bagi anak-anak di LPKA, fokus pada pengembangan keterampilan praktis yang berguna."
              linkText="Ikuti sekarang"
              image="/image/p5.jpg"
              avatar="/image/avatar5.jpg"
              className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            />
            <Pengumuman
              title="Pengembangan Karakter"
              author="Yusuf Hidayat"
              date="15 Okt 2024"
              description="Pelatihan pengembangan karakter bagi anak-anak di LPKA, memberikan edukasi tentang etika, moral, dan nilai-nilai positif."
              linkText="Cari tahu lebih lanjut"
              image="/image/p6.jpg"
              avatar="/image/avatar6.jpg"
              className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-8 px-4">
      <div className="container mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Berita Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BeritaCard
            title="Penyuluhan & Edukasi di LPKA"
            author="Fadli Ramadhan"
            date="15 Agu 2024"
            readTime="16 menit baca"
            image="/image/berita1.jpeg"
          />
          <BeritaCard
            title="Kerjasama Beasiswa dengan Institusi"
            author="Ayu Mariani"
            date="12 Agu 2024"
            readTime="10 menit baca"
            image="/image/berita2.jpeg"
          />
          <BeritaCard
            title="Workshop Pengembangan Diri"
            author="Yusuf Malik"
            date="8 Agu 2024"
            readTime="12 menit baca"
            image="/image/berita3.png"
          />
          <BeritaCard
            title="Pelatihan Kepemimpinan"
            author="Rahmawati Zainal"
            date="5 Agu 2024"
            readTime="8 menit baca"
            image="/image/berita4.jpeg"
          />
          <BeritaCard
            title="Kampanye Kebersihan Lingkungan"
            author="Dedi Supriyadi"
            date="1 Agu 2024"
            readTime="6 menit baca"
            image="/image/berita5.jpeg"
          />
          <BeritaCard
            title="Program Kesehatan Anak"
            author="Nur Aisyah"
            date="28 Jul 2024"
            readTime="14 menit baca"
            image="/image/berita6.jpeg"
          />
        </div>
      </div>
    </section>

    </section>
  );
}

function BeritaCard({ title, author, date, readTime, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src="/image/example.png" alt={author} className="w-8 h-8 rounded-full mr-2" />
          <div className="text-sm text-gray-600">
            <p>{author}</p>
            <p>{date} · {readTime}</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
        <a href="#" className="text-blue-500 mt-4 inline-block">
          Read more →
        </a>
      </div>
    </div>
  );
}

const Pengumuman = ({ title, author, date, description, linkText, image, avatar, className }) => {
  return (
    <div className={`bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 ${className}`}>
      {/* Card Image */}
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      
      {/* Card Content */}
      <div className="p-4">
        {/* Author and Date */}
        <div className="flex items-center mb-2">
          <img src={avatar} alt={author} className="w-8 h-8 rounded-full mr-2" />
          <div className="text-sm">
            <p className="font-semibold">{author}</p>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
        
        {/* Title and Description */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Link */}
        <a href="#" className="text-blue-500 hover:underline">{linkText} →</a>
      </div>
    </div>
  );
};

// function Feature({ title, description, icon, iconBg, link }) {
//   return (
//     <div>
//       <div className="flex items-center gap-4">
//         <div className={`p-3 rounded-full ${iconBg}`}>
//           {icon}
//         </div>
//         <h3 className="text-xl font-semibold">{title}</h3>
//       </div>
//       <p className="text-gray-400 mt-2">{description}</p>
//       <a href={link} className="text-blue-400 mt-2 inline-flex items-center">
//         Learn more
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </a>
//     </div>
//   );
// }

const features = [
  {
    title: 'Salurkan Minat Bakatmu',
    description: 'Temukan berbagai kegiatan yang dapat membantu mengasah dan mengembangkan minat serta bakatmu.',
    icon: '/image/icon/palet.png',  // Replace with actual image path
    bgColor: 'bg-blue-100 dark:bg-blue-900',
  },
  {
    title: 'Gali Kreativitasmu',
    description: 'Ikuti program dan workshop yang dirancang untuk mengeluarkan sisi kreatif terbaikmu.',
    icon: '/image/icon/lampu.png',  // Replace with actual image path
    bgColor: 'bg-yellow-100 dark:bg-yellow-900',
  },
  {
    title: 'Yuk Bikin Usaha!',
    description: 'Belajar cara memulai bisnis dan mengelola usaha untuk mewujudkan impianmu.',
    icon: '/image/icon/koper.png',  // Replace with actual image path
    bgColor: 'bg-green-100 dark:bg-green-900',
  },
  {
    title: 'Rancang Karirmu Di Sini',
    description: 'Dapatkan panduan dan dukungan untuk membangun jalur karir yang sesuai dengan potensimu.',
    icon: '/image/icon/target.png',  // Replace with actual image path
    bgColor: 'bg-purple-100 dark:bg-purple-900',
  },
  {
    title: 'Bergabung di Organisasi Mahasiswa',
    description: 'Perluas jaringan dan keterampilanmu dengan menjadi bagian dari organisasi mahasiswa.',
    icon: '/image/icon/tangan.png',  // Replace with actual image path
    bgColor: 'bg-teal-100 dark:bg-teal-900',
  },
  {
    title: 'Daftar Beasiswa',
    description: 'Cek peluang beasiswa untuk mendukung pendidikan dan karirmu.',
    icon: '/image/icon/sertifikat.png',  // Replace with actual image path
    bgColor: 'bg-red-100 dark:bg-red-900',
  },
  {
    title: 'Curhat Yuk!',
    description: 'Butuh teman bicara? Kami menyediakan ruang untuk berbagi cerita dan mendapatkan solusi.',
    icon: '/image/icon/chat.png',  // Replace with actual image path
    bgColor: 'bg-pink-100 dark:bg-pink-900',
  },
  {
    title: 'Ajukan Reward Prestasi',
    description: 'Dapatkan penghargaan atas pencapaian luar biasa yang telah kamu raih.',
    icon: '/image/icon/trophy.png',  // Replace with actual image path
    bgColor: 'bg-orange-100 dark:bg-orange-900',
  },
];
