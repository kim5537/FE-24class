import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {
  searchContents,
  GetMoviesResult,
  searchGeneres,
  getReviews,
  getVideos,
  Movie,
} from "../api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";

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
  border-radius: 8px;
  object-fit: cover;
`;

const ImgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border: 1px solid ${(props) => props.theme.black.lighterDark};
  border-radius: 8px;
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

const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.black.lighterDark};
  color: ${({ theme }) => theme.white.lighter};
  text-align: center;
  line-height: 50px;
`;

const ReviewSection = styled.div`
  background: ${(props) => props.theme.white.darker};
  color: ${(props) => props.theme.black.lighterDark};
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  li {
    padding: 10px;
  }
`;

const ReviewAuthor = styled.div`
  background: ${(props) => props.theme.white.lighter};
  width: 150px;
  text-align: center;
  margin-bottom: 8px;
  padding: 8px 0;
  border-radius: 8px;
`;

const ReviewContent = styled.div`
  font-size: 14px;
`;

const Generes = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
`;

const VideoSection = styled.div`
  margin-top: 30px;
`;

const StyledPageNation = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  ul {
    display: flex;
    gap: 10px;
    li {
      a {
        display: inline;
        color: ${(props) => props.theme.red};
        transition: color 0.3s;
        font-size: 20px;
        &:hover {
          color: ${(props) => props.theme.black.darker};
        }
      }
    }
  }
`;

interface GeneresItem {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface VideoContent<T> {
  [key: number]: T[];
}

const Search = () => {
  // const location = useLocation();
  // console.log(location);
  // const { search } = useLocation();
  // const key = search.split("=")[1];
  const [videos, setVideos] = useState<VideoContent<string>>({});
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

  const ids = movieData?.results.map((movie) => movie.id);

  //동시에 데이터를 끌고 오고 있다. 그래서 id를 사용하려면 영화 데이터를 기다려야한다. 떼문에 기존과 다른 방식으로 함수를 가져와야한다.
  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]), // 모든 데이터를 정상적으로 가져오면 실시하라는 말이다.
    enabled: !!ids, // ids값이 있을때만 가동하라는 의미
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
    enabled: !!ids,
  }); //캄포넌트 마운트 된 시점에서 state 값을 유지해 줘야한다. ==> useState useEffect
  // console.log(videoData);
  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({ ...prev, [movie.id]: videoIds }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(2);

  const indexOfLateMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLateMovie - moviesPerPage;
  const currentMovies: Movie[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLateMovie) || [];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      {movieLoading ? (
        <div>isLoading...</div>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg src={makeImagePath(movie.backdrop_path)} />
                ) : (
                  <ImgBox>Ready for Images</ImgBox>
                )}

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
                  </MovieRate>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <Generes>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genereData?.genres.find(
                            (item: GeneresItem) => item.id === id
                          ).name
                      )
                      .join(", ")}
                  </Generes>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>Movie Reviews</h3>
                {reviewLoading ? (
                  <div> Review Loading...</div>
                ) : (
                  <ul>
                    {reviewData ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <ReviewAuthor>{review.author}</ReviewAuthor>
                            <ReviewContent>{review.content}</ReviewContent>
                          </li>
                        )
                      )
                    ) : (
                      <li>No Reviews...</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{ width: "100%", height: "800px" }}
                  />
                ) : (
                  <div>"No Available"</div>
                )}
              </VideoSection>
            </SearchBox>
          ))}
          <StyledPageNation>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPageNation>
        </>
      )}
    </Container>
  );
};

export default Search;
