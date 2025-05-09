import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Images from "./components/Images";
import Calendar from "./components/Calender";
import Airbnb from "./components/Airbnb";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThingsToDo from "./components/ThingsToDo";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Images />
          <Calendar />
          <Airbnb />
          <ThingsToDo />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
