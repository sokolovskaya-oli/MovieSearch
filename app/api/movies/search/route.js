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

async function fetchMovies(query, page = 1) {
  try {
  const response = await fetchFromApi(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`)
  const movies = await response.json()
  return movies
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; 
  }
};

export async function GET(request){
  const {searchParams} = new URL(request.url);
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;
  const movies = await fetchMovies(query, page);

  return NextResponse.json(movies);
}