import React from "react";
import { usePlaylist } from "../../context/playlist-context";
import PlaylistCard from "./playlistCard";
import HeaderNav from "../../components/Nav/HeaderNav";
import Footer from "../../components/Footer/Footer";
const PlaylistPage = () => {
  const {
    playlistState: { playlistItem },
  } = usePlaylist();
  return (
    <>
      <HeaderNav />
      <div className="like-container">
        {playlistItem.length > 0 ? (
          playlistItem.map((item) => <PlaylistCard videos={item} />)
        ) : (
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/folder-is-empty-4064360-3363921.png"
            className="empty-img-col-2"
          ></img>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PlaylistPage;
