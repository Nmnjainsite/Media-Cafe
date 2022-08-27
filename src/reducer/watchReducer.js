const watchReducer = (watchState, watchAction) => {
  switch (watchAction.type) {
    case "ADD_TO_WATCH":
      return {
        ...watchState,
        watchItem: [...watchState.watchItem, watchAction.payload],
      };
    case "REMOVE_FROM_WATCH":
      return {
        ...watchState,
        watchItem: watchState.watchItem.filter(
          (item) => item._id !== watchAction.payload
        ),
      };
    default:
      return watchState;
  }
};

export default watchReducer;
