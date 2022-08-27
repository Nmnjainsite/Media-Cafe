import React from "react";
import HeaderNav from "../components/Header";
import { useHistory } from "../context/history-context";
import HistoryCard from "./historyCard";

const HistoryPage = () => {
  const {
    historyState: { historyItem },
  } = useHistory();
  return (
    <>
      <HeaderNav />
      {historyItem.map((item) => (
        <HistoryCard videos={item} />
      ))}
    </>
  );
};

export default HistoryPage;
