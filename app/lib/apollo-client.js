import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://tmdb-api.saeris.io/.netlify/functions/tmdb-api",
  }),
  cache: new InMemoryCache(),
});

export default client;
