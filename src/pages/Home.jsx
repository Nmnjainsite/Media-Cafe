import React from "react";
import HeaderNav from "../components/Header";
import { videos } from "../backend/db/videos";
import "./Home.css";
const Home = () => {
  return (
    <>
      <HeaderNav />

      {videos.map((video) => (
        <div>
          <li style={{ listStyle: "none" }}>
            <div className="video-container">
              <iframe
                width="360"
                height="215"
                src={video.src}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                <p>{video.title}</p>
                {video.description}
              </p>
            </div>
          </li>
        </div>
      ))}
    </>
  );
};

export default Home;
