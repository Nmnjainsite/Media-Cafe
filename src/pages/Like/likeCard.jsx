import React from "react";
import "./likeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { useLike } from "../../context/like-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "../../context/history-context";
import { useWatch } from "../../context/watchLater-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import { Upload } from "../Upload/Upload";
import getProductDetails from "../../utils/find";
import { BsClock, BsClockFill } from "react-icons/bs";
const LikeCard = ({ videos }) => {
  const { _id, title, description } = videos;
  const { likeDispatch } = useLike();
  const { historyDispatch } = useHistory();
  const [showModal, setShowModal] = useState(false);
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
      <section className="likepage-container">
        <div id="likepage-container-skin">
          <Link to={`/product/${_id}`}>
            <img
              onClick={() =>
                historyDispatch({ type: "ADD_TO_HISTORY", payload: videos })
              }
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
          <p key={description}>
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
                  toast.error("Let's Login First & Crate The Playlist");
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
      </section>
    </>
  );
};

export default LikeCard;
