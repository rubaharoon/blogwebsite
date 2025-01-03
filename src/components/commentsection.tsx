"use client";

import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please fill in all fields!");
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleDateString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <section
      className="bg-cover bg-center py-12 px-6 md:px-16 mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-8 animate-bounce">
        Comments
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-gray-500">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 font-medium"
            >
              Your Comment
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Write your comment here..."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <h3 className="text-xl font-bold text-gray-800 mt-12 mb-4">
          Recent Comments
        </h3>
        <div className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <h4 className="font-medium text-gray-800">{comment.name}</h4>
                <p className="text-gray-600 text-sm">{comment.date}</p>
                <p className="text-gray-700 mt-2">{comment.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
