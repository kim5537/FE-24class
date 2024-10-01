//firebase에서 받은 값을 출력해줄 것.
import React, { useState } from "react";
import styled from "styled-components";
import { Ipost } from "./TimeLine";
// timeline에서 만든 타입을 정의해둔 걸 가져왔음
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  ref,
  getDownloadURL,
  StorageError,
  uploadBytesResumable,
  StorageErrorCode,
  uploadBytes,
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const EditorColumns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled.button`
  background: #7f8689;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

const EditPostFormTextArea = styled.textarea`
  background: #00000020;
  color: #fff;
  width: 94%;
  height: 50%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  resize: none;
  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    outline: none;
    border: 1px solid #1d9bf0;
  }
`;

const CancelButton = styled.button`
  background: #7f8689;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  background: #1d9bf0;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const SetContentButton = styled.label`
  color: #fff;
  svg {
    width: 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1d9df0;
    }
  }
`;

const SetContentInputButton = styled.input`
  display: none;
`;

const Post = ({ username, post, photo, video, userId, id }: Ipost) => {
  //TimeLine 컴포넌트에게 프롭스로 데이터를 받음
  // console.log(props);
  const [isEditing, setIsEditing] = useState(false);
  const [editPost, setEditePost] = useState(post);
  const [editedPhoto, setEditedPhoto] = useState<File | null>(null);

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

  const onUpdate = async () => {
    try {
      if (user?.uid !== userId) return;

      const postDoc = await getDoc(doc(db, "contents", id));
      if (!postDoc.exists()) throw new Error("Documents dose not exist");
      //exists()는 존재한다는 의미
      const postDate = postDoc.data();
      //postDoc 데이터를 가져오게 하는 함수
      if (postDate) {
        if (postDate.photo) postDate.fileType = "image";
        if (postDate.video) postDate.fileType = "video";
      }
      const exsitingFileType = postDate?.fileType || null;

      if (editedPhoto) {
        const newFileType = editedPhoto.type.startsWith("image/")
          ? "image"
          : "video";
        if (exsitingFileType && exsitingFileType !== newFileType) {
          alert("You can only upload the same type of contents");
          return;
        }
        const locationRef = ref(storage, `contents/${user.uid}/${id}`);
        const uploadTask = uploadBytesResumable(locationRef, editedPhoto);
        if (editedPhoto.size >= 5 * 1024 * 1024) {
          uploadTask.cancel();
          throw new StorageError(
            StorageErrorCode.CANCELED,
            "File size is over 5MB"
          );
        }
        const result = await uploadBytes(locationRef, editedPhoto);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc(db, "contents", id), {
          // 어떤 데이터값을 업데이트 시켜주는 함수
          post: editPost,
          photo: newFileType === "image" ? url : "",
          video: newFileType === "video" ? url : "",
          fileType: newFileType,
        });
      } else {
        await updateDoc(doc(db, "contents", id), { post: editedPhoto });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsEditing(false);
    }
  };

  const onClickSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) setEditedPhoto(files[0]);
  };

  return (
    <Wrapper>
      <Column>
        <UserName>{username}</UserName>
        {isEditing ? (
          <EditPostFormTextArea
            onChange={onChange}
            value={editPost}
            placeholder={post}
          ></EditPostFormTextArea>
        ) : (
          <PayLoad>{post}</PayLoad>
        )}

        <EditorColumns>
          {user?.uid === userId ? (
            <>
              {isEditing ? (
                <>
                  <CancelButton onClick={handlecancle}>Cancel</CancelButton>
                  <UpdateButton onClick={onUpdate}>Update</UpdateButton>
                  <SetContentButton htmlFor="edit-content">
                    <svg
                      // dataSlot="icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      />
                    </svg>
                    <SetContentInputButton
                      id="edit-content"
                      type="file"
                      accept="video/* ,img/*"
                      onChange={onClickSetContent}
                    />
                  </SetContentButton>
                </>
              ) : (
                <EditButton onClick={handleEdit}>Edit</EditButton>
              )}
              <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            </>
          ) : null}
        </EditorColumns>
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
