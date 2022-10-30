import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import PlainNav from "../../components/Nav/PlainNav";
import "./signup.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/auth/signup`,
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
      );
      // saving the encodedToken in the localStorage
      if (firstName === "") {
        toast.error("Please Fill The Details");
      } else {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("firstName", lastName);
        navigate("/login");
        console.log(response);
        toast.success("Sign Up Successfully");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Sign Up Failed");
    }
  };

  const guestSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/auth/signup`,
        JSON.stringify({
          firstName: "Guest",
          lastName: "Guest",
          email: "guest123@gmail.com",
          password: "guest@!2",
        })
      );
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/login");
      console.log(response);
      toast.success("Sign Up As Guest Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Sign Up As Guest Failed");
    }
  };
  return (
    <>
      <PlainNav />
      <section className="signup-box">
        <h1 className="signup-h1">Signup</h1>

        <input
          className="input-signup"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="input-signup"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="input-signup"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-signup"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signup-btn-box">
          <button onClick={(e) => onSubmit(e)} className="signup-btn">
            Sign Up
          </button>
          <button onClick={(e) => guestSignUp(e)} className="signup-btn">
            Sign As Guest
          </button>
        </div>
        <p style={{ color: "white" }}>Already Have An Account?</p>
        <Link to="/login" className="login-link-button">
          Login
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
