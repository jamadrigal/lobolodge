import React from "react";
import logo from "./logo.svg";
import { Helmet } from "react-helmet";
import CalenderComponent from "./Calender";
import Images from "./Images";
import NavLinks from "./NavLinks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lobo Lodge - A Frame</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Escape to the Tranquil A-Frame Retreat in the Enchanting Woods of Munds Park"
        ></meta>
      </Helmet>
      <header className="app-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Lobo Lodge</h1>
      </header>
      <NavLinks />
      <Images />
      <CalenderComponent />
    </div>
  );
}

export default App;
