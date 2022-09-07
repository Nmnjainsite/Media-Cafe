import { useContext, createContext, useReducer, useEffect } from "react";
import React from "react";
import historyReducer from "../reducer/historyReducer";
const HistoryContext = createContext(null);

const initialValue = {
  historyItem: [],
};

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialValue
  );

  useEffect(() => {});
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
