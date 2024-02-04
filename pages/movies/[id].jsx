import { useRouter } from "next/router";
import MovieDetails from "../../components/MovieDetails";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2MTE0MjJlZTc5MjYyZTRkNzIxNDJkM2I4NmRlYSIsInN1YiI6IjY1YmNhMTIzMmQxZTQwMDE4NDVkNzkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MNDWzDog5Vj5irJpOcDKJxcx4v-OyxVQ4Dt0-NgvYRE";

const fetchFromApi = (url) => {
    return fetch(url, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
  })
    
}

export default function MovieDetailsPage({ movie }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
}

export async function getServerSideProps (context) {
  const { id } = context.params;

  const response = await fetchFromApi(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
  const movie = await response.json();

  return {
    props: { movie },
  };
};