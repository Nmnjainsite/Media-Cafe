import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useWatch } from "../../context/watchLater-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const WatchCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { watchDispatch } = useWatch();
  return (
    <>
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
              watchDispatch({ type: "REMOVE_FROM_WATCH", payload: _id }),
                toast.success("Removed From Watch Later !");
            }}
          ></AiFillDelete>{" "}
          <div key={description}>
            {" "}
            <p key={title}>{title}</p>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchCard;
