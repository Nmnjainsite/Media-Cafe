import React from "react";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { useLike } from "../context/like-context";
import findItem from "../utils/find";
import { Link, useNavigate } from "react-router-dom";
const VideoStore = ({ videos }) => {
  const { src, title, description, _id } = videos;
  const { likeState, likeDispatch } = useLike();

  const getProductDetails = (products, id) => {
    return products.find((product) => product._id === id);
  };

  const isLike = getProductDetails(likeState.likeItem, _id);
  const navigate = useNavigate();
  //   const likeHandler = (_id, videos) => {
  //     if (product) {
  //       likeDispatch({ type: "REMOVE_FROM_LIKE", payload: _id });
  //     } else {
  //       likeDispatch({ type: "ADD_TO_LIKE", payload: videos });
  //     }
  //   };

  return (
    <div className="iframe-box">
      <li style={{ listStyle: "none" }}>
        <div className="object" key="object">
          <iframe
            title="Inline Frame Example"
            width="300"
            height="200"
            src={src}
            key="iframe_src"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <p key="title">{title}</p>
          <p key="description">{description}</p>
          <div style={{ fontSize: "1.3rem", cursor: "pointer" }}>
            {isLike ? (
              <AiFillHeart
                onClick={() =>
                  likeDispatch({ type: "REMOVE_FROM_LIKE", payload: _id })
                }
              ></AiFillHeart>
            ) : (
              <BsHeart
                onClick={() =>
                  likeDispatch({ type: "ADD_TO_LIKE", payload: videos })
                }
              ></BsHeart>
            )}

            <span style={{ margin: "0.7rem" }}>
              <RiPlayList2Fill></RiPlayList2Fill>
            </span>

            <span>
              <AiFillClockCircle></AiFillClockCircle>
            </span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoStore;
