import { NextResponse } from "next/server";

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


async function fetchMovies(page = 1) {
  const response = await fetchFromApi(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`);
  const movies = await response.json()
  return movies
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const movies = await fetchMovies(page);

  return NextResponse.json({
    results: movies.results,
    page: movies.page,
    total_pages: movies.total_pages,
  });
}



