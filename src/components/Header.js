import React from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderNav = () => {
  const [modal, showModal] = useState(true);

  return (
    <>
      <div className="header-top-container">
        <div className="app-title">
          <img
            src="https://thumbs.dreamstime.com/b/film-reel-icon-vid…movie-symbol-dark-background-simple-116780933.jpg"
            style={{
              width: "3rem",
            }}
          ></img>
          <h1> MediaCafe </h1>
          <span className="hamburger-icon">
            <GiHamburgerMenu
              onClick={() => showModal("block")}
            ></GiHamburgerMenu>
          </span>
        </div>

        <nav className="nav-links">
          <Link to="/" className="links-nav">
            Like
          </Link>
          <Link to="/" className="links-nav">
            History
          </Link>
          <Link to="/" className="links-nav">
            Playlist
          </Link>
          <Link to="/" className="links-nav">
            Watch later
          </Link>
        </nav>

        <article style={{ display: modal }}>
          Hy,User <button className="btn-login">Login</button>
        </article>
      </div>
      <div className="header-bottom-container">
        <div>
          <Link to="/" className="links-nav">
            Home
          </Link>
          <Link to="/" className="links-nav">
            Stocks
          </Link>
          <Link to="/" className="links-nav">
            TEDx
          </Link>
          <Link to="/" className="links-nav">
            Finance
          </Link>
          <Link to="/" className="links-nav">
            Crypto
          </Link>
        </div>
        <input placeholder="search your genre and videos " />
      </div>
    </>
  );
};

export default HeaderNav;
