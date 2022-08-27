import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "../context/history-context";
const HistoryCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { historyDispatch } = useHistory();
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

        <div key={description}>
          <p key={title}>{title}</p>
          {description}
        </div>
        <span className="delete-icon">
          <AiFillDelete
            onClick={() =>
              historyDispatch({ type: "REMOVE_FROM_HISTORY", payload: _id })
            }
          ></AiFillDelete>{" "}
        </span>
      </div>
    </div>
  );
};

export default HistoryCard;
