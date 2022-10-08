import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import LikePage from "./pages/Like/likePage";
import PlaylistPage from "./pages/Playlist/playlistPage";
import SingleProductPage from "./pages/SingleProduct/SingleProductPage";
import HistoryPage from "./pages/History/historyPage";
import WatchLaterPage from "./pages/Watch-Later/watchLaterPage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/signup";
import Home from "./pages/Home/Home";
import RequireAuth from "./pages/RequireAuth";
import PlainNav from "./components/Nav/PlainNav.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/Error404/404";
import Playlist from "./pages/Playlist/Playlist";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/like"
          element={
            <RequireAuth>
              {" "}
              <LikePage />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <PlaylistPage />
            </RequireAuth>
          }
        />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <HistoryPage />
            </RequireAuth>
          }
        />
        <Route
          path="/watch"
          element={
            <RequireAuth>
              {" "}
              <WatchLaterPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plain" element={<PlainNav />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
