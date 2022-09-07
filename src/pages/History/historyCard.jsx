import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "../../context/history-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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
        </Link>
        <AiFillDelete
          className="delete-icon"
          onClick={() => {
            historyDispatch({ type: "REMOVE_FROM_HISTORY", payload: _id });
            toast.success("Removed From History !");
          }}
        ></AiFillDelete>{" "}
        <div key={description}>
          <p key={title}>{title}</p>
          {description}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
