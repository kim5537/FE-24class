import api from "../api";

// const API_KEY = process.env.VI~~
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
      });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
      );
      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
      );
      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
      );
      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=ko`
      );
      const [popularMovie, topRatedMovie, upComingMovie, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genreApi,
        ]); // 데이터를 한번에 찾아 오겠다.라는 바닐라자바 문법
      console.log(genreList);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovie: popularMovie.data, //해당 객체에서 data라는 키값 안에 들어있다.
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          genreList: genreList.data.genres,
          loading: true,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIRUTE",
      });
    }
  };
};

export const moviesAction = { getMovies };
