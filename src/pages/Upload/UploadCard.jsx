import React from "react";
import { usePlaylist } from "../../context/playlist-context";
import { useAuth } from "../../context/auth-context";
import { useEffect } from "react";
import axios from "axios";
import HeaderNav from "../../components/Nav/HeaderNav";
const UploadCard = () => {
  const {
    playlistState: { playlistItem },
    playlistDispatch,
  } = usePlaylist();
  const { isLoggedIn } = useAuth();
  const header = { authorization: isLoggedIn };
  console.log(playlistItem);
  const getData = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: header,
      });
      playlistDispatch(response.data.playlistItem);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      getData();
    }
  }, []);
  return (
    <div className="playlist-page">
      <HeaderNav />
      {playlistItem.map((playlistItem) => (
        <PlaylistCard playlistItem={playlistItem} />
      ))}
    </div>
  );
};

export default UploadCard;
