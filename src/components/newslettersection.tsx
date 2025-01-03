"use client";

import Link from "next/link";
import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12 px-6 md:px-16"
      style={{
        backgroundImage: "url('/images/newsletterbackground.jpg')",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Subscribe to our newsletter to get the latest updates, news, and
          special offers delivered right to your inbox.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-2 rounded-md border focus:ring-2 focus:ring-yellow-500 focus:outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition-transform transform hover:scale-105"
          >
            <Link href="mailto:rubaharoon80@gmail.com" className="text-white">
              Subscribe
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
