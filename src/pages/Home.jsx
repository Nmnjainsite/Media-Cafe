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
      <div className="header-bottom-container">
        <div>
          <span
            className="links-nav"
            onClick={() => dispatch({ type: "FITER_BY_HOME" })}
          >
            Home
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({
                type: "FITER_BY_CATEGORY",
                payload: "FILTER_BY_CODING",
              })
            }
          >
            Coding
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({
                type: "FITER_BY_CATEGORY",
                payload: "FILTER_BY_FINANCE",
              })
            }
          >
            Finance
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({ type: "FITER_BY_CATEGORY", payload: "FILTER_BY_TED" })
            }
          >
            TEDx
          </span>
          <span
            className="links-nav"
            onClick={() =>
              dispatch({
                type: "FITER_BY_CATEGORY",
                payload: "FILTER_BY_VIDEOGRAPHY",
              })
            }
          >
            Videography
          </span>
        </div>
        <input
          placeholder="search your genre and videos "
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })
          }
        />
      </div>
      <p className="result"> Showing Results: {getFilterData.length}</p>
      <div className="video-container" key="item_id">
        {getFilterData.map((videos, itemData) => (
          <>
            <VideoStore videos={videos} itemData={itemData} />
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
