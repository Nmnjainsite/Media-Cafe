import React from "react";
import "./HeaderNav.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLike } from "../../context/like-context";
import { usePlaylist } from "../../context/playlist-context";
import { useWatch } from "../../context/watchLater-context";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
const HeaderNav = () => {
  const [modal, showModal] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const {
    likeState: { likeItem },
  } = useLike();
  const { playlists } = usePlaylist();
  const {
    watchState: { watchItem },
  } = useWatch();
  const navigate = useNavigate();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "turquoise" : "",
    borderBottom: isActive ? "2px solid grey" : "",
  });

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
          <Link to="/" className="header-title">
            <h1> MediaCafe </h1>
          </Link>

          <span className="hamburger-icon">
            <GiHamburgerMenu
              onClick={() => showModal("block")}
            ></GiHamburgerMenu>
          </span>
        </div>

        <nav className="nav-links">
          <NavLink to="/like" className="links-nav" style={getActiveStyle}>
            Like <small className="length-value">{likeItem.length}</small>
          </NavLink>
          <NavLink to="/playlist" className="links-nav" style={getActiveStyle}>
            Playlist
            <small className="length-value-playlist">
              {playlists && playlists.length}{" "}
            </small>
          </NavLink>
          <NavLink to="/watch" className="links-nav" style={getActiveStyle}>
            Watch later{" "}
            <small className="length-value-watch">{watchItem.length}</small>
          </NavLink>
          <NavLink to="/history" className="links-nav" style={getActiveStyle}>
            History
          </NavLink>
        </nav>

        <article style={{ display: modal }}>
          <span>Hy,{isLoggedIn.isAuth ? isLoggedIn.username : "User"}</span>

          <button
            className="btn-login"
            onClick={() => {
              if (isLoggedIn.token) {
                setIsLoggedIn((login) => !isLoggedIn.isAuth);
                navigate("/");
                localStorage.removeItem("token");
                toast.success("Logout Successfully");
              } else {
                navigate("/login");
              }
            }}
          >
            {isLoggedIn.isAuth ? "Logout" : "Login"}
          </button>
        </article>
      </div>
    </>
  );
};

export default HeaderNav;
