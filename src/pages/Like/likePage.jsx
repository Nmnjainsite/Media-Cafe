import React from "react";
import { useLike } from "../../context/like-context";
import LikeCard from "./likeCard";
import HeaderNav from "../../components/Nav/HeaderNav";
import Footer from "../../components/Footer/Footer";
const LikePage = () => {
  const {
    likeState: { likeItem },
    likeDispatch,
  } = useLike();

  return (
    <>
      <HeaderNav />
      <div className="like-container">
        {likeItem.length > 0 ? (
          likeItem.map((item) => <LikeCard videos={item} />)
        ) : (
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/folder-is-empty-4064360-3363921.png"
            className="empty-img-col-2"
          ></img>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LikePage;
