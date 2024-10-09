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
    // 해당함수는 이벤트를 확인 후 해당 내용을 useState를 이용하여 포스트 내용의 state 내용을 변경해주는 함수이다.
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    //콘솔로 확인해보면 이벤트객체안에  타켓에 files에 해당 파일의 경로값이 있다. 즉 해당 파일의 주소를 가져오는 것
    if (files && files.length === 1) {
      //파일을 업로드 할 시. 라는 의미이다. fires는 배열로 0번째에 해당 값을 저장함. 그래서 lengt가 1이면 파일을 하나 선택했다는 의미.
      if (files[0].size > maxFileSize) {
        alert("The Maximum Capacity that can be uploaded is 5MB");
        return;
      }
      setFile(files[0]);
    }
    //종합하면 이 함수는 해당 이벤트가 일어나면 그 이벤트 타겟안 파일의 경로를 찾고 파일의 존재여부를 확인 후 파일의 크기가 5mb 미만인지 확인 후에 해당 파일을 usestat에 file에 넣어주는 함수이다.
  };

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 해당 함수가 firebase와 연결하는 함수.
    e.preventDefault();
    const user = auth.currentUser;
    // 현재 작업하고 있는 사용자의 정보를 user라는 변수안에 넣는다.
    //currentUser안에는 그사람의 로그인 정보 및 프로필정보등이 들어가 있다. ->후에 나오는 uid안에는 현재 사용자의 ID가 들어있다.
    if (!user || isLoading || post === "" || post.length > 180) return;
    //안전을 위한 거름망/ 해당 작업을 하는 유저의 정보를 확인하고 유저 정보가 일치하지 않으면 포스트를 막는 함수이다.
    //유저를 확ㅇㄴ하고 로딩을 확인 후 포스트 내용이 있는지 그리고 그 내용이ㅏ 180자 안인지 확인 하는 것
    try {
      setIsLoading(true);
      const doc = await addDoc(collection(db, "contents"), {
        // firebase db의 값을 생성하는 것.
        post,
        createdAt: Date.now(),
        username: user?.displayName || "Anonymous",
        userId: user.uid, //useId
      });
      if (file) {
        //해당 if문은 파일을 스토리지에 저장하는 함수.
        const locationRef = ref(storage, `contents/${user.uid}/${doc.id}`);
        //ref() 스토리지 안 값을 찾아오는 함수이다. - firebase함수 - 해당 함수는 스토리지만 사용하는 함수로 db데이터 경로를 지정하거나 참조할 땐 찾을 땐 doc() 함수를 사용한다.
        //우리가 contents로 파이어베이스에 db를 만들어 뒀기 때문에 편의를 위해 contents로 작명함.
        // 파이어베이스 스토리지 폴더 경로를 만드는 것 ==> contents란 폴더가 생기고 그 안에 user.uid 이름의 폴더가 생기며 그 안에 이미지가 저장된다.
        // >> 업로드 할 파일의 경로를 지정하는 함수  == >locationRef 로 해당 경로를 변수로 정의해줌
        const result = await uploadBytes(locationRef, file);
        // 파이어베이스 스토리지에 있는 함수이다. 인과받은 스토리지 데이터와 경로값이 있으면 올려주는 함수이다.
        //2-3개의 인자값을 받는다. 어디에 업로할건지와 데이터를 찾아와야한다. - locationRef를 만든 이유
        //locationRef는 위에서 말했든 해당 파일의 스토리지 경로값을 넣어둔 변수이고 file은 우리가 useStat를 통해 현제 업로드한 포스트의 파일이다.
        //이제 값을 받아와야한다. = result로 변수명을 만든 이유
        console.log("이건 metadata");
        console.log(result.metadata);
        console.log("이건 fef");
        console.log(result.ref);
        const url = await getDownloadURL(result.ref); // 스토리지에 저장된 주소값을 인자값을 받는다.
        //getDownloadURL() > 스토리지에 업로드된 파일에 접근할 수 있는 url을 반환하는 함수. 이 url를 통해 사용자가 브라우저에 해당 파일을 다운해 볼 수 있다.
        //.ref가 궁금해서 result 콘솔 찍어봤음.
        //result는 객체로 안에는 metadate와 ref 가 들어있는데 각각 해당 사용자의 정보(metadate)부터 스토리지경로 이것저것 다잇는듯? | ref는 업로드한 파일 스토리직ㅄ부터 해당 사이트 주소 업로드한 사람ID(uid)가 잇더라
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
