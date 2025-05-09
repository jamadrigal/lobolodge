import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/cabin.jpeg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Lobo Lodge
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Your perfect A-Frame mountain getaway in Munds Park
          </p>
          <a
            href="#features"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
