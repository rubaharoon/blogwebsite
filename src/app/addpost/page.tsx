"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import {
  AiOutlineFileText,
  AiOutlinePicture,
  AiOutlineEdit,
  AiOutlineTags,
} from "react-icons/ai";

interface Post {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

const AddPostSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const calculateReadTime = (text: string): string => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleAddPost = (e: FormEvent) => {
    e.preventDefault();

    if (!title || !category || !content || !image) {
      alert("Please fill in all fields, including uploading an image!");
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      title,
      category,
      content,
      image,
      date: new Date().toLocaleDateString(),
      readTime: calculateReadTime(content),
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setCategory("");
    setContent("");
    setImage("");
  };

  return (
    <section
      className="bg-cover bg-center py-12 px-6 md:px-16 mt-12"
      style={{
        backgroundImage: "url('/images/addpost.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-yellow-500 to-gray-500 text-center mb-6 shadow-md">
        Add a New Post
      </h2>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Form for Adding Posts */}
        <form className="space-y-6" onSubmit={handleAddPost}>
          <div>
            <label htmlFor="title" className="flex items-center mb-1">
              <AiOutlineEdit className="h-5 w-5 text-yellow-500 mr-2" />
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="category" className="flex items-center mb-1">
              <AiOutlineTags className="h-5 w-5 text-yellow-500 mr-2" />
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter a category (e.g., Technology, Lifestyle)"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="content" className="flex items-center mb-1">
              <AiOutlineFileText className="h-5 w-5 text-yellow-500 mr-2" />
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="Write your post content here..."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="flex items-center mb-1">
              <AiOutlinePicture className="h-5 w-5 text-yellow-500 mr-2" />
              Upload an Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border rounded-md px-4 py-2 focus:outline-none"
            />
            {image && (
              <div className="relative mt-4 h-40 w-full rounded-md shadow-md">
                <Image
                  src={image}
                  alt="Uploaded Preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-yellow-500 via-purple-500 to-orange-500 hover:from-yellow-600 hover:via-purple-600 hover:to-orange-600 shadow-lg transform transition-transform hover:scale-105 focus:ring-4 focus:ring-purple-300"
            >
              Add Post
            </button>
          </div>
        </form>

        {/* Displaying the Posts */}
        <h3 className="text-xl font-bold text-gray-800 mt-12 mb-4">
          Your Posts
        </h3>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              {post.image && (
                <div className="relative mb-4 h-40 w-full rounded-md shadow-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
              <p className="text-sm text-yellow-500 mb-1">
                Category: {post.category}
              </p>
              <h4 className="text-lg font-bold text-gray-800">{post.title}</h4>
              <p className="text-sm text-gray-600">
                {post.date} - {post.readTime}
              </p>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))}
          {posts.length === 0 && (
            <p className="text-gray-500">No posts to display yet!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddPostSection;
