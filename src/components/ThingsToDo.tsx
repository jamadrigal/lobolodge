import React from "react";
import {
  FaMapMarkerAlt,
  FaHiking,
  FaCamera,
  FaShoppingBag,
  FaMountain,
  FaRoute,
} from "react-icons/fa";
import Divider from "./Divider";
import ThingsWeDo from "./ThingsWeDo/ThingsWeDo";

interface LocationCard {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const locations: LocationCard[] = [
  {
    title: "Munds Park",
    description:
      "Explore the beautiful pine forests, hiking trails, and local attractions in this charming mountain community.",
    link: "https://www.mundspark.com/things-to-do",
    icon: FaMapMarkerAlt({ className: "text-3xl" }),
    color: "text-green-400",
  },
  {
    title: "Flagstaff",
    description:
      "Discover historic Route 66, Lowell Observatory, and the vibrant downtown scene in Arizona's mountain town.",
    link: "https://www.flagstaffarizona.org/things-to-do/",
    icon: FaMountain({ className: "text-3xl" }),
    color: "text-blue-400",
  },
  {
    title: "Sedona",
    description:
      "Experience the stunning red rock formations, spiritual vortexes, and world-class hiking trails.",
    link: "https://visitsedona.com/",
    icon: FaHiking({ className: "text-3xl" }),
    color: "text-red-400",
  },
  {
    title: "Grand Canyon",
    description:
      "Visit one of the world's natural wonders, offering breathtaking views and unforgettable experiences.",
    link: "https://www.nps.gov/grca/index.htm",
    icon: FaCamera({ className: "text-3xl" }),
    color: "text-orange-400",
  },
  {
    title: "Northern Arizona",
    description:
      "Explore unique roadside attractions, local eateries, and hidden gems throughout the region.",
    link: "https://thedetoureffect.com/blog/roadside-attractions-northern-arizona/",
    icon: FaShoppingBag({ className: "text-3xl" }),
    color: "text-purple-400",
  },
  {
    title: "Page",
    description:
      "Explore a gateway to the breathtaking beauty of the Southwest.",
    link: "https://www.visitpageaz.com/",
    icon: FaRoute({ className: "text-3xl" }),
    color: "text-yellow-400",
  },
];

const ThingsToDo: React.FC = () => {
  return (
    <section id="things-to-do" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore the Area
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the best attractions and activities in Northern Arizona,
            from the majestic Grand Canyon to the charming mountain towns.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-800 rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`${location.color} mb-4`}>{location.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {location.title}
                </h3>
                <p className="text-gray-300">{location.description}</p>
                <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Learn more</span>
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
          <p className="text-gray-400">
            All attractions are within a 2-hour drive from Lobo Lodge
          </p>
        </div>
      </div>
      <Divider />
      <ThingsWeDo />
      <Divider />
    </section>
  );
};

export default ThingsToDo;
