"use client";
import React, { useState, useEffect } from "react";

const StorySection: React.FC = () => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");

  // Load comments from localStorage on the client side
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    if (Array.isArray(storedComments)) {
      setComments(storedComments);
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleCommentSubmit = () => {
    if (!name.trim() || !newComment.trim()) {
      alert("Please enter your name and comment!");
      return;
    }

    const updatedComments = [...comments, { name, text: newComment }];
    setComments(updatedComments);

    setName("");
    setNewComment("");
  };

  return (
    <section
      id="story"
      className="py-16 px-4 sm:px-8 bg-cover bg-center text-gray-100 relative mt-10"
      style={{
        backgroundImage: "url('/images/storybackground.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-6 drop-shadow-lg animate-bounce">
          How I Overcome Self-Doubt to Launch My First Blog
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-center italic drop-shadow-lg animate-pulse">
          &quot;Five years ago, I never imagined I would be writing this. Back then, I
          was staring at my laptop screen, paralyzed by self-doubt...&quot;
        </p>
        <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 sm:p-8 mb-12 animate-pulse">
          <h3 className="text-xl font-semibold mb-4">The Struggle with Starting</h3>
          <p className="text-lg leading-relaxed mb-4 animate-pulse">
            For months, I had been toying with the idea of sharing my thoughts
            online. I loved writing and always felt I had something valuable to
            say, but fear held me back:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 pl-6 animate-pulse">
            <li>What if people hated my content!</li>
            <li>What if no one even read it!</li>
            <li>What if I wasnot good enough to inspire!</li>
          </ul>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-yellow-500 rounded-lg shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl font-semibold mb-6">Join the Conversation</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts or ask a question..."
            className="w-full h-32 p-4 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
          ></textarea>
          <button
            onClick={handleCommentSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-md font-medium transition duration-200"
          >
            Submit Comment
          </button>
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Recent Comments:</h4>
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="bg-white text-gray-600 dark:bg-gray-300 shadow p-4 rounded-lg"
                >
                  <p>
                    <strong>{comment.name}:</strong> {comment.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;