"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaSun,
  FaMoon,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Insight Sphere Logo"
            width={20}
            height={20}
            className="w-8 h-8 mr-2"
          />
          <span className="text-2xl font-bold text-white dark:text-yellow-500">
            Insight Sphere
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-white dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition"
          >
            About
          </a>
          <a
            href="/blog"
            className="text-white dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-white dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="hidden md:flex space-x-3">
            <a
              href="https://www.facebook.com/ruba.haroon.14"
              className="text-white bg-transparent hover:text-blue-700 hover:bg-white transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/rubaharoon_/?next=%2F"
              className="text-white bg-transparent hover:text-purple-700 hover:bg-white transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/rubaharoon"
              className="text-white bg-transparent hover:text-yellow-500 hover:bg-white transition"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-white dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Sidebar Menu Toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white dark:text-gray-300 md:hidden"
          >
            <RiMenu3Fill size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <nav className="w-64 bg-gray-900 dark:bg-gray-800 text-white p-6 space-y-4">
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <AiOutlineCloseSquare size={24} />
            </button>
            <a
              href="/"
              className="block text-lg hover:text-yellow-400 dark:hover:text-yellow-400 transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-lg hover:text-yellow-400 dark:hover:text-yellow-400 transition"
            >
              About
            </a>
            <a
              href="/blog"
              className="block text-lg hover:text-yellow-400 dark:hover:text-yellow-400 transition"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="block text-lg hover:text-yellow-400 dark:hover:text-yellow-400 transition"
            >
              Contact
            </a>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.facebook.com/ruba.haroon.14"
                className="text-white bg-transparent hover:text-blue-700 hover:bg-white transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/rubaharoon_/?next=%2F"
                className="text-white bg-transparent hover:text-purple-700 hover:bg-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://github.com/rubaharoon"
                className="text-white bg-transparent hover:text-yellow-500 hover:bg-white transition"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
