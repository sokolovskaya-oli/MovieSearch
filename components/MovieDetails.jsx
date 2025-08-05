import styled from "styled-components";

export default function MovieDetails({ movie }) {
  return (
    <MovieDetailsContainer>
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

      <LinkHome href={"/"}>Back to home page</LinkHome>
    </MovieDetailsContainer>
  );
}

const MovieDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background-color: #f1f1f2;
  border-radius: 30px;
  margin-top: 20px;
  padding-top: 20px;

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
  width: 400px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  display: block;
  overflow: hidden;
`;
const LinkHome = styled.a`
  text-decoration: none;
  color: #1995ad;
  font-weight: bold;
`;
const Des = styled.p`
  font-size: 20px;
  padding: 0 40px;
  margin-bottom: 10px;
`;
const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;
