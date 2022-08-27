import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { usePlaylist } from "../context/playlist-context";
const PlaylistCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { playlistDispatch } = usePlaylist();
  return (
    <div className="likepage-container">
      <div id="likepage-container-skin">
        <iframe
          title="Inline Frame Example"
          width="350"
          height="200"
          src={src}
          className="iframe-only"
          key="iframe_src"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div key={description}>
          {" "}
          <p key={title}>{title}</p>
          {description}
        </div>
        <span className="delete-icon">
          <AiFillDelete
            onClick={() =>
              playlistDispatch({ type: "REMOVE_FROM_PLAYLIST", payload: _id })
            }
          ></AiFillDelete>{" "}
        </span>
      </div>
    </div>
  );
};

export default PlaylistCard;
