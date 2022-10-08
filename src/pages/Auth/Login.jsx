import React from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import Footer from "../../components/Footer/Footer";
import PlainNav from "../../components/Nav/PlainNav";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import authImg from "../../assets/auth-img.svg";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      if (response.data.encodedToken) {
        localStorage.setItem("token", response.data.encodedToken);
        navigate("/");
        console.log(response.data.foundUser.firstName);
        setIsLoggedIn(() => ({
          token: response.data.encodedToken,
          username: response.data.foundUser.firstName,
          isAuth: true,
        }));
        toast.success("Login Successfully");
      } else {
        toast.error("Please Fill The Details");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };
  const guestLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "guest123@gmail.com",
        password: "guest@!2",
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      console.log(response.data.foundUser.firstName);
      setIsLoggedIn(() => ({
        token: response.data.encodedToken,
        username: response.data.foundUser.firstName,
        isAuth: true,
      }));
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  return (
    <>
      <section>
        <PlainNav />

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
                </span>
                Login With Google
              </button>
            </div>

            <div className="email-box">
              <div
                style={{
                  marginTop: "0.8rem",
                  marginLeft: "2.5rem",
                  fontSize: "1.5rem",
                }}
              >
                E-mail
              </div>
              <input
                className="input-login"
                placeholder="abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <div className="password">
                <span>Password </span>
              </div>
              <input
                className="input-login"
                placeholder=" user password"
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <div>
              <button className="login-button" onClick={(e) => onSubmit(e)}>
                Login
              </button>

              <button className="login-button-2" onClick={(e) => guestLogin(e)}>
                Login As Guest
              </button>
            </div>
            <p>
              Not a Member?
              <Link
                to="/SignUp"
                style={{ color: "green", textDecoration: "none" }}
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
}

export default Login;
