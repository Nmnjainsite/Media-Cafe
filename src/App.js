import "./App.css";
import LandingPage from "./pages/LandingPage";
import LikePage from "./pages/likePage";
import PlaylistPage from "./pages/playlistPage";
import SingleProductPage from "./pages/SingleProductPage";
import HistoryPage from "./pages/historyPage";
import WatchLaterPage from "./pages/watchLaterPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/likepage" element={<LikePage />} />
        <Route path="/playlistpage" element={<PlaylistPage />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/historyPage" element={<HistoryPage />} />
        <Route path="/watchpage" element={<WatchLaterPage />} />
      </Routes>
    </div>
  );
}

export default App;
