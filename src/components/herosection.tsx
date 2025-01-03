"use client";
import { useEffect, useState } from "react";
import { FaPen, FaBookOpen } from "react-icons/fa";

export default function HeroSection() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setTimeout(() => setAnimationClass("animate-pulse"), 100);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white dark:text-gray-200"
      style={{
        backgroundImage: "url('/images/storybackground.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 dark:bg-black dark:bg-opacity-70"></div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-8 ${animationClass}`}
      >
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 text-yellow-400 leading-tight">
          Inspiration, Insights, and Stories to Fuel Your Journey
        </h1>
        <p className="text-sm sm:text-lg mb-6 text-white">
          Dive into a world of ideas and stories that empower you to take
          action.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row justify-center">
          {/* Read My Story Button */}
          <a
            href="/story"
            className="flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-semibold py-2 sm:py-3 px-6  rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <FaBookOpen className="mr-2 text-base sm:text-lg" />
            Read My Story
          </a>

          {/* Add Post Button */}
          <a
            href="/addpost"
            className="flex items-center justify-center w-full sm:w-auto bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-800 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <FaPen className="mr-2 text-base sm:text-lg" />
            Add Post
          </a>
        </div>
      </div>
    </section>
  );
}
