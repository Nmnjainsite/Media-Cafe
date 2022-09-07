import React from "react";
import { Link } from "react-router-dom";
import Error404 from "../../assets/error404.svg";
import HeaderNav from "../../components/Nav/HeaderNav";
const NotFound = () => {
  return (
    <>
      <div>
        <HeaderNav />
        <div>
          {" "}
          <h1 style={{ fontSize: "3rem" }}>
            <span style={{ color: "red" }}>Oops !! </span>
            Looks like you came to wrong page !
          </h1>
          <Link to="/" className="explore-btn">
            Back To Home
          </Link>
        </div>

        <img src={Error404} style={{ width: "50%", marginTop: "2rem" }}></img>
      </div>
    </>
  );
};

export default NotFound;
