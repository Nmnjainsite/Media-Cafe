import React from "react";
import HeaderNav from "../../components/Nav/HeaderNav";
import "./LandingPage.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <section>
      <HeaderNav />
      <div className="landing-nav">
        <div>
          <h1 className="landing-tagline">
            <span style={{ color: "turquoise" }}>Organize </span>all of your
            company’s videos.
          </h1>

          <p className="description-landing">
            Video Library is where teams can organize, share, and find the
            videos that help them work smarter.
          </p>
          <Link to="/home" className="explore-btn">
            Explore
          </Link>
        </div>

        <img
          src="https://i.vimeocdn.com/custom_asset/2208?w=696&q=60"
          alt=""
          className="landing-img"
        ></img>
      </div>

      <Footer />
    </section>
  );
}

export default LandingPage;
