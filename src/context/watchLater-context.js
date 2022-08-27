import { useContext, createContext, useReducer } from "react";
import React from "react";
import watchReducer from "../reducer/watchReducer";
const WatchContext = createContext(null);

const initialValue = {
  watchItem: [],
};

const WatchProvider = ({ children }) => {
  const [watchState, watchDispatch] = useReducer(watchReducer, initialValue);
  return (
    <WatchContext.Provider value={{ watchState, watchDispatch }}>
      {children}
    </WatchContext.Provider>
  );
};

const useWatch = () => useContext(WatchContext);

export { useWatch, WatchProvider };
