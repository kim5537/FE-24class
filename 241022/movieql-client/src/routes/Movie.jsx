import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  margin-top: 20vh;
  text-align: center;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  /* margin-bottom: 15px; */
  margin: 15px 0 20px;
`;

const SunTitle = styled.h4`
  font-size: 35px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: crimson;
    color: #fff;
  }
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;

const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 700px;
  background: url(${(props) => props.bg}) no-repeat center top/cover;
  border-radius: 10px;
`;

//GET_MOVIE라는 쿼리의 이름을 지정한 것. - 우리는 서버에서 이미 id를 받으면 movie를 찾아오게 정의해두었다.
//서버에는 isLiked는없다. 우리는 캐시에서 이걸 관리할 예정이다 그럴때  @client 를 붙치면 된다 이를 Local Only Field data라고 부른다.
const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  // const result = useQuery(GET_MOVIE, {
  //   variables: {
  //     MovieId: id,
  //   },
  // }); //이번에는 파라미터값을 사용해서 출력할 수 있는 요소-> 해당값은 객체로 보낸다
  // console.log(result);
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  }); //이번에는 파라미터값을 사용해서 출력할 수 있는 요소-> 해당값은 객체로 보낸다

  const onClick = () => {
    //writeFragment : 캐시값을 제어하는 함수.
    //캐시는 isLike라는게 뭔지 모르기 때문에 fragment를 선언후 gql함수를 사용해 A on B = B는 A안에 있는 거야 알려주는 것. 식별해주는 정의 == MovieFragment방안에 서버에 있는 것을 담아준것.서버는 모르고 우리만 아는 것.
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <SunTitle>⭐{data.movie.rating}</SunTitle>
          <Button onClick={onClick}>
            {data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima
            qui id et quia officia. Ea, necessitatibus officia hic culpa est
            exercitationem consequatur ut aliquam reprehenderit id, veniam
            laudantium nobis.necessitatibus officia hic culpa est exercitationem
            consequatur ut aliquam reprehenderit id, veniam laudantium nobis.
          </Description>
        </Column>
        <Image bg={data.movie.medium_cover_image} />
      </ItemGroup>
    </Container>
  );
};

export default Movie;
