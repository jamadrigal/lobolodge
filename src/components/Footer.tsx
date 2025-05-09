import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://a0.muscache.com/im/pictures/hosting/Hosting-625517496214915194/original/bac7dbf8-0777-4146-ba43-ea83621e2aa9.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="text-gray-300">Email: lobolodge1395@gmail.com</p>
            <p className="text-gray-300">Phone: (623) 889-1125</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#photos"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  href="#calendar"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#airbnb"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Airbnb
                </a>
              </li>
              <li>
                <a
                  href="#things-to-do"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Things to Do
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Location</h3>
            <p className="text-gray-300">Munds Park, Arizona</p>
            <p className="text-gray-300">United States</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lobo Lodge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
