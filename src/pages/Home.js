import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800">
      {/* Introduction Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Welcome to Investment Hub
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Investment Hub is your trusted platform for exploring, buying, and managing stocks seamlessly. Whether you're a beginner or a seasoned investor, we provide the tools and resources to make informed investment decisions.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              1. Create an Account
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sign up for free and create a secure account to access all features. Your investment journey starts here!
            </p>
          </div>
          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              2. Explore Stocks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse a comprehensive list of stocks, review real-time data, and analyze trends to find the best opportunities.
            </p>
          </div>
          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              3. Invest with Confidence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Buy, sell, and manage your portfolio securely, with tools designed to support smart, data-driven investments.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              Real-Time Stock Data
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access live market data and get insights into stock prices, trends, and analytics.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              Portfolio Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track your investments, monitor performance, and review your portfolio with real-time updates.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              Secure Transactions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Make investments securely, with confidence in our robust data protection and transaction safety measures.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
              Educational Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore educational content, including articles, tutorials, and guides, to help you make better investment choices.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Why Choose Investment Hub?
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          <li className="mb-3">
            <span className="font-semibold text-blue-500 dark:text-blue-400">User-Friendly Platform:</span> Easy-to-navigate interface that’s ideal for both beginners and experts.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-blue-500 dark:text-blue-400">Data-Driven Insights:</span> Access in-depth market analysis to make smart investment decisions.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-blue-500 dark:text-blue-400">24/7 Access:</span> Stay connected to your investments anytime, from any device.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-blue-500 dark:text-blue-400">Secure & Private:</span> Your personal and financial information is securely protected.
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
          What Our Users Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Investment Hub has revolutionized my investment experience. It's easy to use and provides all the tools I need to stay ahead."
            </p>
            <h4 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">– Sarah W.</h4>
          </div>
          <div className="p-6 border dark:border-gray-700 rounded-lg shadow-md dark:bg-gray-700">
            <p className="text-gray-600 dark:text-gray-300 italic">
              "I appreciate the educational resources available on the platform. As a beginner, it has helped me understand the stock market better."
            </p>
            <h4 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">– Mark T.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Ready to Start Investing?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Join Investment Hub today and take control of your financial future. Sign up now to begin your journey.
        </p>
        <Link
          to="/signup"
          className="bg-blue-500 text-white dark:bg-blue-600 dark:text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
