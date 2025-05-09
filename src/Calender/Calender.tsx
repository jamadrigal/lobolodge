import React, { useState } from "react";

interface DateRange {
  available: boolean;
  date: string;
  min_nights: number;
  max_nights: number;
}

interface CalendarData {
  results: {
    abbr_name: string;
    name: string;
    day_names: string[];
    month: string;
    days: DateRange[];
  };
  index: number;
}

const Calendar: React.FC<CalendarData> = ({ results }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const calendarMonth = results.name;
  const days = results.days;
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const handleDateClick = (date: string) => {
    if (date.includes(results.month)) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="h-full bg-white rounded-xl shadow-lg flex flex-col">
      {/* Calendar Header */}
      <div className="bg-slate-500 text-white p-4 rounded-t-xl">
        <h2 className="text-2xl font-bold text-center">{calendarMonth}</h2>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1 p-2 bg-gray-50">
        {results.day_names.map((dayName, index) => (
          <div
            key={index}
            className="text-center text-sm font-semibold text-gray-600 py-2"
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 p-2 flex-grow">
        {days.map((dateRange) => (
          <div key={dateRange.date} className="aspect-square relative group">
            {dateRange.date.includes(results.month) && (
              <>
                <button
                  onClick={() => handleDateClick(dateRange.date)}
                  className={`w-full h-full rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200
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
      <div className="p-4 bg-gray-50 border-t rounded-b-xl">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-slate-500 rounded-full mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-100 rounded-full mr-2"></div>
            <span>Unavailable</span>
          </div>
          {/* {index === 0 && (
            <div className="flex items-center">
              <div className="w-3 h-3 border-2 border-red-500 rounded-full mr-2"></div>
              <span>Today</span>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
