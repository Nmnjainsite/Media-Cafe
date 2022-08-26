import { createContext, useContext, useReducer } from "react";
import React from "react";
import likeReducer from "../reducer/likeReducer";
const LikeContext = createContext(null);

const initialValue = {
  likeItem: [],
};

const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, initialValue);
  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { useLike, LikeProvider };
