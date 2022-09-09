import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useLike } from "../../context/like-context";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LikeCard = ({ videos }) => {
  const { _id, title, description } = videos;
  const { likeDispatch } = useLike();

  return (
    <section className="likepage-container">
      <div id="likepage-container-skin">
        <Link to={`/product/${_id}`}>
          <img
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            className="img-cls"
          />{" "}
        </Link>
        <AiFillDelete
          className="delete-icon"
          onClick={() => {
            likeDispatch({ type: "REMOVE_FROM_LIKE", payload: _id }),
              toast.success("Removed From Like !");
          }}
        ></AiFillDelete>{" "}
        <div key={description}>
          {" "}
          <p key={title}>{title}</p>
          {description}
        </div>
      </div>
    </section>
  );
};

export default LikeCard;
