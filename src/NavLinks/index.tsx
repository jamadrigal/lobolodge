import React from "react";

const NavLinks = () => {
  return (
    <div className="nav-links-container">
      <a
        className="link"
        href="https://www.mundspark.com/things-to-do"
        target="_blank"
        rel="noreferrer"
      >
        Munds Park
      </a>
      <a
        className="link"
        href="https://www.flagstaffarizona.org/things-to-do/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Flagstaff
      </a>
      <a
        className="link"
        href="https://visitsedona.com/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Sedona
      </a>
      <a
        className="link"
        href="https://www.nps.gov/grca/index.htm"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Grand Canyon
      </a>
      <a
        className="link"
        href="https://thedetoureffect.com/blog/roadside-attractions-northern-arizona/"
        target="_blank"
        rel="noreferrer"
      >
        Northern Arizona
      </a>
    </div>
  );
};

export default NavLinks;
