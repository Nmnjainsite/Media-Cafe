import React from "react";
import { useLike } from "../context/like-context";
import LikeCard from "./likeCard";
const LikePage = () => {
  const { likeState, likeDispatch } = useLike();

  return (
    <>
      {likeState.likeItem.map((item) => (
        <LikeCard videos={item} />
      ))}
    </>
  );
};

export default LikePage;
