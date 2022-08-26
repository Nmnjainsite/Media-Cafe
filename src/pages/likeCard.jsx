import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useLike } from "../context/like-context";
const LikeCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { likeDispatch } = useLike();
  return (
    <div className="likepage-container">
      <div id="likepage-container-skin">
        <iframe
          title="Inline Frame Example"
          width="350"
          height="200"
          src={src}
          key="iframe_src"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <p key={description}>
          {" "}
          <p key={title}>{title}</p>
          {description}
        </p>
        <span className="delete-icon">
          <AiFillDelete
            onClick={() =>
              likeDispatch({ type: "REMOVE_FROM_LIKE", payload: _id })
            }
          ></AiFillDelete>{" "}
        </span>
      </div>
    </div>
  );
};

export default LikeCard;
