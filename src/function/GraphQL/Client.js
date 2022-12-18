import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httplink = new HttpLink({
  uri: "https://e01751fa-f34d-46f0-8c94-58c6269538f0.mock.pstmn.io/trying/get",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httplink]),
});
