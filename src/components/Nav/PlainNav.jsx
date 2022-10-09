import React from "react";
import "./PlainNav.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const PlainNav = () => {
  const [modal, showModal] = useState(true);
  return (
    <>
      <div className="header-top-container-2">
        <div className="app-title">
          <img
            src="https://thumbs.dreamstime.com/b/film-reel-icon-vid…movie-symbol-dark-background-simple-116780933.jpg"
            style={{
              width: "3rem",
            }}
          ></img>

          <h1 className="header-title">MediaCafe</h1>

          <span className="hamburger-icon">
            <GiHamburgerMenu
              onClick={() => showModal("block")}
            ></GiHamburgerMenu>
          </span>
        </div>
      </div>
    </>
  );
};

export default PlainNav;
