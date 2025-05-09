import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "./Calender";
import Divider from "../Divider";

interface Price {
  date: string;
  is_price_upon_request: null;
  local_adjusted_price: null;
  local_currency: null;
  local_price: null;
  native_adjusted_price: number;
  native_currency: string;
  native_price: number;
  type: string;
  local_price_formatted: string;
}

interface CalendarData {
  available: boolean;
  date: string;
  available_for_checkin: boolean;
  min_nights: number;
  max_nights: number;
  price: Price;
}

interface CalendarMonth {
  abbr_name: string;
  name: string;
  day_names: string[];
  month: string;
  dynamic_pricing_updated_at: string;
  listing_id: number;
  year: number;
  days: CalendarData[];
}

const CalenderComponent: React.FC = () => {
  const [data, setData] = useState<CalendarMonth[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
            return;
          }
        }

        const year = new Date().getFullYear();
        const options = {
          method: "get",
          url: "https://airbnb13.p.rapidapi.com/calendar",
          params: {
            room_id: "625517496214915194",
            currency: "USD",
            year,
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
        // If there's an error and we have cached data, use it regardless of age
        const cachedData = localStorage.getItem("calendarData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
        }
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
