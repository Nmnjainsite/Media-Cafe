import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useLike } from "../../context/like-context";
import getProductDetails from "../../utils/find";
import { useNavigate } from "react-router-dom";
import { Upload } from "../Upload/Upload";
import HeaderNav from "../../components/Nav/HeaderNav";
import { useWatch } from "../../context/watchLater-context";
import { BsClock, BsClockFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import "./SingleProduct.css";
const SingleProductCard = ({ videos }) => {
  const [comment, setComment] = useState("");
  const [update, setUpdate] = useState({
    comment: [],
    username: [],
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  });
  const changeInput = () => {
    const update = {
      comment: comment,
      username: isLoggedIn.username,
      // img: "https://www.cheatsheet.com/wp-content/uploads/2021/12/Levi-Ackerman-Attack-on-Titan.jpeg",
      img: img,
    };
    if (isLoggedIn.token) {
      if (comment === "") {
        toast.warn("Please Put A Comment !");
      } else {
        setUpdate(update);
        toast.success("Commented");
      }
    } else {
      navigate("/login");
      toast.warn("Let's Login First");
    }
  };
  const { _id, src, title, description } = videos;
  const { likeState, likeDispatch } = useLike();
  const [showModal, setShowModal] = useState(false);
  const { watchDispatch, watchState } = useWatch();
  const navigate = useNavigate();
  const isLike = getProductDetails(likeState.likeItem, _id);
  const isWatch = getProductDetails(watchState.watchItem, _id);
  const { isLoggedIn } = useAuth();
  const likeHandler = (videos, _id) => {
    if (isLoggedIn.token) {
      if (isLike) {
        likeDispatch({
          type: "REMOVE_FROM_LIKE",
          payload: _id,
        });
        toast.success("Removed From Like !");
      } else {
        likeDispatch({ type: "ADD_TO_LIKE", payload: videos }),
          toast.success("Added To Like !");
      }
    } else {
      navigate("/login");
      toast.warn("Please Login First !");
    }
  };

  const watchHandler = (videos, _id) => {
    if (isLoggedIn.token) {
      if (isWatch) {
        watchDispatch({
          type: "REMOVE_FROM_WATCH",
          payload: _id,
        });
        toast.success("Removed From Watch Later !");
      } else {
        watchDispatch({ type: "ADD_TO_WATCH", payload: videos }),
          toast.success("Added To Watch Later !");
      }
    } else {
      navigate("/login");
      toast.warn("Please Login First !");
    }
  };

  return (
    <>
      {showModal && <Upload setShowModal={setShowModal} video={videos} />}
      <div>
        <HeaderNav />

        <div style={{ marginBottom: "1rem" }}>
          <iframe
            title="Inline Frame Example"
            style={{ width: "90%", height: "100vh" }}
            src={src}
            key="iframe_src"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <div className="description-box">
            {description} || By {title}
            <div className="views">
              1.8M views - 22st Jan 2021
              <div className="icons-box">
                {isLike ? (
                  <FaThumbsUp
                    style={{ color: "turquoise" }}
                    onClick={() => likeHandler(videos, _id)}
                  ></FaThumbsUp>
                ) : (
                  <FiThumbsUp
                    onClick={() => likeHandler(videos, _id)}
                  ></FiThumbsUp>
                )}
                <span className="bars">|</span>
                <MdOutlinePlaylistAdd
                  className="playlist-icon"
                  onClick={() => {
                    if (isLoggedIn.token) {
                      setShowModal(true);
                    } else {
                      navigate("/login");
                      toast.error("Let's Login First & Crate The Playlist");
                    }
                  }}
                />
                <span className="bars">|</span>
                <span>
                  {isWatch ? (
                    <BsClockFill
                      style={{ color: "turquoise" }}
                      onClick={() => watchHandler(videos, _id)}
                    ></BsClockFill>
                  ) : (
                    <BsClock
                      onClick={() => watchHandler(videos, _id)}
                    ></BsClock>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="subs-section">
          <img
            className="round-image"
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
          ></img>{" "}
          <div className="channel-name">
            {title} <div style={{ fontSize: "1.1rem" }}>899k Subscribers</div>
          </div>
        </div>
        <div className="comments-box">
          <div>
            <p className="comment-text">Comments</p>
            <div>
              {" "}
              <input
                placeholder="Add a comment..."
                className="comment-input"
                onChange={(e) => setComment(e.target.value)}
              ></input>
            </div>
            <button onClick={changeInput} className="comment-btn">
              Comment
            </button>
            <div className="comments">
              <img src={update.img} className="person-img"></img>

              <div className="comment-username">
                {update.username}{" "}
                <p className="comment-comment">{update.comment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
