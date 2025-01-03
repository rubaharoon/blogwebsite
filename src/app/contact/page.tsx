import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/contactbackground.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 dark:from-black/70"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-white">
        {/* Heading */}
        <div className="text-center mb-10 animate-pulse">
          <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-lg">
            Got a question or want to work together? We &ldquo;love&rdquo; to
            hear from you.
          </p>
        </div>

        {/* Form */}
        <form
          className="grid gap-6 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 dark:bg-gray-300 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 dark:bg-gray-500 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 dark:bg-gray-500 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-yellow-400 outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              <Link href="mailto:rubaharoon80@gmail.com">Send Message</Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
