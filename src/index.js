import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-context";
import { LikeProvider } from "./context/like-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LikeProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </LikeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
