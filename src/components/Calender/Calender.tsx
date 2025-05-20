import React, { useState, useEffect } from "react";
import { photos } from "../../data/images";
import { CalendarMonth } from "../../types/calendar";

interface CalendarProps {
  results: CalendarMonth[];
}

const Calendar: React.FC<CalendarProps> = ({ results }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [headerImage, setHeaderImage] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visibleMonths, setVisibleMonths] = useState(4);
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    // Get a random image from the photos array
    const randomIndex = Math.floor(Math.random() * photos.length);
    const selectedPhoto = photos[randomIndex];
    setHeaderImage(selectedPhoto.url);
  }, []);

  const handleDateClick = (date: string, month: string) => {
    if (date.includes(month)) {
      setSelectedDate(date);
    }
  };

  const handleLoadMore = () => {
    setVisibleMonths((prev) => prev + 2);
  };

  const hasMoreMonths = visibleMonths < results.length;

  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {results.slice(0, visibleMonths).map((monthData, index) => (
          <div
            key={index}
            className="h-full bg-white rounded-xl shadow-lg flex flex-col"
          >
            {/* Calendar Header */}
            <div className="relative h-24 md:h-28 lg:h-32 rounded-t-xl overflow-hidden">
              <img
                src={headerImage}
                alt="Calendar Header"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {monthData.name}
                </h2>
              </div>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-0.5 p-1 md:p-2 bg-gray-50">
              {monthData.day_names.map((dayName, index) => (
                <div
                  key={index}
                  className="text-center text-xs md:text-sm font-semibold text-gray-600 py-1 md:py-2"
                >
                  {dayName}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-0.5 p-1 md:p-2 flex-grow">
              {monthData.days.map((dateRange) => (
                <div
                  key={dateRange.date}
                  className="aspect-square relative group"
                >
                  {dateRange.date.includes(monthData.month) && (
                    <>
                      <button
                        onClick={() =>
                          handleDateClick(dateRange.date, monthData.month)
                        }
                        className={`w-full h-full rounded-lg flex items-center justify-center text-xs md:text-sm font-medium transition-all duration-200
                          ${
                            dateRange.available
                              ? selectedDate === dateRange.date
                                ? "bg-slate-500 text-white"
                                : "hover:bg-slate-200 text-gray-700"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }
                          ${
                            formattedDate === dateRange.date
                              ? "ring-2 ring-red-500"
                              : ""
                          }
                        `}
                        disabled={!dateRange.available}
                      >
                        {dateRange.date.split("-")[2]}
                      </button>
                      {/* Tooltip */}
                      {dateRange.available && (
                        <div className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          {dateRange.price.native_price_formatted}
                          <br />
                          Min stay: {dateRange.min_nights} nights
                          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="p-2 md:p-4 bg-gray-50 border-t rounded-b-xl">
              <div className="flex items-center justify-center space-x-2 md:space-x-4 text-xs md:text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-500 rounded-full mr-1 md:mr-2"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-100 rounded-full mr-1 md:mr-2"></div>
                  <span>Unavailable</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreMonths && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium"
          >
            Load More Months
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
