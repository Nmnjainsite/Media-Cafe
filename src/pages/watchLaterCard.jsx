import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useWatch } from "../context/watchLater-context";

const WatchCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { watchDispatch } = useWatch();
  return (
    <>
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
                watchDispatch({ type: "REMOVE_FROM_WATCH", payload: _id })
              }
            ></AiFillDelete>{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default WatchCard;
