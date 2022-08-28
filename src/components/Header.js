import React from "react";
import "./HeaderNav.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLike } from "../context/like-context";
import { usePlaylist } from "../context/playlist-context";
import { useWatch } from "../context/watchLater-context";
import { useAuth } from "../context/auth-context";
const HeaderNav = () => {
  const [modal, showModal] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const {
    likeState: { likeItem },
  } = useLike();
  const {
    playlistState: { playlistItem },
  } = usePlaylist();
  const {
    watchState: { watchItem },
  } = useWatch();
  const navigate = useNavigate;
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
          <Link to="/" className="title">
            <h1> MediaCafe </h1>
          </Link>

          <span className="hamburger-icon">
            <GiHamburgerMenu
              onClick={() => showModal("block")}
            ></GiHamburgerMenu>
          </span>
        </div>

        <nav className="nav-links">
          <Link to="/likepage" className="links-nav">
            Like <small className="length-value">{likeItem.length}</small>
          </Link>

          <Link to="/playlistpage" className="links-nav">
            Playlist
            <small className="length-value-playlist">
              {playlistItem.length}{" "}
            </small>
          </Link>
          <Link to="/watchpage" className="links-nav">
            Watch later{" "}
            <small className="length-value-watch">{watchItem.length}</small>
          </Link>
          <Link to="/historypage" className="links-nav">
            History
          </Link>
        </nav>

        <article style={{ display: modal }}>
          Hy,User{" "}
          <button className="btn-login">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </article>
      </div>
    </>
  );
};

export default HeaderNav;
