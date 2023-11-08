import React from "react";

interface DateRange {
  available: boolean;
  date: string;
}

interface CalendarData {
  results: {
    abbr_name: string;
    name: string;
    day_names: string[];
    month: string;
    days: DateRange[];
  };
}

const Calendar: React.FC<CalendarData> = ({ results }) => {
  const calendarMonth = results.name;

  const days = results.days;
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="calendar">
      <div className="calender-month">
        <h2>{calendarMonth}</h2>
      </div>
      <ul className="day-names">
        {results.day_names.map((dayName, index) => (
          <li key={index} className="day-name">
            {dayName}
          </li>
        ))}
      </ul>

      <div className="days" role="grid">
        {days.map((dateRange) => (
          <div key={dateRange.date}>
            {dateRange.date.includes(results.month) && (
              <div
                className={dateRange.available ? "available" : "unavailable"}
              >
                {formattedDate === dateRange.date ? (
                  <span style={{ color: "red" }}>
                    {dateRange.date.split("-")[2]}
                  </span>
                ) : (
                  <span>{dateRange.date.split("-")[2]}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
