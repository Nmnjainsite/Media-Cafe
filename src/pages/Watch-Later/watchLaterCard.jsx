import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useWatch } from "../../context/watchLater-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { Upload } from "../Upload/Upload";
import { useAuth } from "../../context/auth-context";
import { FiThumbsUp } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import getProductDetails from "../../utils/find";
import { useLike } from "../../context/like-context";
import { useHistory } from "../../context/history-context";

const WatchCard = ({ videos }) => {
  const { _id, src, title, description } = videos;
  const { watchDispatch } = useWatch();
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useAuth();
  const { likeState, likeDispatch } = useLike();
  const isLike = getProductDetails(likeState.likeItem, _id);
  const likeHandler = (videos, _id) => {
    if (isLoggedIn) {
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
  const { historyDispatch } = useHistory();
  return (
    <>
      {showModal && <Upload setShowModal={setShowModal} video={videos} />}
      <div className="likepage-container">
        <div id="likepage-container-skin">
          <Link to={`/product/${_id}`}>
            <img
              onClick={() =>
                historyDispatch({ type: "ADD_TO_HISTORY", payload: videos })
              }
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
          <div key={description}> {description}</div>
          <div
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "turquoise",
              marginBottom: "0rem",
              float: "right",
              marginRight: "10%",
            }}
          >
            <MdOutlinePlaylistAdd
              style={{
                fontSize: "2.5rem",
                marginBottom: "-0.2rem",
                marginRight: "0.5rem",
              }}
              onClick={() => {
                if (isLoggedIn.token) {
                  setShowModal(true);
                } else {
                  navigate("/signup");
                  toast.error("Let's Login First & Crate The Playlist");
                }
              }}
            />

            <span style={{ position: "relative", top: "-0.3rem" }}>
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
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchCard;
