import React, { useEffect } from "react";
import { usePlaylist } from "../../context/playlist-context";
import PlaylistCard from "./playlistCard";
import HeaderNav from "../../components/Nav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/auth-context";
import axios from "axios";
const PlaylistPage = () => {
  const { playlists, setPlaylists } = usePlaylist();
  const { isLoggedIn } = useAuth();
  console.log(playlists);
  const header = { authorization: isLoggedIn.token };
  const fetchPlaylists = async () => {
    try {
      const response = await axios.get(`/api/user/playlists`, {
        headers: header,
      });
      console.log(response);
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn.isAuth) {
      fetchPlaylists();
    }
    console.log(fetchPlaylists());
  }, []);

  return (
    <>
      <HeaderNav />
      <div className="playlistpage-container" key={playlists}>
        {playlists?.length ? (
          playlists.map((playlist) => <PlaylistCard playlist={playlist} />)
        ) : (
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/folder-is-empty-4064360-3363921.png"
            className="empty-img-col-playlist"
          ></img>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PlaylistPage;
