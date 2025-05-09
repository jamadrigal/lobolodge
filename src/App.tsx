import React, { useEffect } from "react";
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
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason);
      event.preventDefault();
    };

    // Handle runtime errors
    const handleError = (event: ErrorEvent) => {
      console.error("Runtime error:", event.error);
      event.preventDefault();
    };

    // Add event listeners
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    // Cleanup
    return () => {
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <main>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
              <Features />
            </ErrorBoundary>
            <ErrorBoundary>
              <Images />
            </ErrorBoundary>
            <ErrorBoundary>
              <Calendar />
            </ErrorBoundary>
            <ErrorBoundary>
              <Airbnb />
            </ErrorBoundary>
            <ErrorBoundary>
              <ThingsToDo />
            </ErrorBoundary>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
