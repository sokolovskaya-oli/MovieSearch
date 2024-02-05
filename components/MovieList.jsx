import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieList({ movies, currentPage, totalPages, onPageChange }) {
   return (
    <MovieListContainer>
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.original_title}
                width={220}
                height={300}
              />
              <h3>{movie.original_title}</h3>
              <p>Rate: {movie.vote_average}</p>
            </Link>
          </MovieItem>
        ))}
      </ul>
      <PaginationContainer>
        <span>Page {currentPage} of {totalPages}</span>
        <div>
          <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </PaginationButton>
          <PaginationButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
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

  ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: center;
  }
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

  div{
    @media (max-width: 425px) {
    margin-top:10px;
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
  &:first-child{
    @media (max-width: 425px) {
      margin-left:0;
    }
  }
 `;

const MovieItem = styled.li`
  list-style: none;
  width: 320px;
  height: 420px;
  padding: 20px;
  margin: 20px;
  background-color: #f1f1f2;
  border: 1px solid #1995ad;
  border-radius: 15px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;

  &:hover{
    transition: 1s ease-out;
    background-color: #bcbabe;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight:500;
  }

  h3{
    text-align: center;
    height:25px;
    margin: 15px 0;
    overflow: hidden;
  }
  
   img{
    border-radius: 15px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.3);
   }
`;