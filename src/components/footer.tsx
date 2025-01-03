"use client";
import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Insight Sphere Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Insight Sphere
            </h2>
            <p className="mb-4">
              At Insight Sphere, we believe that everyone has a story worth
              sharing. Our platform serves as a digital canvas where ideas,
              experiences, and perspectives come to life.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:rubaharoon80@gmail.com"
                  className="hover:text-white"
                >
                  rubaharoon80@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+92323456789" className="hover:text-white">
                  +92 (323) 456-789
                </a>
              </li>
              <li>Address: 123 Main Street, Nazimabad, Karachi</li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Explore</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/story" className="hover:text-white">
                  My Story
                </a>
              </li>
              <li>
                <a href="/addpost" className="hover:text-white">
                  Add a Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/newsletter" className="hover:text-white">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Connect With Us
            </h2>
            <p className="text-sm mb-4">
              Follow us on social media for the latest updates and tech
              insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rubaharoon"
                className="text-gray-400 bg-transparent hover:text-yellow-600"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.facebook.com/ruba.haroon.14"
                className="text-gray-400 bg-transparent hover:text-blue-700"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/rubaharoon_/?next=%2F"
                className="text-gray-400 bg-transparent hover:text-purple-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@rubaharoon331"
                className="text-gray-400 bg-transparent hover:text-red-600"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="mailto:rubaharoon80@gmail.com"
                className="text-gray-400 bg-transparent hover:text-red-600"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            © 2024 Insight Sphere. All rights reserved.{" "}
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </p>
          <p className="text-sm mt-2">
            Made with <span className="text-red-500">❤</span> by{" "}
            <a href="#" className="hover:text-white">
              Ruba Haroon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
