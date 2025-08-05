import styled from "styled-components";

import Link from "next/link";
import { useMemo } from "react";
import MovieItem from "./MovieItem";

export default function MovieList({
  movies,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const movieItem = useMemo(() => {
    return movies.map((movie) => <MovieItem key={movie.id} movie={movie} />);
  }, [movies]);

  return (
    <MovieListContainer>
      <MovieItems>{movieItem}</MovieItems>
      <PaginationContainer>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <PaginationButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </div>
      </PaginationContainer>
    </MovieListContainer>
  );
}

const MovieListContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  border-radius: 20px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const PaginationContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  div {
    @media (max-width: 425px) {
      margin-top: 10px;
    }
  }
`;

const PaginationButton = styled.button`
  width: 115px;
  padding: 10px 15px;
  margin-left: 20px;
  background-color: #1995ad;
  border-radius: 10px;
  color: #f1f1f2;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #a1d6e2;
    cursor: not-allowed;
  }
  &:first-child {
    @media (max-width: 425px) {
      margin-left: 0;
    }
  }
`;

const MovieItems = styled.ul`
  display: grid;
  grid-template-columns: (1fr, 1fr);
  list-style: none;
  margin: 20px;
  cursor: pointer;
  flex-wrap: wrap;
`;
