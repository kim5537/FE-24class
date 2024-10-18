import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { moviesAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/movieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.main`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 20px 0 10px;
  padding: 10px;
  /* background: crimson;
  width: 200px; */
`;

const Home = () => {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upComingMovie, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(moviesAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" loading={loading} size={150} />
      </Wrapper>
    );
  } else {
    return (
      <div>
        <Banner movie={popularMovie.results[0]} />
        <Title>Popular Movie</Title>
        <MovieSlide movies={popularMovie} />
        <Title>TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming Movie</Title>
        <MovieSlide movies={upComingMovie} />
      </div>
    );
  }
};

export default Home;
