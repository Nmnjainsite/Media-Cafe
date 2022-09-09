import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-context";
import { LikeProvider } from "./context/like-context";
import { PlaylistProvider } from "./context/playlist-context";
import { HistoryProvider } from "./context/history-context";
import { WatchProvider } from "./context/watchLater-context";
import { AuthProvider } from "./context/auth-context";
import { ThemeProvider } from "./context/theme-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <WatchProvider>
            <HistoryProvider>
              <PlaylistProvider>
                <LikeProvider>
                  <FilterProvider>
                    <App />
                  </FilterProvider>
                </LikeProvider>
              </PlaylistProvider>
            </HistoryProvider>
          </WatchProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
