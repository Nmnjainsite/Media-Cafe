import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BsClock, BsClockFill } from "react-icons/bs";
import { useLike } from "../context/like-context";
import getProductDetails from "../utils/find";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "../context/history-context";
import { useWatch } from "../context/watchLater-context";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
import { Upload } from "../../src/pages/Upload/Upload";
import { useState } from "react";
const VideoStore = ({ videos }) => {
  const { title, description, _id, src } = videos;
  const [showModal, setShowModal] = useState(false);
  const { likeState, likeDispatch } = useLike();
  const { historyDispatch } = useHistory();
  const { watchState, watchDispatch } = useWatch();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const isWatch = getProductDetails(watchState.watchItem, _id);

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

      <div className="iframe-box" key={_id}>
        <li style={{ listStyle: "none" }}>
          <div className="object">
            <Link to={`/product/${_id}`}>
              <img
                key={src}
                onClick={() =>
                  historyDispatch({ type: "ADD_TO_HISTORY", payload: videos })
                }
                src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
                className="yt-img"
              />
            </Link>

            <p className="description" style={{ textAlign: "left" }}>
              {description}
            </p>
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
                    navigate("/login");
                    toast.error("Let's login first");
                  }
                }}
              />

              <span>
                {isWatch ? (
                  <BsClockFill
                    style={{ color: "turquoise" }}
                    onClick={() => watchHandler(videos, _id)}
                  ></BsClockFill>
                ) : (
                  <BsClock onClick={() => watchHandler(videos, _id)}></BsClock>
                )}
              </span>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default VideoStore;
