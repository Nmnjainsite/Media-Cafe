import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { usePlaylist } from "../../context/playlist-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const PlaylistCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { playlistDispatch } = usePlaylist();

  return (
    <div className="likepage-container">
      <div id="likepage-container-skin">
        <Link to={`/product/${_id}`}>
          <img
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            width="360"
            className="img-cls"
          />{" "}
        </Link>
        <AiFillDelete
          className="delete-icon"
          onClick={() => {
            playlistDispatch({ type: "REMOVE_FROM_PLAYLIST", payload: _id });
            toast.success("Removed From Playlist !");
          }}
        ></AiFillDelete>{" "}
        <div key={description}>
          {" "}
          <p key={title}>{title}</p>
          {description}
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
