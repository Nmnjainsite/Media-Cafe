const playlistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...playlistState,
        playlistItem: [...playlistState.playlistItem, playlistAction.payload],
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...playlistState,
        playlistItem: playlistState.playlistItem.filter(
          (item) => item._id !== playlistAction.payload
        ),
      };
    default:
      return playlistState;
  }
};

export default playlistReducer;
