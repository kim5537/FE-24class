import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
//반드시 uri 라는 키를 사용해서 주소를 가져와야한다.

client
  .query({
    query: gql`
      {
        allMovies {
          title
          id
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
