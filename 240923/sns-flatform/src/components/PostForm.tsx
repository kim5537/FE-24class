import { addDoc, collection, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
//사용자가 넣은 내용 관리가 필요하기 때문
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextArea = styled.textarea`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  height: 250px;
  resize: none;
  &::placeholder {
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    outline: none;
    border-color: #1d9bf9;
  }
`;
const AttachFileButton = styled.label`
  width: 100%;
  color: #1d9bf9;
  font-size: 16px;
  font-weight: 600px;
  border: 1px solid #1d9bf9;
  border-radius: 20px;
  text-align: center;
  padding: 10px 0;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid transparent;
    background-color: #1d9bf9;
    color: #fff;
  }
`;
const AttachFileInput = styled.input`
  display: none;
`;
const SubmitBtn = styled.input`
  background: #fff;
  color: #1d9bf9;
  border: none;
  border-radius: 20px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600px;
  opacity: 0.8;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState("");
  const [file, setFile] = useState<File | null>(null);
  //업로드 데이터를 관리하는 state
  const maxFileSize = 3 * 1024 * 1024; // 최대 3메가를 주겠다는 의미. - 시작이 바이트
  const onchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      if (files[0].size > maxFileSize) {
        alert("The Maximum Capacity that can be uploaded is 5MB");
        return;
      }
      setFile(files[0]);
    }
  };

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || isLoading || post === "" || post.length > 180) return;
    try {
      setIsLoading(true);
      const doc = await addDoc(collection(db, "contents"), {
        post,
        createdAt: Date.now(),
        username: user?.displayName || "Anonymous",
        userId: user.uid,
      }); // firebase db의 값을 생성하는 것.
      if (file) {
        const locationRef = ref(storage, `contents/${user.uid}/${doc.id}`);
        //ref() 스토리지 안 값을 찾아오는 함수이다. - firebase함수
        //우리가 contents로 파이어베이스에 db를 만들어 뒀기 때문에 편의를 위해 contents로 작명함.
        // 파이어베이스 스토리지 폴더 경로를 만드는 것 ==> contents란 폴더가 생기고 그 안에 user.uid 이름의 폴더가 생기며 그 안에 이미지가 저장된다.
        const result = await uploadBytes(locationRef, file);
        // 파이어베이스 스토리지에 있는 함수이다. 인과받은 스토리지 데이터와 경로값이 있으면 올려주는 함수이다.
        //2-3개의 인자값을 받는다. 어디에 업로할건지와 데이터를 찾아와야한다. - locationRef를 만든 이유
        //locationRef의 경로에 값이 저장될 것이다.
        //이제 값을 받아와야한다. = result로 변수명을 만든 이유
        const url = await getDownloadURL(result.ref); // 스토리지에 저장된 주소값을 인자값을 받는다.
        const fileType = file.type; //return부분에 AttachFileInput에서 accept가 있어 가능하다.
        if (fileType.startsWith("image/")) {
          //스토리지를 보면 유형이 있음.
          await updateDoc(doc, {
            photo: url,
          });
        }

        if (fileType.startsWith("vedio/")) {
          await updateDoc(doc, {
            video: url,
          });
        } // 경로와 데이터(객체형태를 만들었음) 두가지 값을 인자값을 받는다.
        // await가 없으면 db에  t스토리지 이미지의 url이 안 들어간다.우리는 db에 photo값이 없는 걸 보고 await를 넣었고 그렇게 오류를 수정했다.
      } // db와 스토리지를 연결하여 미디어 컨텐츠 업로드 시키기.
      setPost("");
      setFile(null);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Form onSubmit={onsubmit}>
      <TextArea
        onChange={onchange}
        value={post}
        name="contents"
        id="contents"
        placeholder="What is Happening?"
        required
      ></TextArea>
      <AttachFileButton htmlFor="file">
        {file ? "Contens Added💌" : "Add📩"}
      </AttachFileButton>
      <AttachFileInput
        onChange={onFileChange}
        type="file"
        id="file"
        accept="video/*,image/*"
      />
      <SubmitBtn type="submit" value={isLoading ? "Posting..." : "Post"} />
    </Form>
  );
};

export default PostForm;
