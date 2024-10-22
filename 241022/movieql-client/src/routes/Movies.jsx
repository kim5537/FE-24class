import React, { useState, useEffect } from "react";
import { useApolloClient, gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-45deg, #d754ad, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  margin-top: 20vh;
  text-align: center;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 60vw;
  margin-top: -50px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

const PosterBg = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

// useApolloClient : 클라디언트로  찾아온 데이터를 받아서 실제  브라우저에 출력할 수 있는 가교 역할
//useQuery :   useState, useEffect 의 역할을 해준다. 심지어 송신상태에 따라 불리언값을 제출

//깔끔하게 적기 위해 useQuery를 사용 할 것. 때문에 작성함
const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
    }
  }
`;

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // const client = useApolloClient();
  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           allMovies {
  //             title
  //           }
  //         }
  //       `,
  //     })
  //     .then((results) => setMovies(results.data.allMovies));
  // }, [client]);

  // 깔끔하게 적기

  // const results = useQuery(ALL_MOVIES);
  // console.log(results);
  const { data, loading } = useQuery(ALL_MOVIES);
  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      {/* {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))} */}
      <Header>
        <Title>Movise List</Title>
      </Header>
      <MoviesGrid>
        {data.allMovies.map((movie) => (
          <PosterContainer key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={movie.medium_cover_image} />
            </Link>
          </PosterContainer>
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default Movies;
