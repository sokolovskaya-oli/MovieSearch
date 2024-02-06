"use client"
import { createContext, useContext, useState } from "react";

let saveValue = {};
const SearchContext = createContext(saveValue);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResultsInternal] = useState({});

  const setSearchResults = (val) => {
    saveValue = val
    setSearchResultsInternal(val);
  }
  
  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
}