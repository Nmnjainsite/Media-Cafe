import React from "react";

import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
import axios from "axios";
const Upload = ({ setShowModal, video }) => {
  const [name, setName] = useState("");
  const { isLoggedIn } = useAuth();

  const {
    playlistState: { playlistItem },
    playlistDispatch,
  } = usePlaylist();

  const header = { authorization: isLoggedIn };

  const createPlaylistHandler = async () => {
    const data = {
      name: name,
      description: "hello video",
    };

    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: data },
        { headers: header }
      );
      console.log(response);
      playlistDispatch(response.data.playlistItem);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideoToPlaylist = async (video, id) => {
    const postLink = "/api/user/playlists/" + id;
    const sendVideo = { video: video };

    try {
      const response = await axios.post(postLink, sendVideo, {
        headers: header,
      });
      console.log(response);
      playlistDispatch(response.data.playlistItem);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <p>Add this Video to a collection</p>
        <div></div>

        <div>
          <div>
            <input
              type="text"
              id="playlist_name"
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => createPlaylistHandler()}>+</button>
          </div>

          <div>
            {playlistItem.length >= 0 &&
              playlistItem.map((playlistItem) => (
                <div>
                  <input
                    type="checkbox"
                    onChange={() => addVideoToPlaylist(video, playlistItem._id)}
                  ></input>
                  <label key={playlistItem._id}>{playlistItem.title}</label>
                </div>
              ))}
          </div>

          <div>
            <button type="submit" onClick={() => setShowModal(false)}>
              Create Collection
            </button>
            {/* <button className="button secondary_btn">Cancel</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
