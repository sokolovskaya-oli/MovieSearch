const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2MTE0MjJlZTc5MjYyZTRkNzIxNDJkM2I4NmRlYSIsInN1YiI6IjY1YmNhMTIzMmQxZTQwMDE4NDVkNzkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MNDWzDog5Vj5irJpOcDKJxcx4v-OyxVQ4Dt0-NgvYRE";

const fetchFromApi = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export { fetchFromApi };
