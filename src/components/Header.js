import React from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useFilter } from "../context/filter-context";

const HeaderNav = () => {
  const [modal, showModal] = useState(true);
  const [{ state, category, serachValue }, dispatch] = useFilter();

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
          <Link to="/likepage" className="links-nav">
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
          <span
            className="links-nav"
            onClick={() => dispatch({ type: "FITER_BY_HOME" })}
          >
            Home
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({
                type: "FITER_BY_CATEGORY",
                payload: "FILTER_BY_CODING",
              })
            }
          >
            Coding
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({
                type: "FITER_BY_CATEGORY",
                payload: "FILTER_BY_FINANCE",
              })
            }
          >
            Finance
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({ type: "FITER_BY_CATEGORY", payload: "FILTER_BY_TED" })
            }
          >
            TEDx
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({
                type: "FITER_BY_CATEGORY",
                payload: "FILTER_BY_VIDEOGRAPHY",
              })
            }
          >
            Videography
          </span>
        </div>
        <input
          placeholder="search your genre and videos "
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })
          }
        />
      </div>
    </>
  );
};

export default HeaderNav;
