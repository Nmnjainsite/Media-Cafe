import React from "react";
import { useLike } from "../context/like-context";
import LikeCard from "./likeCard";
import HeaderNav from "../components/Header";
const LikePage = () => {
  const {
    likeState: { likeItem },
    likeDispatch,
  } = useLike();

  return (
    <>
      <HeaderNav />
      {likeItem.map((item) => (
        <LikeCard videos={item} />
      ))}
    </>
  );
};

export default LikePage;
