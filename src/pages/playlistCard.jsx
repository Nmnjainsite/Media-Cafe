import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { usePlaylist } from "../context/playlist-context";
import { Link } from "react-router-dom";
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
          <AiFillDelete
            className="delete-icon"
            onClick={() =>
              playlistDispatch({ type: "REMOVE_FROM_PLAYLIST", payload: _id })
            }
          ></AiFillDelete>{" "}
        </Link>

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
