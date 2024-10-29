//promise를 사용해보자.

//방법 1
interface Post {
  id: number;
  title: string;
  content: string;
}

//데이터를 가져왔을 때와 에러 전용 함수 두가지를 인자값을 필수로 받는 promise
const promise = new Promise<Post>((resolve, reject) => {
  setTimeout(() => {
    resolve({
      id: 1,
      title: "게시글 제목",
      content: "게시글 본문",
    });
  }, 3000);
});

//then은 promise의 resolve값을 가져와 사용 할 수 있다.
promise.then((response) => {
  console.log(response);
});

promise.catch((err) => {
  if (typeof err === "string") console.log(err); //에러는 문자열이다.
});

//지금까지 우리는 fetch 함수로 promise를 사용해왔다.
//타입을 정의 하지 않으면 unknown가 되며 값을 사용 할 수 없다.
//반환값이 post가 된다.
// const fetchPost = (): Promise<Post> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         title: "게시글 제목",
//         content: "게시글 본문",
//       });
//     }, 3000);
//   });
// };
