import Link from "next/link";
import styled from "styled-components";

export default function MovieItem({ movie }) {
  return (
    <MovieDetailsContainer>
      <Link href={`/movies/${movie.id}`}>
        <Title>{movie.original_title}</Title>
        <MovieImage
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
        />
        <h3>Rate: {movie.vote_average}</h3>
        <Des>{movie.overview}</Des>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
      </Link>
    </MovieDetailsContainer>
  );
}

const MovieDetailsContainer = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background-color: #f1f1f2;
  border-radius: 30px;
  margin-top: 20px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
  border: 1px solid #1995ad;
  &:hover {
    transition: 1s ease-out;
    background-color: #bcbabe;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
    padding: 0 40px;
    margin-bottom: 10px;
  }
`;

const MovieImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  display: block;
  overflow: hidden;
`;
const Des = styled.p`
  font-size: 18px;
  padding: 0 40px;
  margin-bottom: 10px;
  height: 38px;
  overflow: hidden;
`;
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  height: 30px;
  overflow: hidden;
`;
