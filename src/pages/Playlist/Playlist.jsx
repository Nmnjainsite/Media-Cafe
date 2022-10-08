import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePlaylist } from "../../context/playlist-context";
import HeaderNav from "../../components/Nav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import VideoStore from "../../components/VideoStore";
import "./Playlist.css";
const Playlist = () => {
  const { playlistId } = useParams();
  const { playlists } = usePlaylist();
  console.log(playlists);
  const playlistToRender = playlists.find((obj) => obj._id === playlistId);
  console.log(playlistToRender);
  const navigate = useNavigate();
  return (
    <div>
      <HeaderNav />
      <div className="playlist-container">
        {playlistId &&
          playlistToRender.videos.map((videos) => (
            <div>
              <VideoStore videos={videos} />
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Playlist;
