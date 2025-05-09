import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaAirbnb } from "react-icons/fa";
import Divider from "./Divider";

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const contactMethods = [
    {
      id: "email",
      icon: FaEnvelope({ className: "text-3xl" }),
      title: "Email",
      value: "lobolodge1395@gmail.com",
      link: "mailto:lobolodge1395@gmail.com",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
    },
    {
      id: "phone",
      icon: FaPhone({ className: "text-3xl" }),
      title: "Phone",
      value: "(623) 889-1125",
      link: "tel:+16238891125",
      color: "text-green-400",
      hoverColor: "hover:text-green-300",
    },
    {
      id: "location",
      icon: FaMapMarkerAlt({ className: "text-3xl" }),
      title: "Location",
      value: "Munds Park, Arizona",
      link: "https://maps.google.com/?q=Munds+Park,+Arizona",
      color: "text-red-400",
      hoverColor: "hover:text-red-300",
    },
    {
      id: "airbnb",
      icon: FaAirbnb({ className: "text-3xl" }),
      title: "Airbnb",
      value: "Book on Airbnb",
      link: "https://www.airbnb.com/h/lobolodge",
      color: "text-pink-400",
      hoverColor: "hover:text-pink-300",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about your stay? We're here to help make your
            mountain getaway perfect.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target={
                method.id === "airbnb" || method.id === "location"
                  ? "_blank"
                  : undefined
              }
              rel={
                method.id === "airbnb" || method.id === "location"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group"
              onMouseEnter={() => setIsHovered(method.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="bg-gray-800 rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div
                  className={`${
                    method.color
                  } mb-4 transition-transform duration-300 ${
                    isHovered === method.id ? "scale-110" : ""
                  }`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {method.title}
                </h3>
                <p
                  className={`text-gray-300 ${method.hoverColor} transition-colors duration-300`}
                >
                  {method.value}
                </p>
                <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {method.id === "location" ? (
                    <span className="mr-2">Click see location.</span>
                  ) : (
                    <span className="mr-2">
                      Click to {method.id === "airbnb" ? "book" : "contact"}
                    </span>
                  )}

                  <svg
                    className="w-4 h-4"
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
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">We typically respond within 24 hours</p>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Contact;
