import React from "react";
import { usePlaylist } from "../context/playlist-context";
import PlaylistCard from "./playlistCard";
import HeaderNav from "../components/Header";
const PlaylistPage = () => {
  const {
    playlistState: { playlistItem },
  } = usePlaylist();
  return (
    <>
      <HeaderNav />
      {playlistItem.map((item) => (
        <PlaylistCard videos={item} />
      ))}
    </>
  );
};

export default PlaylistPage;
