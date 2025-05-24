import React, { useState } from "react";

interface Activity {
  name: string;
  link: string;
}

interface Location {
  name: string;

  activities: {
    hikes: Activity[];
    food: Activity[];
    drinks: Activity[];
    shopping?: Activity[];
    other?: Activity[];
  };
}

const locations: Location[] = [
  {
    name: "Munds Park",
    activities: {
      hikes: [
        {
          name: "Crystal Point Trail - 6 mile loop (walking distance from cabin)",
          link: "https://www.alltrails.com/trail/us/arizona/crystal-point-trail",
        },
        {
          name: "Munds Canyon Trail - 3 mile loop (walking distance from cabin)",
          link: "https://www.alltrails.com/trail/us/arizona/munds-canyon-trail",
        },
      ],
      food: [
        {
          name: "Agee's BBQ - Great BBQ and Farmers Market on Saturdays",
          link: "https://www.ageesbbq.com/",
        },
        {
          name: "Kota Coffee - Great coffee and breakfast sandwiches",
          link: "https://www.facebook.com/kotascoffeemundsaz",
        },
      ],
      drinks: [
        {
          name: "Borracho - Live bands in summer",
          link: "https://www.borrachobars.com/",
        },
      ],
      other: [
        {
          name: "Enjoy sitting in the front deck taking in beautiful nature",
          link: "",
        },
      ],
    },
  },
  {
    name: "Flagstaff",

    activities: {
      hikes: [
        {
          name: "Aspen Loop (summer favorite)",
          link: "https://www.alltrails.com/trail/us/arizona/aspen-nature-lollipop-trail",
        },
        {
          name: "Humphreys Peak - Highest peak in Arizona",
          link: "https://www.alltrails.com/trail/us/arizona/humphreys-peak",
        },
      ],
      food: [
        {
          name: "Pizzicletta - Great pizza and beer",
          link: "https://www.pizzicletta.com/",
        },
        {
          name: "The Hoppy Monk - Great beer and food",
          link: "https://www.thehoppymonk.com/",
        },
        {
          name: "The Toasted Owl Cafe - Great breakfast and lunch",
          link: "https://www.tripadvisor.com/Restaurant_Review-g60971-d4909110-Reviews-The_Toasted_Owl_Cafe-Flagstaff_Arizona.html",
        },
      ],
      drinks: [
        {
          name: "Motel Vista - Vintage hotel with great drinks",
          link: "https://hotelmontevista.com/",
        },
      ],
    },
  },
  {
    name: "Sedona",
    activities: {
      hikes: [
        {
          name: "Bear Mountain Trail - Hard hike but worth the views",
          link: "https://www.alltrails.com/trail/us/arizona/bear-mountain",
        },
        {
          name: "West Fork Trail - Make sure you get there early for parking",
          link: "https://www.alltrails.com/trail/us/arizona/west-fork-trail",
        },
      ],
      food: [
        {
          name: "Mariposa - Great ambiance and views of red rocks",
          link: "https://www.mariposasedona.com/",
        },
      ],
      drinks: [
        {
          name: "Oak Creek Brewery - Great beer and food",
          link: "https://oakcreekbreweryandgrill.com/",
        },
        {
          name: "The Red Wall - Great drinks and live music",
          link: "https://redwalllounge.com/",
        },
      ],
      shopping: [
        {
          name: "Tlaquepaque - Shopping for gems and other fun things",
          link: "https://www.tlaq.com/",
        },
      ],
    },
  },
  {
    name: "Grand Canyon",

    activities: {
      hikes: [
        {
          name: "Bright Angels Trail - Full day hike, definitely worth it",
          link: "https://www.nps.gov/places/000/bright-angel-trail.htm",
        },
        {
          name: "South Kaibab Trail - Shorter hike, quick views of the canyon",
          link: "https://www.alltrails.com/trail/us/arizona/south-kaibab-trail-to-ooh-aah-point",
        },
      ],
      food: [
        {
          name: "El Tovar Dining Room and Lounge - Great food and views",
          link: "https://www.grandcanyonlodges.com/dine/el-tovar-dining-room-and-lounge/",
        },
      ],
      drinks: [
        {
          name: "Grand Canyon Lodge - Great food and views",
          link: "https://www.grandcanyonlodge.com/",
        },
      ],
      other: [
        {
          name: "Plan for a full day of exploration",
          link: "https://www.nps.gov/grca/planyourvisit/index.htm",
        },
      ],
    },
  },
  {
    name: "Page",
    activities: {
      hikes: [
        {
          name: "Horseshoe Bend",
          link: "https://www.nps.gov/glca/planyourvisit/horseshoe-bend.htm",
        },
      ],
      food: [
        {
          name: "Sunset 89 - Great food and views",
          link: "https://www.sunset89.com/ ",
        },
      ],
      drinks: [],
      other: [
        {
          name: "Antelope Canyon (reservations required)",
          link: "https://www.navajonationparks.org/tribal-parks/antelope-canyon/",
        },
        {
          name: "Kayaking - Can end up at Horseshoe Bend for a different perspective",
          link: "https://www.lakepowell.com/things-to-do/kayaking/",
        },
      ],
    },
  },
  {
    name: "Northern Arizona",
    activities: {
      hikes: [
        {
          name: "Lava Tubes - Great for a day trip",
          link: "https://www.flagstaff.com/lava-tubes",
        },
      ],
      food: [],
      drinks: [
        {
          name: "Page Springs Cellar - Great wine and views",
          link: "https://pagespringscellars.com/",
        },
        {
          name: "Javalina Leap Winery - Great wine and views",
          link: "https://www.javelinaleapwinery.com/",
        },
        {
          name: "Daranch - Great food and views",
          link: "https://daranch.com/",
        },
      ],
      other: [
        {
          name: "Sunset Crater Volcano National Monument",
          link: "https://www.nps.gov/sucr/index.htm",
        },
        {
          name: "Wupatki National Monument",
          link: "https://www.nps.gov/wupa/index.htm",
        },
        {
          name: "Williams, AZ - Great place to eat and shop",
          link: "https://experiencewilliams.com/",
        },
      ],
    },
  },
];

const ThingsWeDo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const openModal = (location: Location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Things We Do
          </h2>
          <p className="mt-4 text-lg text-white">
            Our favorite activities and recommendations for each location
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {location.name}
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => openModal(location)}
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200"
                  >
                    View Activities
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedLocation.name}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {selectedLocation.activities.hikes.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Hikes
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedLocation.activities.hikes.map((hike, index) => (
                        <li key={index} className="text-gray-300">
                          {hike.link ? (
                            <a
                              href={hike.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white underline"
                            >
                              {hike.name}
                            </a>
                          ) : (
                            hike.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLocation.activities.food.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Food
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedLocation.activities.food.map((food, index) => (
                        <li key={index} className="text-gray-300">
                          {food.link ? (
                            <a
                              href={food.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white underline"
                            >
                              {food.name}
                            </a>
                          ) : (
                            food.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLocation.activities.drinks.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Drinks
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedLocation.activities.drinks.map(
                        (drink, index) => (
                          <li key={index} className="text-gray-300">
                            {drink.link ? (
                              <a
                                href={drink.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white underline"
                              >
                                {drink.name}
                              </a>
                            ) : (
                              drink.name
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {selectedLocation.activities.shopping && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Shopping
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedLocation.activities.shopping.map(
                        (shop, index) => (
                          <li key={index} className="text-gray-300">
                            {shop.link ? (
                              <a
                                href={shop.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white underline"
                              >
                                {shop.name}
                              </a>
                            ) : (
                              shop.name
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {selectedLocation.activities.other && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Other Activities
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedLocation.activities.other.map(
                        (activity, index) => (
                          <li key={index} className="text-gray-300">
                            {activity.link ? (
                              <a
                                href={activity.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white underline"
                              >
                                {activity.name}
                              </a>
                            ) : (
                              activity.name
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThingsWeDo;
