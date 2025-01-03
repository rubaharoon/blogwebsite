"use client";
import React from "react";
import Image from "next/image";
import { FaLightbulb, FaUsers, FaBullseye, FaRocket } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-8 bg-cover bg-center text-gray-100 relative mt-10"
      style={{
        backgroundImage: "url('/images/aboutbackground.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Section Heading */}
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-6 drop-shadow-lg animate-bounce">
          About <span className="text-yellow-400">Insight Sphere</span>
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-center italic drop-shadow-lg mb-8 animate-pulse delay-200">
          Dive into our story, vision, and mission, and meet the incredible team
          behind the scenes.
        </p>

        {/* Who We Are */}
        <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 sm:p-8 mb-12 animate-pulse delay-200">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <FaLightbulb className="text-yellow-500 mr-2" /> Who We Are
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to <strong>Insight Sphere</strong>, a hub for stories,
            guides, and insights that spark inspiration and nurture growth. We
            are passionate about creating a platform that provides:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 pl-6">
            <li>
              <FaBullseye className="inline text-yellow-500 mr-2" />
              Relatable stories that resonate with your journey.
            </li>
            <li>
              <FaRocket className="inline text-yellow-500 mr-2" />
              Actionable tutorials to help you unlock your potential and achieve
              your goals.
            </li>
            <li>
              <FaUsers className="inline text-yellow-500 mr-2" />A supportive
              community where creativity thrives and ideas are exchanged.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            At <strong>Insight Sphere</strong>, we believe that everyone has a
            story worth sharing. Our platform serves as a digital canvas where
            ideas, experiences and perspectives come to life. Whether you are a
            seasoned writer, a passionate storyteller or someone with a unique
            perspective. Insight Sphere is the place to amplify your voice. Dive
            into a vibrant collection of blogs spanning diverse topics from
            personal growth and travel adventures to cutting-edge technology and
            cultural insights.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-500 rounded-lg shadow-lg p-6 sm:p-8 mb-12 animate-pulse delay-200">
          <h3 className="text-2xl font-bold mb-4 text-center">
            <FaBullseye className="text-yellow-500 mr-2 inline" />
            Mission & Vision
          </h3>
          <p className="text-lg leading-relaxed text-center mb-4">
            Our mission is to empower individuals through knowledge and inspire
            them to take action toward personal and professional growth.
          </p>
          <p className="text-lg leading-relaxed text-center">
            Our vision is to create a world where everyone has access to
            insights that help them realize their full potential.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <FaUsers className="text-yellow-500 mr-2 inline" />
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/images/team1.jpg"
                alt="John Doe"
                width={128}
                height={128}
                className="mx-auto rounded-full shadow-md mb-4 border-2 border-yellow-500"
              />
              <h4 className="text-lg font-bold">John Doe</h4>
              <p className="text-sm font-semibold text-yellow-500">
                Founder & Visionary
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Passionate about innovation and creativity, John ensures that
                Insight Sphere delivers valuable content and community-driven
                initiatives.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="/images/team2.jpg"
                alt="Jane Smith"
                width={128}
                height={128}
                className="mx-auto rounded-full shadow-md mb-4 border-2 border-yellow-500"
              />
              <h4 className="text-lg font-bold">Jane Smith</h4>
              <p className="text-sm font-semibold text-yellow-500">
                Community Manager
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Jane focuses on building a supportive community, fostering
                connections, and creating an engaging user experience.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/images/team3.jpg"
                alt="Emily Johnson"
                width={128}
                height={128}
                className="mx-auto rounded-full shadow-md mb-4 border-2 border-yellow-500"
              />
              <h4 className="text-lg font-bold">Emily Johnson</h4>
              <p className="text-sm font-semibold text-yellow-500">
                Content Strategist
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Emily ensures that our content is insightful, actionable, and
                aligned with the needs of our audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
