// const { ApolloServer } = require("apollo-server"); //cjs 방식 -> 과거 문법. 지금도 사용하긴 함
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    text: String
    film: String
    allFilms: String
  }
`; //타입을 정의 하는 것.

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
