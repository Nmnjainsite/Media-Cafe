import React from "react";
import HeaderNav from "../components/Header";
import landingPageImg from "../assets/landing-page.jpg";
import "./LandingPage.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div>
      <section>
        <HeaderNav />
        <div className="landing-nav">
          <Link to="/home" className="explore-btn">
            Explore
          </Link>

          <img src={landingPageImg} alt=""></img>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
