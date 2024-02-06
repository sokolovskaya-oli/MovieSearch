import { NextResponse } from "next/server";
import { fetchFromApi } from "../../common";

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