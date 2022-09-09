import React from "react";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { CgPlayListRemove, CgPlayListCheck } from "react-icons/cg";
import { useLike } from "../../context/like-context";
import getProductDetails from "../../utils/find";
import { Link, useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context/playlist-context";
import HeaderNav from "../../components/Nav/HeaderNav";
import { useWatch } from "../../context/watchLater-context";
import { BsClock, BsClockFill } from "react-icons/bs";
import { toast } from "react-toastify";
const SingleProductCard = ({ videos }) => {
  const { _id, src } = videos;
  const { likeState, likeDispatch } = useLike();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { watchDispatch, watchState } = useWatch();
  const navigate = useNavigate;
  const isLike = getProductDetails(likeState.likeItem, _id);
  const isPlaylist = getProductDetails(playlistState.playlistItem, _id);
  const isWatch = getProductDetails(watchState.watchItem, _id);
  return (
    <div>
      <HeaderNav />

      <div>
        <iframe
          title="Inline Frame Example"
          style={{ width: "100%", height: "100vh" }}
          src={src}
          key="iframe_src"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div style={{ fontSize: "1.3rem", cursor: "pointer", color: "white" }}>
          {isLike ? (
            <AiFillHeart
              style={{ color: "red" }}
              onClick={() => {
                likeDispatch({ type: "REMOVE_FROM_LIKE", payload: _id });
                toast.success("Removed From Like !");
              }}
            ></AiFillHeart>
          ) : (
            <BsHeart
              onClick={() => {
                likeDispatch({ type: "ADD_TO_LIKE", payload: videos });
                toast.success("Added To Like !");
              }}
            ></BsHeart>
          )}

          <span style={{ margin: "0.7rem", fontSize: "1.5rem" }}>
            {isPlaylist ? (
              <CgPlayListCheck
                onClick={() => {
                  playlistDispatch({
                    type: "REMOVE_FROM_PLAYLIST",
                    payload: _id,
                  }),
                    toast.success("Removed From Playlist !");
                }}
              ></CgPlayListCheck>
            ) : (
              <CgPlayListRemove
                onClick={() => {
                  playlistDispatch({
                    type: "ADD_TO_PLAYLIST",
                    payload: videos,
                  });
                  toast.success("Added To Playlist ! ");
                }}
              ></CgPlayListRemove>
            )}
          </span>

          <span>
            {isWatch ? (
              <BsClockFill
                style={{ color: "turquoise" }}
                onClick={() => {
                  watchDispatch({
                    type: "REMOVE_FROM_WATCH",
                    payload: _id,
                  });
                  toast.success("Removed From Watch Later !");
                }}
              ></BsClockFill>
            ) : (
              <BsClock
                onClick={() => {
                  watchDispatch({
                    type: "ADD_TO_WATCH",
                    payload: videos,
                  });
                  toast.success("Added To Watch Later !");
                }}
              ></BsClock>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
