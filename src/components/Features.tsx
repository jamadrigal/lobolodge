import React, { useState } from "react";
import { amenities } from "../data/amenites";
import Divider from "./Divider";

const Features: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            About this space
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Relax with the family at this mountain A-frame cabin. Mountain
            enjoyment throughout the summer to escape the heat, get lost in the
            woods, visit the many sights, and relax. Also, a fantastic winter
            spot to enjoy skiing and playing in the snow. (More than one dog
            please inquire direct)
          </p>
          <p className="text-lg text-gray-300 mb-8">
            2 bedrooms and a loft bed. Can sleep 6 people with 2 full bathrooms,
            a well-equipped kitchen and wood stove with wood included. Deck on
            the front and back with a gas BBQ. Close to amazing Arizona parks
            and hikes.
          </p>
        </div>

        {/* The Space Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">The space</h3>
          <p className="text-lg text-gray-300 mb-6">
            This is a fantastic, A frame property. We are in the process of
            doing some upgrading to the lodge. The sleeping situation is 3 beds
            in total, one king and two queens. We will have an extra twin pull
            out bed if this is requested.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            We do allow one dog on property and ask you please pick up after
            your furry friend; please reach out direct to prescreen if you have
            more than one pet and we will consider. Failure to do so and
            sneaking a pet on the property will result in eviction.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Most people come to Munds Park to enjoy the decks, visit Sedona,
            Flagstaff, the Grand Canyon, or the miles of amazing hiking.
          </p>
          <p className="text-lg text-gray-300">
            Feel free to use one of our cheeseboards, the wood stove, BBQ, front
            and back decks, books, our supply of board games and puzzles, and
            enjoy the fresh air.
          </p>
        </div>

        {/* Guest Access Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Guest access</h3>
          <p className="text-lg text-gray-300">
            Entire Property minus our garage.
          </p>
        </div>

        {/* Other Notes Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Other things to note
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            There is a fireplace on property in addition to an outdoor fire pit.
            Feel free to use the fireplace as it makes the cabin very cozy and
            warm. No smoking on property.
          </p>
          <p className="text-lg text-gray-300">
            We currently allow a small dog under 50 lbs (must pay pet fee.) If
            your furry friend or friends are outside of the guidelines please
            gain permission in advance to discuss the pet fee.
          </p>
        </div>

        {/* Amenities Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            What this place offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {Object.entries(amenities)
              .slice(0, 4)
              .map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <h4 className="font-semibold text-white">{category}</h4>
                  <ul className="space-y-1">
                    {items.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg
                          className="h-5 w-5 text-green-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
          >
            Show all amenities
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                What this place offers
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(amenities).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="font-semibold text-white text-lg">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg
                          className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Divider />
    </section>
  );
};

export default Features;
