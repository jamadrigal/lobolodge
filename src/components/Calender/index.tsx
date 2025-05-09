import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "./Calender";
import Divider from "../Divider";
import { CalendarMonth } from "../../types/calendar";

const CalenderComponent: React.FC = () => {
  const [data, setData] = useState<CalendarMonth[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if we have cached data
        const cachedData = localStorage.getItem("calendarData");
        const cachedTimestamp = localStorage.getItem("calendarDataTimestamp");

        // If we have cached data and it's less than 24 hours old, use it
        if (cachedData && cachedTimestamp) {
          const now = new Date().getTime();
          const cacheAge = now - parseInt(cachedTimestamp);
          const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

          if (cacheAge < ONE_DAY) {
            setData(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }

        const year = new Date().getFullYear();
        const options = {
          method: "GET",
          url: "https://airbnb13.p.rapidapi.com/calendar",
          params: {
            room_id: "625517496214915194",
            currency: "USD",
            year: year.toString(),
            count: "4",
          },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
            "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
          },
        };

        const response = await axios(options);
        const newData = response.data.results.calendar_months;

        // Save to local storage with timestamp
        localStorage.setItem("calendarData", JSON.stringify(newData));
        localStorage.setItem(
          "calendarDataTimestamp",
          new Date().getTime().toString()
        );

        setData(newData);
      } catch (error) {
        console.error("Error fetching calendar data:", error);
        setError("Unable to load calendar data. Please try again later.");

        // If there's an error and we have cached data, use it regardless of age
        const cachedData = localStorage.getItem("calendarData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="calendar" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Availability Calendar
        </h2>

        {loading && (
          <div className="text-center text-gray-300 mb-8">
            Loading calendar data...
          </div>
        )}

        {error && <div className="text-center text-red-400 mb-8">{error}</div>}

        {!loading && !error && data.length === 0 && (
          <div className="text-center text-gray-300 mb-8">
            No calendar data available
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((r, index) => (
            <Calendar key={`${r.month}`} results={r} index={index} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default CalenderComponent;
