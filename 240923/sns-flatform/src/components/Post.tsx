//firebase에서 받은 값을 출력해줄 것.
import React, { useState } from "react";
import styled from "styled-components";
import { Ipost } from "./TimeLine";
// timeline에서 만든 타입을 정의해둔 걸 가져왔음
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  ref,
  getDownloadURL,
  StorageError,
} from "firebase/storage";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border: 1px solid #ffffff50;
  border-radius: 15px;
  padding: 20px;
  gap: 10px;
  /* margin-bottom: 20px; */
  background: #ffffff50;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 15px;
`;
const Video = styled.video`
  width: 200px;
  height: 100%;
  border-radius: 15px;
`;

const UserName = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const PayLoad = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const DeleteButton = styled.button`
  background: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const Post = ({ username, post, photo, video, userId, id }: Ipost) => {
  //TimeLine 컴포넌트에게 프롭스로 데이터를 받음
  // console.log(props);
  const [isEditing, setIsEditing] = useState(false);
  const [editPost, setEditePost] = useState(post);
  const [editPhoto, setEditPhot] = useState<File | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditePost(e.target.value);
  };
  const handlecancle = () => {
    setIsEditing(false);
  };
  const handleEdit = async () => {
    setIsEditing(true);
  };

  const user = auth.currentUser;
  const onDelete = async () => {
    //1, 파이어베이스의 db값을  찾아와야한다. --> 삭제는 찾아올때까지 기다려야한다 --> async
    const ok = confirm("Are you sure you want to delete this post?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, `contents`, id));
      if (photo) {
        const photoRef = ref(storage, `contents/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  return (
    <Wrapper>
      <Column>
        <UserName>{username}</UserName>
        <PayLoad>{post}</PayLoad>
        {user?.uid === userId ? (
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        ) : null}
      </Column>
      {photo ? (
        <Column>
          <Photo src={photo} />
        </Column>
      ) : null}
      {video ? (
        <Column>
          <Video src={video} />
        </Column>
      ) : null}
    </Wrapper>
  );
};

export default Post;
