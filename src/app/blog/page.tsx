"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Food" },
  { id: 4, name: "Beauty" },
  { id: 5, name: "Lifestyle" },
];

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development with NextJS",
    description:
      "Exploring the latest trends and technologies shaping the future of web development.",
    image: "/images/webdevelopment.jpeg",
    date: "5 Jan, 2024",
    author: "John Doe",
    views: 1540,
    category: "Technology",
    slug: "web-development-nextjs",
  },
  {
    id: 2,
    title:
      "AI in Modern Web Applications: Revolutionizing the Digital Experience",
    description:
      "Discover how artificial intelligence is transforming the way we interact with the web.",
    image: "/images/artificialintelligence.jpg",
    date: "12 Jan, 2024",
    author: "Jane Smith",
    views: 1240,
    category: "Technology",
    slug: "ai-in-modern-web-applications-revolutionizing-the-digital-experience",
  },
  {
    id: 3,
    title: "The Rise of Edge Computing: Transforming Data Processing",
    description: "Discover how edge computing revolutionizes data processing.",
    image: "/images/edgecomputing.jpg",
    date: "15 Mar, 2024",
    author: "Alice Brown",
    views: 875,
    category: "Technology",
    slug: "the-rise-of-edge-computing-transforming-data-processing",
  },
  {
    id: 4,
    title: "The Impact of Social Media on Fashion Trends",
    description:
      "Dive into the transformative impact of social media on fashion trends, highlighting its role in democratizing fashion, creating instant trends, and reshaping consumer behavior.",
    image: "/images/fashiontrend.jpg",
    date: "20 Feb, 2024",
    author: "John Smith",
    views: 1100,
    category: "Fashion",
    slug: "the-impact-of-social-media-on-fashion-trends",
  },
  {
    id: 5,
    title: "The Importance of Cultural Influences in Fashion",
    description:
      "Explore how cultural heritage impacts fashion, the role it plays in global and local contexts, and why understanding and respecting these influences is vital in today’s interconnected world.",
    image: "/images/culturalinfluence.jpg",
    date: "25 Feb, 2024",
    author: "Ahmed Khan",
    views: 1200,
    category: "Fashion",
    slug: "the-importance-of-cultural-influences-in-fashion",
  },
  {
    id: 6,
    title: "Behind the Scenes: The Life of a Fashion Designer",
    description:
      "Discover the creative process, challenges, and rewards of being a fashion designer. Learn how designers bring their ideas to life and navigate the ever-evolving fashion industry.",
    image: "/images/fashiondesigner.jpg",
    date: "10 Apr, 2024",
    author: "Emma Johnson",
    views: 1500,
    category: "Fashion",
    slug: "the-life-of-a-fashion-designer",
  },
  {
    id: 7,
    title: "Exploring Global Cuisines: A Journey Through Taste and Culture",
    description:
      "Embark on a culinary adventure through the diverse culinary traditions of different regions around the world.",
    image: "/images/globalcuisuine.jpg",
    date: "5 March, 2024",
    author: "Sophia Lee",
    views: 1200,
    category: "Food",
    slug: "exploring-global-cuisines-a-journey-through-taste-and-culture",
  },
  {
    id: 8,
    title: "The Impact of Food Waste: Simple Ways to Reduce and Reuse",
    description:
      "Understanding the impact of food waste and adopting practical strategies to reduce and reuse it can lead to a more sustainable future.",
    image: "/images/foodwaste.jpg",
    date: "18 April, 2024",
    author: "Sophia Lane",
    views: 920,
    category: "Food",
    slug: "the-impact-of-food-waste-simple-ways-to-reduce-and-reuse",
  },
  {
    id: 9,
    title: "The Influence of Technology on Food Trends",
    description:
      "Discover how technology is shaping the future of food, from innovative cooking techniques to smart kitchen appliances.",
    image: "/images/foodtrends.jpg",
    date: "22 May, 2024",
    author: "David Kim",
    views: 1400,
    category: "Food",
    slug: "the-influence-of-technology-on-food-trends",
  },
  {
    id: 10,
    title: " Embracing Your Natural Glow: Beauty Tips for Every Skin Type",
    description:
      "Explores how to celebrate and enhance your natural glow with personalized beauty tips tailored to your skin type, empowering you to feel confident and radiant in your own skin.",
    image: "/images/glowingskin.jpg",
    date: "22 Febuary, 2024",
    author: "Sarah Lee",
    views: 2000,
    category: "Beauty",
    slug: "embracing-your-natural-glow-beauty-tips-for-every-skin-type",
  },
  {
    id: 11,
    title: "The Art of Self-Care: Elevate Your Beauty Routine",
    description:
      "Discover the transformative power of self-care and how it can elevate your beauty routine, helping you look and feel your best from the inside out. Get inspired and embrace your natural glow.",
    image: "/images/beautyroutine.jpg",
    date: "22 March, 2024",
    author: "Aiza Khan",
    views: 2500,
    category: "Beauty",
    slug: "the-art-of-self-care-elevate-your-beauty-routine",
  },
  {
    id: 12,
    title: "Glow Naturally: Skincare Secrets for Radiant Beauty",
    description:
      "Discover the secrets to achieving naturally glowing skin with simple, effective skincare tips. From understanding your skin's needs to incorporating natural remedies.",
    image: "/images/naturalbeauty.jpg",
    date: "22 April, 2024",
    author: "Asma Sheikh",
    views: 2000,
    category: "Beauty",
    slug: "glow-naturally-skincare-secrets-for-radiant-beauty",
  },
  {
    id: 13,
    title: "Crafting a Balanced Lifestyle: Tips for Modern Living",
    description:
      "Explores practical strategies for achieving a harmonious lifestyle, focusing on wellness, productivity, and personal fulfillment. Discover how to create a balanced life that aligns with your values and goals.",
    image: "/images/balancedlifestyle.jpg",
    date: "20 June, 2024",
    author: "Ayesha Ahmed",
    views: 3000,
    category: "Lifestyle",
    slug: "crafting-a-balanced-lifestyle-tips-for-modern-living",
  },
  {
    id: 14,
    title: "Mindful Living: How to Slow Down and Savor Life",
    description:
      "Explores the principles of mindful living, offering practical tips to help you slow down, focus on the present, and enjoy life’s simple pleasures. Discover the transformative power of mindfulness in everyday life.",
    image: "/images/mindfulliving.jpg",
    date: "20 July, 2024",
    author: "Anum Faisal",
    views: 1000,
    category: "Lifestyle",
    slug: "mindful-living-how-to-slow-down-and-savor-life",
  },
  {
    id: 15,
    title: "The Power of Morning Routines: Transform Your Day with Purpose",
    description:
      "Explores the benefits of morning rituals and provides actionable tips to help you create a routine tailored to your lifestyle. Discover how a mindful morning can set a positive tone for the rest of your day.Crafting a Balanced Lifestyle that energizes your day.",
    image: "/images/morninglifestyle.jpg",
    date: "20 August, 2024",
    author: "Sara Ali",
    views: 1500,
    category: "Lifestyle",
    slug: "the-power-of-morning-routines-transform-your-day-with-purpose",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Technology");

  const filteredBlogs = blogs.filter(
    (blog) => blog.category === selectedCategory
  );

  return (
    <div className="py-12 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          Explore by <span className="text-yellow-400">Blogs</span>
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-lg animate-bounce ${
                selectedCategory === category.name
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-white transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-yellow-400">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{blog.date}</p>
                <p className="text-gray-300 mt-2 text-sm">{blog.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    href={`/blog/${blog.category.toLowerCase()}/${blog.slug}`}
                    className="text-yellow-400 hover:underline text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
