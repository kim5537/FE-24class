import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import path from "path";

const Container = styled.div`
  width: 100%;
  height: 2000px;
  margin-top: 60px;
  background: ${(props) => props.theme.black.lighterDark};
  overflow-x: hidden;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: ${({ theme }) => theme.red};
`;

interface BgPhoto {
  bgPhoto: string | undefined;
}

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  color: ${(props) => props.theme.white.darker};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;

const OverView = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  top: -20px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string | undefined }>`
  width: auto;
  height: 200px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  position: relative;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.red};
  }
`;

const ModalBox = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  /* transform: translate(-50%, -50%); */
  background: ${(props) => props.theme.black.lighterDark};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: fixed; //최상위 요소의 크기값을 가져가기 때문에 풀로 덮을 수 있다.
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const MovieCover = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

//  src={makeImagePath(clickedMovie.backdrop_path, "w500")}
//                       alt="movieImg"

const MovieTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 28px;
  padding: 20px;
  position: relative;
  top: -80px;
`;

const MovieOverView = styled.p`
  padding: 0 20px;
  line-height: 2;
  font-size: 20px;
  position: relative;
  top: -60px;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -50,
    transition: { delay: 0.5, duration: 0.3, type: "tween" },
  },
};

const inforVariants = {
  hover: {
    opacity: 0.8,
    transition: { delay: 0.5, duration: 0.3, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId"); // ui작업중 에러가 생길 수 있기 때문에 미리 타입을 지정해준다.
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { scrollY } = useScroll();

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data?.results.length - 2; //20개의 데이터중 우린 18개만 사용할거임
      const maxIndex = Math.ceil(totalMovies / offset) - 1; //ceil 반올림
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history(`/`);
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === movieMatch.params.movieId
    );

  console.log(clickedMovie);
  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[2].backdrop_path || "")}
          >
            <Title>{data?.results[2].original_title}</Title>
            <OverView>{data?.results[2].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              {/* onExitComplete 애니메이션이 완료되면 실행되는 함수*/}
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      <Info variants={inforVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  style={{ top: scrollY.get() + 60 }} // 꼭 인라인으로 직접해야 먹음
                  layoutId={movieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: ` linear-gradient(to top, #000 , transparent) ,url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
