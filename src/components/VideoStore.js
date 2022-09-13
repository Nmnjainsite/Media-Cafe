import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { CgPlayListRemove, CgPlayListCheck } from "react-icons/cg";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BsClock, BsClockFill } from "react-icons/bs";
import { useLike } from "../context/like-context";
import getProductDetails from "../utils/find";
import { Link, useNavigate } from "react-router-dom";
import { usePlaylist } from "../context/playlist-context";
import { useHistory } from "../context/history-context";
import { useWatch } from "../context/watchLater-context";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
import Upload from "../../src/pages/Upload/Upload";
import { useState } from "react";
const VideoStore = ({ videos }) => {
  const { title, description, _id } = videos;
  const [showModal, setShowModal] = useState(false);
  const { likeState, likeDispatch } = useLike();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { historyDispatch } = useHistory();
  const { watchState, watchDispatch } = useWatch();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const isLike = getProductDetails(likeState.likeItem, _id);
  const isPlaylist = getProductDetails(playlistState.playlistItem, _id);
  const isWatch = getProductDetails(watchState.watchItem, _id);
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
  const playlistHandler = (videos, _id) => {
    if (isLoggedIn) {
      if (isPlaylist) {
        playlistDispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: _id,
        });
        toast.success("Removed From Playlist !");
      } else {
        playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: videos }),
          toast.success("Added To Playlist !");
      }
    } else {
      navigate("/login");
      toast.warn("Please Login First !");
    }
  };

  const watchHandler = (videos, _id) => {
    if (isLoggedIn) {
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

      <div className="iframe-box">
        <li style={{ listStyle: "none" }}>
          <div className="object" key="object">
            <Link to={`/product/${_id}`}>
              <img
                onClick={() =>
                  historyDispatch({ type: "ADD_TO_HISTORY", payload: videos })
                }
                src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
                className="yt-img"
              />
            </Link>

            <div
              key="title"
              style={{
                textAlign: "left",
                padding: "0.5rem",
                fontSize: "1.2rem",
              }}
            >
              {title}
            </div>

            <p
              key="description"
              className="description"
              style={{ textAlign: "left" }}
            >
              {description}
            </p>
            <div
              style={{
                fontSize: "1.3rem",
                cursor: "pointer",
                color: "turquoise",
                marginBottom: "0rem",
              }}
            >
              {isLike ? (
                <AiFillHeart
                  style={{ color: "red" }}
                  onClick={() => likeHandler(videos, _id)}
                ></AiFillHeart>
              ) : (
                <BsHeart onClick={() => likeHandler(videos, _id)}></BsHeart>
              )}

              <span style={{ margin: "0.7rem", fontSize: "1.5rem" }}>
                {isPlaylist ? (
                  <CgPlayListCheck
                    style={{ color: "blue" }}
                    onClick={() => playlistHandler(videos, _id)}
                  ></CgPlayListCheck>
                ) : (
                  <CgPlayListRemove
                    onClick={() => playlistHandler(videos, _id)}
                  ></CgPlayListRemove>
                )}
              </span>

              {/* <MdOutlinePlaylistPlay
                onClick={() => {
                  if (isLoggedIn) {
                    setShowModal(true);
                  } else {
                    navigate("/login");
                    toast.error("Please Login First");
                  }
                }}
              /> */}

              <span>
                {isWatch ? (
                  <BsClockFill
                    style={{ color: "blueviolet" }}
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
