import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth, storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
//스토리지 관련 함수들
// getDownloadURL > 스토리지에 특정 파일 다운로드 url을 가져온다. 이 url을 통해 파일에 접근 .
// ref > 스토리지 내에 특정 파일 경로를 참조하는 함수 . 파일을 업로드하거나 다운로드 할 때 파일의 경로를 참조한다.
// uploadBytes  > 파일릉ㄹ 스토리지에 업로드하는 함수. - 파일 데이터를 바이트 형태로 업로드한다.
import { updateProfile } from "firebase/auth";
//Firebase Authentication에서 사용자의 프로필 정보를 업데이트한다. 이름 프로필등 변경시 사용
// Authentication(로그인 회원가입 기능으로 해당 부분에 이 사이트 가입자에 대한 정보가 있다.)
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
//database 관련함수
//collection > 특정 컬렉션을 참조하는 함수 | 컬랙션 = db에 제일 큰 폴더.
//getDocs > 해당 컬랙션이나 쿼리 결과의 문서를 가져오는 함수 - 데이터를 가져오는 함수,(아랫줄로)
// 여러개의 파일을 꺼내오는 기능-컬렉션을 기준으로 그 안에 있는  모든 문서를 한번에 가져온다.
//limit > Firestore에서 쿼리 시 가져올 문서의 수를 제한하는 함수.
// orderBy > 문서를 정렬해주는 함수. 우리는 최신정렬등을  하기 위한 목적으로 가져왔다.
//query > firestore에서 조건을 적용한 쿼리를 만드는 함수. 특정 조건을 만족하는 데이터를 가져오기 위한 목적
// where > 특정 조건을 설정하는 함수. 특정 필드가(컬랙선 밑 해당 사용자 폴더같은 곳. 그 안에 그 유저가 작성한 정보들이 저장된다.)

import { Ipost } from "../components/TimeLine"; //타입정의해둔 것.
import Post from "../components/Post"; //업로드한 포스트들

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AvatarUpload = styled.label`
  width: 80px;
  height: 80px;
  background: #1d9df0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 50px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
`;

const AvatarInput = styled.input`
  display: none;
`;

const Name = styled.span`
  font-size: 22px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ChangeNameButton = styled.button`
  background: #3b3a3a;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
`;

const NameInput = styled.input`
  background: #000;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 8px 10px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Profile = () => {
  // console.log(` auth값`);
  // console.log(auth);
  // console.log(`currentUser값`);
  // console.log(auth.currentUser);
  //우리가 firebase에서 정의한 auth는 우리의 정보가 들어가 있다.
  const user = auth.currentUser;
  // console.log(user);
  const [avater, setAvatar] = useState(user?.photoURL || null || undefined);
  //유저 프로필 이미지가 있는지 관리목적state
  const [posts, setPosts] = useState<Ipost[]>([]); // 데이터베이스틑 객체형태들이 배열로 되어있다.
  const [name, setName] = useState(user?.displayName ?? "Anonymouse"); // 이름을 업데이트 할 목적.
  const [editMode, setEditMode] = useState(false);

  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files);
    //해당 이벤트는 이미지를 추가 할 때 발생하는데 이때 이벤트 타겟엔 files가 있고 이 배열 안ㅌ에는 lenght값과  name키 안에 value로 파일의 링크가 들어가 있다.
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user?.uid}}`); //저장될 주소를 정의하는 함수- ref() (스토리지(우리의 권한을 담을 변수-firebase컴포넌트안에 있다 , 담을 스토리지내에 폴더명-여기서 지정가능.기존에 있으면 거기에 넣어줌 ,))
      const result = await uploadBytes(locationRef, file);
      //값을 들고 오길 기다려야함. 당연히 async가 붙어야 await 가능 || uploadBytes 파이어베이스 함수로 업로들할 컨텐츠의 바이트 정보를 받아올 수 있도록 하는 함수이다. (업로드할 스토리지폴더 위치 , 넣을 값)
      const avatarUrl = await getDownloadURL(result.ref);
      //getDownloadURL - 스토리지에서 해당 경로의 파일의 url을 추출하는 함수이다.
      setAvatar(avatarUrl);
      await updateProfile(user, { photoURL: avatarUrl });
      //updateProfile - 인증되어진 사용자의 정보(프로필정보를 말함 이름 프로필사진등등)를 업데이트 해주는 firebase 함수이다. (업데이트 대상 사용자객체,{변경키값 : 신규값})
      //photoURL은 firebase에 auth.current(100번째 user 변수에 넣은 유저정보)객체 안에 있는 해당 사용자의 프로필이미지 url 이다
      //firebase의 스토리지에 프로필을 저장해두었었고 그 저장한 스토리지 주소값을 말한다.
    }
  };

  const fetchPosts = async () => {
    //구글파이어스토어에 데이터를 가져올 것 - 컴포넌트 마운트시 끌고올 것.-- useEffect에서 실행할 것
    //파이어스토어도 쿼리값을 찾아온다 라고 표현함 -->query() - 어떠한 값을 찾아오는 함수 (무슨값을 찾아올지 , ?어떤 조건으로 찾아올지)
    const postQuery = query(
      collection(db, "contents"),
      where("userId", "==", user?.uid), // (필터링할 필드 , 비교연산자 , 비교값)
      orderBy("createdAt", "desc"),
      limit(25)
    );
    //collection() - 파이어베이스 뭐든 컬렉션이라는  상위요소에서 db가 만들어진다 즉 그 콜렉션을 말하는것 (권한 , "찾아오는 곳-폴더")
    //where() - (우리의 필드 , 조건값(== : 같은것), 유저의 아이디(우리가 폴더를 아이디로 ))
    //orderBy 오름차순 내림차순
    console.log(postQuery);
    const snapShot = await getDocs(postQuery); //promise 반환
    const posts = snapShot.docs.map((doc) => {
      const { createdAt, photo, video, post, userId, username } = doc.data();
      return {
        createdAt,
        photo,
        video,
        post,
        userId,
        username,
        id: doc.id,
      };
    });
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNameBtn = async () => {
    if (!user) return;
    setEditMode((prev) => !prev);
    if (!editMode) return;
    try {
      await updateProfile(user, {
        displayName: name,
      }); //firebase 함수로 비동기이기 때문에 wait가 필요함
    } catch (e) {
      console.log(e);
    } finally {
      setEditMode(false);
    }
  };

  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {Boolean(avater) ? (
          <AvatarImg src={avater} />
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
        )}
        {/* 0 null undefinde 빼고 true. 즉 아바타(프로필이미지)가 있다면 이라는 뜻*/}
      </AvatarUpload>
      <AvatarInput
        id="avatar"
        type="file"
        accept="image/*"
        onChange={onAvatarChange}
      />
      {/* <Name>{user?.displayName ? user.displayName : "Anonymous"}</Name>  이걸 줄이면 밑에. 같은 내용이다.*/}
      {editMode ? (
        <NameInput onChange={onChangeNameInput} value={name} />
      ) : (
        <Name>{user?.displayName ?? "Anonymous"}</Name>
      )}
      <ChangeNameButton onClick={onChangeNameBtn}>
        {editMode ? "Save" : "New"}
      </ChangeNameButton>
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        {/*이렇게 하면 인덱스값이 필요하다. 파이어스토어 db는 쿼리를 쓸 때는 반드시 인덱스라는 색인을 줘야한다.콘솔에 뜬 에러문구에 링크 클릭해서 파이어베이스에 들어가서 설정하면 된다. 색인 만들기 */}
      </Posts>
    </Wrapper>
  );
};

export default Profile;
