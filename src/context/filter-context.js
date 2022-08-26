import { createContext, useContext, useReducer } from "react";
import filterReducer from "../reducer/filterReducer";
import React from "react";

const FilterContext = createContext(null);

const initialState = {
  category: null,
  searchValue: null,
};

const FilterProvider = ({ children }) => {
  const [{ state, category, searchValue }, dispatch] = useReducer(
    filterReducer,
    initialState
  );

  return (
    <FilterContext.Provider
      value={[{ state, category, searchValue }, dispatch]}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
