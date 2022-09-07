import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <p>
          {" "}
          © MediaCafe 2022. All rights reserved. Site - Managed by Naman Jain .
        </p>

        <a href="https://github.com/Nmnjainsite">
          <AiFillGithub></AiFillGithub>
        </a>

        <a href="https://twitter.com/NamanJa83726591">
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </a>
        <a href="https://www.linkedin.com/in/naman-jain-97382b231/">
          <ImLinkedin></ImLinkedin>
        </a>
        <a href="https://www.instagram.com/namanjain_321/">
          <AiFillInstagram></AiFillInstagram>
        </a>
      </footer>
    </>
  );
};

export default Footer;
