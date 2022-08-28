import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "../context/history-context";
import { Link } from "react-router-dom";
const HistoryCard = ({ videos }) => {
  const { _id, title, description } = videos;
  const { historyDispatch } = useHistory();
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
              historyDispatch({ type: "REMOVE_FROM_HISTORY", payload: _id })
            }
          ></AiFillDelete>{" "}
        </Link>

        <div key={description}>
          <p key={title}>{title}</p>
          {description}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
