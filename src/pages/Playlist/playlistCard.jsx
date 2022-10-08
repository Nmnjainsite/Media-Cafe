import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { usePlaylist } from "../../context/playlist-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
import axios from "axios";
import "./Playlist.css";
const PlaylistCard = ({ playlist }) => {
  const { setPlaylists } = usePlaylist();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const deletePlaylist = async (id) => {
    const header = { authorization: isLoggedIn.token };
    try {
      const response = await axios.delete("/api/user/playlists/" + id, {
        headers: header,
      });
      console.log(response);
      setPlaylists(response.data.playlists);
      toast.success("Deleted Successfully");
    } catch (err) {
      toast.error("Not Deleted");
    }
  };
  return (
    <div key={playlist._id} className="playlist-card">
      <div className="playlistcard-skin">
        <img
          className="playlistcard-img"
          onClick={() => navigate(`/playlist/${playlist._id}`)}
          src="https://i.ytimg.com/vi/yY-ND9eXPG0/maxresdefault.jpg"
        ></img>
        <AiFillDelete
          className="delete-icon"
          onClick={() => deletePlaylist(playlist._id)}
        ></AiFillDelete>
        <div className="playlistcard-typo">
          {" "}
          <p style={{ fontSize: "1.5rem", width: "100%" }}>
            Title: {playlist.title}
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              width: "100%",
            }}
          >
            Description:{" "}
            <span style={{ fontSize: "1rem" }}>{playlist.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
