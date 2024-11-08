import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { searchContents, GetMoviesResult, searchGeneres } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.main`
  margin-top: 60px;
  width: 100%;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const MovieImg = styled.img`
  width: 50%;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 40px;
  background: ${({ theme }) => theme.red};
  border-radius: 8px;
  padding: 0 10px;
  color: ${({ theme }) => theme.white.lighter};
`;

const MovieOverView = styled.p`
  font-size: 24px;
  line-height: 1.6;
  border-top: 1px solid ${({ theme }) => theme.black.lighterDark};
  border-bottom: 1px solid ${({ theme }) => theme.black.lighterDark};
  padding: 20px 0;
`;

const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background-color: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.black.lighterDark};
  color: ${({ theme }) => theme.white.lighter};
  text-align: center;
  line-height: 50px;
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background-color: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background-color: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const Search = () => {
  // const location = useLocation();
  // console.log(location);
  // const { search } = useLocation();
  // const key = search.split("=")[1];
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  // const contents = searchContents(keyword);
  // console.log(contents);

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });

  return (
    <Container>
      {movieLoading ? (
        <div>isLoading...</div>
      ) : (
        <>
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg src={makeImagePath(movie.backdrop_path)} />
                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)}</span>
                    <RateNumbers>
                      <span>
                        Members : {movie.vote_count?.toLocaleString("ko-kr")}
                      </span>
                    </RateNumbers>
                    <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  </MovieRate>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
