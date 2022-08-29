import React from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import authImg from "../assets/auth-img.svg";
import { useState } from "react";
import HeaderNav from "../components/Header";
import Footer from "../components/Footer";
const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [passwordCheck, setSize] = useState("");
  const [answer, setAnswer] = useState(false);
  // const [checkEmail, setEmail] = useState("");

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function changeText(event) {
    const userInput = event.target.value;
    setUserInput(userInput);
    setAnswer(false);
  }

  function checkPassword(event) {
    const passwordCheck = event.target.value;
    setAnswer(false);
    setSize(passwordCheck);
  }

  // function emailHandler(event) {
  //   const checkEmail = event.target.value;
  //   setAnswer(false);
  //   setEmail(checkEmail);
  // }

  // function changeTo() {
  //   if (checkEmail === userInput) {
  //
  //   } else {
  //     setAnswer(true);
  //   }
  // }

  function changeTo() {
    if (userInput === "6546") {
      navigate("/home");
    } else {
      setUserInput("");
      setAnswer(true);
    }
  }
  function changeTo() {
    if (passwordCheck === "4242") {
      navigate("/home");
    } else {
      setSize("");
      setAnswer(true);
    }
  }

  return (
    <>
      <section>
        <HeaderNav />

        <div className="login-container">
          <div className="login-box">
            <div className="login-col-1">
              <h1>Log In.</h1>
              <p style={{ color: "grey" }}>
                Enter your Credentials to access your account
              </p>

              <button className="login-google">
                <span
                  style={{
                    margin: "0.7rem",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                >
                  G+
                </span>{" "}
                Login With Google
              </button>
            </div>

            <div className="email-box">
              <div style={{ marginTop: "0.8rem" }}>E-mail</div>
              <input
                placeholder="Enter your email"
                onChange={checkPassword}
              ></input>

              <div>
                <span>Password </span>
                <small className="forgot-pass"> Forgot Password?</small>
              </div>
              <input
                placeholder="Enter your password"
                type="password"
                onChange={changeText}
              ></input>
            </div>

            <div>
              <button className="login-button" onClick={changeTo}>
                Login
              </button>

              <button
                className="login-button-2"
                onClick={() => {
                  setIsLoggedIn((login) => !isLoggedIn);
                  navigate("/home", {
                    replace: true,
                  });
                }}
              >
                {isLoggedIn ? "Logout" : "Login As Guest"}
              </button>
            </div>
            {answer && <p>Wrong Attempt!</p>}
            <p>
              Not a Member?
              <Link
                to="/SignUp"
                style={{ color: "red", textDecoration: "none" }}
              >
                SignUp
              </Link>
            </p>
          </div>
          <img src={authImg} className="auth-img"></img>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Login;
