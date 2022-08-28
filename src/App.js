import "./App.css";
import LandingPage from "./pages/LandingPage";
import LikePage from "./pages/likePage";
import PlaylistPage from "./pages/playlistPage";
import SingleProductPage from "./pages/SingleProductPage";
import HistoryPage from "./pages/historyPage";
import WatchLaterPage from "./pages/watchLaterPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequireAuth from "./pages/RequireAuth";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/likepage"
          element={
            <RequireAuth>
              {" "}
              <LikePage />
            </RequireAuth>
          }
        />
        <Route
          path="/playlistpage"
          element={
            <RequireAuth>
              <PlaylistPage />
            </RequireAuth>
          }
        />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route
          path="/historyPage"
          element={
            <RequireAuth>
              <HistoryPage />
            </RequireAuth>
          }
        />
        <Route
          path="/watchpage"
          element={
            <RequireAuth>
              {" "}
              <WatchLaterPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
