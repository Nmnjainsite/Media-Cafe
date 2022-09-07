import { useWatch } from "../../context/watchLater-context";
import WatchCard from "./watchLaterCard";
import React from "react";
import HeaderNav from "../../components/Nav/HeaderNav";
import Footer from "../../components/Footer/Footer";
const WatchLaterPage = () => {
  const {
    watchState: { watchItem },
  } = useWatch();
  return (
    <>
      <HeaderNav />
      <div className="like-container">
        {watchItem.length > 0 ? (
          watchItem.map((item) => <WatchCard videos={item} />)
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

export default WatchLaterPage;
