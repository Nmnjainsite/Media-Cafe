const likeReducer = (likeState, likeAction) => {
  switch (likeAction.type) {
    case "ADD_TO_LIKE":
      return {
        ...likeState,
        likeItem: [...likeState.likeItem, likeAction.payload],
      };
    case "REMOVE_FROM_LIKE":
      return {
        ...likeState,
        likeItem: likeState.likeItem.filter(
          (item) => item._id !== likeAction.payload
        ),
      };
    default:
      return likeState;
  }
};

export default likeReducer;
