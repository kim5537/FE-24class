import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Post from "./Post";

export interface Ipost {
  id: string;
  //문서안의 값 컬렉션 > 문서> 필드 형식으로 정렬되어있다.. 하단은 필드안 값이고 id는 필드를 포함한 문서를 뜻한다.
  createdAt: number;
  photo?: string;
  video?: string;
  //뒤에 ? 주면 옵션널한 쿼리값을 말한다 값이 있을수도 있고(string) 없을수도 있다(undefind)는 의미.
  post: string;
  userId: string;
  username: string;
}
// 타임라인 데이터를 외부에서 쓸 수 있기 때문- 객체의 타입정의는 interface라고 외우자
//파이어스토어 db와 같은 형식으로 객체를 만들고 있다. 우리는 값을 가져오기 위해 해당 값들의 형태를 정의해주고 있다.

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 0 10px;
`;

const TimeLine = () => {
  const [posts, setPosts] = useState<Ipost[]>([]); // 포스트아이템 --> 자료가 객체형태로 되어있고 이는 배열로 묶어 관리하는게 베스트.
  //타입정의 ==> 배열로 가져오는데 안에 뭐가 올지 모른다. 배열의 타입을 정의하는데 그 안에는 Ipost라는 타입을 가지고 있을 거라는 의미이다.
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null; // 최엔 아무런 값도 없는 값이다.
    const fetchPosts = async () => {
      // firestore에서 값을 찾아오는 함수.
      const postsQuery = query(
        collection(db, "contents"),
        orderBy("createdAt", "desc"),
        limit(25)
      ); // firestore의 함수를 사용해서 값을 찾아온다. 해당 함수는 최소 하나의 인자값을 받고 어떤 컬렉션의 값을 찾아올지 정의해줘야한다.
      //collection은 파이어스토어와 패스값을 인자값으로 받는다. -> 우리가 db에서 컬렉션 명을 contents라고 명했기 때문에 contents의 값으로 저장되어있다. 그래서 db에서 contents라는 이름의 컬렉션을 찾아오라는 말이다.
      //orderBy("createdAt", "desc")어떠한 정렬의 순서를 정의하기 위한 파이어스토어 함수이다.
      //createdAt값은 밀리초 값이다. 따라서 최신순 정렬을 하려면 내림차순해야한다.
      //asc 오름차순 || desc는 내림차순이다.
      // const snapshot = await getDocs(postsQuery); //리얼타임으로 실행되지 않는다.
      // const posts = snapshot.docs.map((doc) => {
      //   //docs는 배열이다.
      //   const { createdAt, photo, video, post, userId, username } = doc.data();
      //   //문서의 id값은 doc의 id 이다.
      //   return {
      //     id: doc.id,
      //     createdAt,
      //     photo,
      //     video,
      //     post,
      //     userId,
      //     username,
      //   };
      // });
      unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
        //작은 요소를 변경되어도 한꺼번에 firebase의 모든걸 사용하게 된다.
        // 기존의 5개의 컨텐츠가 올라가 있는데 만약 신규컨텐츠 하나가 생긴다.
        //그럼 기존꺼 까지 합쳐서 6개를 업로드 한다고 인식한다. 그래서 종결이 된다면 unsubscrip을 가지고 잇가.
        const posts = snapshot.docs.map((doc) => {
          const { createdAt, photo, video, post, userId, username } =
            doc.data();
          return {
            id: doc.id,
            createdAt,
            photo,
            video,
            post,
            userId,
            username,
          };
        });
        setPosts(posts);
      });
    };
    fetchPosts();
    return () => {
      unsubscribe && unsubscribe();
    }; // 더이상 파이어베이스를 사용하고 있지 않다고 말해주는 것. 즉 데이터를 굳이 사용하지 않도록 클린업을 해준것이다.
  }, []); // 빈배열 => 컨포넌트가 마운트되는 최초의 한번 이벤트 발생
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
  //return <Wrapper>{JSON.stringify(posts)}</Wrapper>;
  //posts는배열의 형태이기 때문에 {posts}로 가져오면 애러가난다. 그래서 배열을 문자형태로 만들어사용하였다. 확인을 위해
};

export default TimeLine;
