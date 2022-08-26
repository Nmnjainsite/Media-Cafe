import "./App.css";
import LandingPage from "./pages/LandingPage";
import LikePage from "./pages/likePage";
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
      </Routes>
    </div>
  );
}

export default App;
