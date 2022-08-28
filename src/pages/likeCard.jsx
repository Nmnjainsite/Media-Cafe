import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useLike } from "../context/like-context";
import { useNavigate, Link } from "react-router-dom";
const LikeCard = ({ videos }) => {
  const { _id, title, description } = videos;
  const { likeDispatch } = useLike();
  const navigate = useNavigate;
  return (
    <section className="likepage-container">
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
              likeDispatch({ type: "REMOVE_FROM_LIKE", payload: _id })
            }
          ></AiFillDelete>{" "}
        </Link>
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
