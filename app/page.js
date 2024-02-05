'use client'
import React, {useState, useEffect, useCallback} from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { useSearch } from "../app/context/SearchContext";


export default function Home() {
   const { searchResults, setSearchResults } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearchResults, setIsSearchResults] = useState(false);

  const getMovies = useCallback(async (query='', page=1) => {
    
    try {
      const endpoint = query ? `/api/movies/search?query=${query}&page=${page}` : `/api/movies?page=${page}`;
      const response = await fetch(endpoint);
      const result = await response.json();
          
      setSearchResults(query ? [{ query, results: result.results }] : [result.results])
      setCurrentPage(page);
      setTotalPages(result.total_pages);
      setIsSearchResults(!query);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [setSearchResults, setCurrentPage, setTotalPages, setIsSearchResults])

  async function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      const query = searchResults.length > 0 ? searchResults.query : ''; 
      await getMovies(query, newPage);
    }
  };

  useEffect(() => {
    getMovies('', currentPage);
  }, [currentPage, getMovies]);
  console.log('searchResults', searchResults[0])
  return(
    <div>
       
           <SearchBar onSearch={setSearchResults} />
            {isSearchResults ? (
              <>
                <h2>Top results for your search</h2>
                <MovieList
                movies={searchResults[0]}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                />
            </>
            ) : (
              <>
                <h2>Your search results</h2>
                <MovieList
                    movies={searchResults.length > 0 ? searchResult : ["Opppss"]}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    />
               </>
            )}
        
     
   </div>
  )
};




