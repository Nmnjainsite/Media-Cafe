import React, { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
import axios from "axios";
import { toast } from "react-toastify";
import "./Upload.css";
export function Upload({ setShowModal, video }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {
    isLoggedIn: { token },
  } = useAuth();

  const { playlists, setPlaylists } = usePlaylist();

  const header = { authorization: token };

  const createPlaylistHandler = async () => {
    const data = {
      title: title,
      description: description,
    };
    try {
      console.log(data);
      const response = await axios.post(
        `/api/user/playlists`,
        { playlist: data },
        {
          headers: header,
        }
      );

      console.log(response);
      toast.success(`Created a new playlist ${title}`);
      setPlaylists(response.data.playlists);
    } catch (error) {
      toast.error("Playlist Not Created");
    }
  };

  const addVideoToPlaylist = async (video, _id) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${_id}`,
        { video: video },
        {
          headers: header,
        }
      );
      if (response.data.playlists) {
        console.log(response);
        setPlaylists(response.data.playlists);
        toast.success(`Added The Video In Your Playlist`);
      } else {
        toast.warn("This video is already exists.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="upload-container">
      <div>
        <img
          className="upload-img"
          alt={video.title}
          src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
        ></img>
      </div>
      <div className="align__horizontal">
        <div className="label-box">
          <span>
            <input
              maxLength={30}
              type="text"
              placeholder="Add Title To Your Playlist"
              id="playlist_name"
              className="create__playlist__input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>
          <span>
            <input
              maxLength={50}
              className="create__playlist__input"
              type="text"
              id="playlist_description"
              placeholder="Describe Your Playlist"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </span>
          <button
            className="create_btn"
            onClick={() => createPlaylistHandler()}
          >
            Create
          </button>
          <p className="playlist-info">Available Playlist</p>
        </div>
      </div>

      <div className="playlist__name__outer">
        {video &&
          playlists &&
          playlists.map((playlist) => (
            <div className="playlist__name__box">
              <label key={playlist._id} className="playlist_name">
                {playlist.title}
              </label>
              <button
                className="btn-add-to-playlist"
                onClick={() => addVideoToPlaylist(video, playlist._id)}
              >
                Add
              </button>
            </div>
          ))}
      </div>
      <button
        className="close_btn"
        type="submit"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
  );
}
