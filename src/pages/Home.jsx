import React from "react";
import HeaderNav from "../components/Header";
import { videos } from "../backend/db/videos";
import "./Home.css";
import { useFilter } from "../context/filter-context";
import filterByCategory from "../utils/filterByCategory";
import filterBySearch from "../utils/filterBySearch";
import VideoStore from "../components/VideoStore";
const Home = () => {
  const [{ state, category, searchValue }, dispatch] = useFilter();
  const searchedData = filterBySearch(videos, searchValue);
  const getFilterData = filterByCategory(searchedData, category);

  return (
    <>
      <HeaderNav />
      <p className="result"> Showing Results: {getFilterData.length}</p>
      <div className="video-container" key="item_id">
        {getFilterData.map((videos) => (
          <VideoStore videos={videos} />
        ))}
      </div>
    </>
  );
};

export default Home;
