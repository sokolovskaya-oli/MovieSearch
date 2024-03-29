import React, { useState } from 'react';
import styled from 'styled-components';

export default function SearchBar({ getMovies }) {
  const [query, setQuery] = useState('');
  const handleSearch = async (e) => {
    e.preventDefault();
   
    if (query.trim() === '') {
      return;
    }
      getMovies(query, 1)
  };

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  width: 70%;
  padding: 15px;
  margin: 20px auto;
  background-color: #f1f1f2;
  border-radius: 20px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content:center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #1995ad;
  border-radius: 10px;
  @media (max-width: 425px) {
    margin:0 0 15px 0;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #1995ad;
  border-radius: 10px;
  color: #f1f1f2;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a1d6e2;
  }
`;