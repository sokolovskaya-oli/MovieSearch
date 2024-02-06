import { NextResponse } from "next/server";
import { fetchFromApi } from "../common";

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



