import api from "../api";

// const API_KEY = process.env.VI~~
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
    );
    const topRatedMovieApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
    );
    const upComingMovieApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
    );
    const [popularMovie, topRatedMovie, upComingMovie] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upComingMovieApi,
    ]); // 데이터를 한번에 찾아 오겠다.라는 바닐라자바 문법
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovie: popularMovie.data,
        topRatedMovie: topRatedMovie.data,
        upComingMovie: upComingMovie.data,
      },
    });
  };
};

export const moviesAction = { getMovies };
