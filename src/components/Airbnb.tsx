import React, { useEffect } from "react";
import {
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaUsers,
} from "react-icons/fa";
import Divider from "./Divider";

const Airbnb: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="airbnb"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience Lobo Lodge on Airbnb
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book your perfect mountain getaway through Airbnb and enjoy our
            premium amenities, stunning views, and unforgettable experiences.
          </p>
        </div>

        {/* Main Content Section with Embed and Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
          {/* Left Stacked Cards */}
          <div className="flex flex-col gap-8 w-full lg:w-1/4">
            <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                {FaStar({ className: "text-yellow-400 text-3xl" })}
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                4.9/5
              </h3>
              <p className="text-gray-300 text-center">Average Rating</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                {FaCalendarAlt({ className: "text-blue-400 text-3xl" })}
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                365
              </h3>
              <p className="text-gray-300 text-center">Days Available</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {FaBed({ className: "text-purple-400 text-2xl mr-3" })}
                <h3 className="text-xl font-semibold text-white">
                  Sleeping Arrangements
                </h3>
              </div>
              <p className="text-gray-300">
                2 bedrooms and a loft bed, comfortably sleeping up to 6 guests
                with premium bedding and linens.
              </p>
            </div>
          </div>

          {/* Airbnb Embed */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-8 shadow-2xl w-full lg:w-1/2">
            <div
              className="airbnb-embed-frame"
              data-id="625517496214915194"
              data-view="home"
              style={{
                width: "100%",
                height: "300px",
                maxWidth: "450px",
                margin: "0 auto",
              }}
            >
              <a
                href="https://www.airbnb.com/h/lobolodge"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Airbnb
              </a>
              <a
                href="https://www.airbnb.com/h/lobolodge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cabin in Munds Park · ★4.94 · 3 bedrooms · 3 beds · 2 baths
              </a>
            </div>
          </div>

          {/* Right Stacked Cards */}
          <div className="flex flex-col gap-8 w-full lg:w-1/4">
            <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                {FaMapMarkerAlt({ className: "text-red-400 text-3xl" })}
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                Munds Park
              </h3>
              <p className="text-gray-300 text-center">Prime Location</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {FaBath({ className: "text-blue-400 text-2xl mr-3" })}
                <h3 className="text-xl font-semibold text-white">Bathrooms</h3>
              </div>
              <p className="text-gray-300">
                Two full bathrooms with modern fixtures, hot water, and premium
                toiletries provided.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {FaUsers({ className: "text-green-400 text-2xl mr-3" })}
                <h3 className="text-xl font-semibold text-white">
                  Guest Capacity
                </h3>
              </div>
              <p className="text-gray-300">
                Perfect for families or groups of up to 6 people, with flexible
                sleeping arrangements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="https://www.airbnb.com/h/lobolodge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300"
          >
            Book on Airbnb
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <p className="mt-4 text-gray-400">
            Instant booking available • Secure payment • 24/7 support
          </p>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Airbnb;
