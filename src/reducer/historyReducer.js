const historyReducer = (historyState, historyAction) => {
  switch (historyAction.type) {
    case "ADD_TO_HISTORY":
      return {
        ...historyState,
        historyItem: [...historyState.historyItem, historyAction.payload],
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...historyState,
        historyItem: historyState.historyItem.filter(
          (item) => item._id !== historyAction.payload
        ),
      };

    default:
      return historyState;
  }
};

export default historyReducer;
