import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wisharoo.nw.r.appspot.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
