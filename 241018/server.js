// const { ApolloServer } = require("apollo-server"); //cjs 방식 -> 과거 문법. 지금도 사용하긴 함
import { ApolloServer, gql } from "apollo-server";

//3. 목업을 만들어 보자
let tweets = [
  {
    id: "1",
    text: "First one!",
    userId: "2",
  },
  {
    id: "2",
    text: "Second one!",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "David",
    lastName: "Peter",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

// 1. 타입지정
// const typeDefs = gql`
//   type Query {
//     text: String
//     film: String
//     allFilms: String
//   }
// `; //타입을 정의 하는 것. - 스키마

//전 데이터를 정의하고 특정 데이터를 분리해서 정의할 것
//숫자 + 문자 의 타입은? ID 라고 한다 - 이런 상황에 대비해 미리 정의해뒀다. ==> 이런 내장타입을 scalar 타입이라고 부른다.
//최초의 타입을 정의하는 query에서는 []를 사용하지만 그 후부터는 특정 경우가 아니면 사용하지 않느다
const typeDefs = gql`
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String
    title_english: String
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String!]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String
    medium_cover_image: String!
    large_cover_image: String!
  }
  type User {
    id: ID!
    """
    Is the sum of firstName + lastName as a String
    """
    username: String!
    firstName: String!
    lastName: String!
  }
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    allUsers: [User!]!
    allMovies: [Movie!]!
    tweet(id: ID): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a tweet if found , else returns false
    """
    deleteTweet(id: ID): Boolean!
  }
`;
// 예를 들어 설명해보자 - sns 플렛폼
// REST API = Get /snsplaform/allTweets
// REST API = Get /snsplaform/Tweet

//막약 tweet에 100개의 데어터중 2번째 데이터만 달라고 한다면? tweet(id : ID): Tweet 이렇게 아이디를 준다.
//mutantion 타입  - Get이 아닌 Post를 사용할 때 사용한다. 값을 변화하는 것이기 때문
//Query 안은 다 함수이다
//postTweet(text: String , userId: ID) : Tweet 이는 매개변수를 받는 함수를 정의한 것이다. 해당값을 Tweet으로 보낸다는 의미이다.
// !는 꼭있어야하는 값을 말한다. 리콰일드 값이라고 부름 -  non-nullable타입이라고 한다 .값이 없으면 error가 뜬다.
//root ==> 서버에 저장된 원본 데이터를 말한다.

//2.함수 지정
//함수를 지정할 것. 객체안의 함수를 담는것. 그렇기 때문에 실제 형태는 객체. 그리고 값을 반환하는 함수를 넣을것이다. = 우리가 위에 설계해 준 구조에서 반환값을 실행하는 것을 정의할 역할
// const resolvers = {
//   Query: {
//     tweet() {
//       console.log("I'm called");
//       return null;
//     },
//     ping() {
//       return "pong";
//     },
//   },
// };

// const resolvers = {
//   Query: {
//     allTweets() {
//       return tweets;
//     },
//     tweet(root, args) {
//       console.log(args);
//       return null;
//     },
//   },
// };
// args = 아규먼트라고 부른다. root와 args 는 순서가 바뀌면 안된다. 이건 문법이다.
//root = 클라이언트에게 매칭되는 값을 찾아오는 루트값이다. - 여기선 위에 지정한 tweets다
//arge = 우리가 id로 지장한 값을 말한다. 대부분 동적파라미터와 연결된다.
//이는 구조분해할당이 가능하다.
const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    allUsers() {
      console.log("username called");
      return users;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response) => response.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    firstName({ firstName }) {
      return firstName;
    },
    lastName({ lastName }) {
      return lastName;
    },
    username({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다.");
        return null;
      }
      return result;
    },
  },
};
//Mutation 는 기존의 값을 돌연변이 처럼 업뎃하는 것을 말한다. - 중요하니까 다시한번 더!!
//언제나 그랫듯 root 자리는 비워놔야한다.
// 다이나믹 필드 == user의 값을 말한다.
// User: {
//   username(root) {
//     console.log("userName Called !!");
//     console.log(root);
//     return "Hello";
//   },
// },

const server = new ApolloServer({ typeDefs, resolvers }); //둘을 연결함

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
