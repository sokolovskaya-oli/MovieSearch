import { fetchFromApi } from "@/app/common";
import MovieDetails from "@/components/MovieDetails";

export default async function MovieDetailsPage({ params }) {
  const { id } = params;

  const res = await fetchFromApi(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );
  const movie = await res.json();

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
}
