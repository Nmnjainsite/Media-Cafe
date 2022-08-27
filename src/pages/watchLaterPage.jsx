import { useWatch } from "../context/watchLater-context";
import WatchCard from "./watchLaterCard";
import React from "react";
import HeaderNav from "../components/Header";
const WatchLaterPage = () => {
  const {
    watchState: { watchItem },
  } = useWatch();
  return (
    <>
      <HeaderNav />
      {watchItem.map((item) => (
        <WatchCard videos={item} />
      ))}
    </>
  );
};

export default WatchLaterPage;
