"use client";
import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import { useSearch } from "../context/SearchContext";
import styled from "styled-components";
import ThemeToggleButton from "../app/theme/ThemeToggleButton";

export default function Home() {
  const { searchResults, setSearchResults } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const cacheByQuery = searchResults[query];
  const maxPage = !!cacheByQuery ? cacheByQuery.maxPage : 1;
  const result =
    !!cacheByQuery && cacheByQuery.data[currentPage]
      ? cacheByQuery.data[currentPage]
      : [];

  const getMovies = useCallback(
    async (query = "", page = 1) => {
      setIsLoading(true);

      try {
        const localCacheByQuery = searchResults[query];
        const havePageInCache =
          !localCacheByQuery || !localCacheByQuery.data[page];

        if (havePageInCache) {
          const endpoint = query
            ? `/api/movies/search?query=${query}&page=${page}`
            : `/api/movies?page=${page}`;
          const response = await fetch(endpoint);
          const result = await response.json();
          const cacheItemForUpdate = !!localCacheByQuery
            ? localCacheByQuery
            : { data: {}, maxPage: null };
          const updateCacheItem = {
            ...cacheItemForUpdate,
            maxPage: result.total_pages,
            data: {
              ...cacheItemForUpdate.data,
              [page]: result.results,
            },
          };

          setSearchResults({
            ...searchResults,
            [query]: updateCacheItem,
          });
        }

        setQuery(query);
        setCurrentPage(page);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [searchResults, setSearchResults, setCurrentPage, setIsLoading]
  );

  const handlePageChange = async (newPage) => {
    if (newPage >= 1 && newPage <= maxPage) {
      await getMovies(query, newPage);
    }
  };

  useEffect(() => {
    getMovies("", 1);
  }, []);

  return (
    <Container>
      <SearchBar getMovies={getMovies} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>Want to change the theme?</h3>
          <ThemeToggleButton />
          {!!query?.length ? (
            <h2>Your search results</h2>
          ) : (
            <h2>Top results for your search</h2>
          )}
          <MovieList
            movies={result}
            currentPage={currentPage}
            totalPages={maxPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100%;
`;
