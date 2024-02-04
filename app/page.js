'use client'
import React, {useState, useEffect, useCallback} from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";



export default function Home() {
  const [movies, setMovies]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearchResults, setIsSearchResults] = useState(false);

  const getMovies = useCallback(async (query) => {
      const response = await fetch(`/api/movies`);
      const result = await response.json();
          
      setMovies(result.results);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
      setIsSearchResults(false);
  }, [setMovies, setCurrentPage, setTotalPages, setIsSearchResults])

  useEffect(()=>{
    getMovies();
  },[]);

  async function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      const response = await fetch(`/api/movies?page=${newPage}`);
      const result = await response.json();

      getMovies(result.results);
      setCurrentPage(newPage);
      setIsSearchResults(false);
    }
  };

  const handleSearchResults = (results) => {
    setMovies(results);
    setIsSearchResults(true);
  };

  return(
    <div>
       
           <SearchBar getSearchResults={handleSearchResults} />
            {isSearchResults ? (
            <h2>Your search results</h2>
            ) : (
            <h2>Top results for your search</h2>
            )}
          <MovieList
              movies={movies}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
     
   </div>
  )
};




