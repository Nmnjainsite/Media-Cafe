function filterReducer(state, action) {
  switch (action.type) {
    case "FITER_BY_CATEGORY":
      return { ...state, category: action.payload };
    case "FITER_BY_HOME":
      return {
        category: null,
      };
    case "FILTER_BY_SEARCH":
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
}

export default filterReducer;
