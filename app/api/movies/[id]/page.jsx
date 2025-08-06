import MovieDetails from "../../../../components/MovieDetails";
import { fetchFromApi } from "../../common";

export async function generateMetadata({ params }) {
  return {
    title: `Movie | ${params.id}`,
  };
}

export default async function MoviePage({ params }) {
  const response = await fetchFromApi(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`
  );
  const movie = await response.json();

  return <MovieDetails movie={movie} />;
}
