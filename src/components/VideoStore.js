import React from "react";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { CgPlayListRemove, CgPlayListCheck } from "react-icons/cg";
import { BsClock, BsClockFill } from "react-icons/bs";
import { useLike } from "../context/like-context";
import getProductDetails from "../utils/find";
import { Link, useNavigate } from "react-router-dom";
import { usePlaylist } from "../context/playlist-context";
import { useHistory } from "../context/history-context";
import { useWatch } from "../context/watchLater-context";

const VideoStore = ({ videos }) => {
  const { src, title, description, _id, noDetail, iframeId } = videos;
  const { likeState, likeDispatch } = useLike();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { historyDispatch } = useHistory();
  const { watchState, watchDispatch } = useWatch();
  const navigate = useNavigate;
  const isLike = getProductDetails(likeState.likeItem, _id);
  const isPlaylist = getProductDetails(playlistState.playlistItem, _id);
  const isWatch = getProductDetails(watchState.watchItem, _id);

  return (
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

          <div key="title" style={{ textAlign: "left", padding: "0.5rem" }}>
            {title}
          </div>

          <p key="description" style={{ textAlign: "left" }}>
            {description}
          </p>
          <div
            style={{
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            {isLike ? (
              <AiFillHeart
                style={{ color: "red" }}
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

            <span style={{ margin: "0.7rem", fontSize: "1.5rem" }}>
              {isPlaylist ? (
                <CgPlayListCheck
                  onClick={() =>
                    playlistDispatch({
                      type: "REMOVE_FROM_PLAYLIST",
                      payload: _id,
                    })
                  }
                ></CgPlayListCheck>
              ) : (
                <CgPlayListRemove
                  onClick={() =>
                    playlistDispatch({
                      type: "ADD_TO_PLAYLIST",
                      payload: videos,
                    })
                  }
                ></CgPlayListRemove>
              )}
            </span>

            <span>
              {isWatch ? (
                <BsClockFill
                  style={{ color: "turquoise" }}
                  onClick={() =>
                    watchDispatch({
                      type: "REMOVE_FROM_WATCH",
                      payload: _id,
                    })
                  }
                ></BsClockFill>
              ) : (
                <BsClock
                  onClick={() =>
                    watchDispatch({
                      type: "ADD_TO_WATCH",
                      payload: videos,
                    })
                  }
                ></BsClock>
              )}
            </span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoStore;
