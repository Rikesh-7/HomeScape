import React, { useState } from "react";

const Pricing = () => {
  const regions = ["North America", "Europe", "Asia", "Australia", "South America", "Africa"];
  const [showRegions, setShowRegions] = useState(false);

  const handleShowRegions = () => {
    setShowRegions(!showRegions);
  };

  return (
    <div className="container mx-auto p-6 text-gray-900 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Free Plan */}
        <div className="border rounded-lg shadow-lg p-6 bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2 text-center">Free Plan</h2>
          <p className="text-lg font-semibold mb-4 text-center">Price: $0</p>
          <p className="text-center">
            Perfect for beginners. Get access to basic stock data and investment
            tracking tools to start your journey.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>- Basic stock market updates</li>
            <li>- Limited portfolio tracking</li>
            <li>- Access to educational content</li>
          </ul>
          <div className="mt-auto text-center">
            <button className="px-6 py-3 bg-orange-500 text-black rounded-md hover:bg-orange-600 transition duration-300">
              Create Account
            </button>
          </div>
        </div>

        {/* Regional Plan */}
        <div className="border rounded-lg shadow-lg p-6 bg-gray-50 dark:bg-gray-800 flex flex-col justify-between relative">
          <h2 className="text-xl font-bold mb-2 text-center">Regional Plan</h2>
          <p className="text-lg font-semibold mb-4 text-center">Price: $99/month</p>
          <p className="text-center">
            Ideal for focused investors. Unlock access to stock data and analysis for specific regions.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>- Regional market insights</li>
            <li>- Advanced charting tools</li>
            <li>- Custom notifications for selected regions</li>
          </ul>
          {showRegions ? (
            <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 bg-opacity-90 rounded-lg p-4 overflow-y-auto">
              <h3 className="text-xl font-bold text-center text-black dark:text-white mb-4">Select a Region</h3>
              <ul className="space-y-4">
                {regions.map((region, index) => (
                  <li
                    key={index}
                    className="text-lg text-center text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded"
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-4 text-center">
              Select this plan to analyze market trends and opportunities within a specific region.
            </p>
          )}
          <div className="mt-auto text-center">
            <button className="px-6 py-3 bg-orange-500 text-black rounded-md hover:bg-orange-600 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Global Plan */}
        <div className="border rounded-lg shadow-lg p-6 bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2 text-center">Global Plan</h2>
          <p className="text-lg font-semibold mb-4 text-center">Price: $299/month</p>
          <p className="text-center">
            For advanced investors. Gain full access to global stock markets and premium tools.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>- Full access to global markets</li>
            <li>- Comprehensive analytics and tools</li>
            <li>- Personalized expert reports</li>
          </ul>
          <div className="mt-auto text-center">
            <button className="px-6 py-3 bg-orange-500 text-black rounded-md hover:bg-orange-600 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Show Region Button Below the Regional Plan */}
      <div className="flex justify-center mb-12">
        <button
          onClick={handleShowRegions}
          className="px-6 py-3 bg-orange-500 text-black rounded-md hover:bg-orange-600 transition duration-300"
        >
          {showRegions ? "Hide Regions" : "Show Regions"}
        </button>
      </div>

      {/* Additional Pricing Details */}
      <section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose Our Pricing Plans?</h2>
        <p className="text-center mb-4">
          Our pricing plans are tailored for all kinds of investors, from beginners to seasoned experts. Choose the plan
          that suits your needs and get access to powerful tools and insights for smarter investments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Affordable Plans</h3>
            <p>Get the best value for money with our competitively priced plans.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Advanced Tools</h3>
            <p>Use cutting-edge analytics and reporting tools for better decision-making.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Comprehensive Access</h3>
            <p>Choose regional or global plans to access the data you need.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
