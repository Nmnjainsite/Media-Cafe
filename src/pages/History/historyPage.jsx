import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/Nav/HeaderNav";
import { useHistory } from "../../context/history-context";
import HistoryCard from "./historyCard";

const HistoryPage = () => {
  const {
    historyState: { historyItem },
  } = useHistory();
  return (
    <>
      <HeaderNav />
      <div className="like-container">
        {historyItem.length > 0 ? (
          historyItem.map((item) => <HistoryCard videos={item} />)
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

export default HistoryPage;
