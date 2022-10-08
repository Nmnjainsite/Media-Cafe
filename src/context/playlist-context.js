import React, { useContext, createContext, useState } from "react";

const PlaylistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  return (
    <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
