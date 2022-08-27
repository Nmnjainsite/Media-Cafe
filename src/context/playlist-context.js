import { useContext, createContext, useReducer } from "react";
import React from "react";
import playlistReducer from "../reducer/playlistReducer";
const PlaylistContext = createContext(null);

const initialValue = {
  playlistItem: [],
};

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialValue
  );
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
