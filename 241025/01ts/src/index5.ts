//Indexed Access Type
// 인덱스 값을 활용하여 타입 안에 특정 속성값의 타입만 추출해내는 방법

//
//특정 부분을 빼와서 사용하기
// 이미 타입 정의가 끝나기 때문에 특정 부분만 가져와서 사용 할 수 있다.
// const printAuthorInfo = (author: { id: number; name: string }) => {
//   console.log(`${author.id} - ${author.name}`);
// };

// 그러나 author값이 늘어난다면? - 인덱스 엑세스 타입ㄴ

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "David",
    age: 22,
  },
};

//이때 인덱스 액세스 타입을 사용한다.
const printAuthorInfo = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name} 나이: ${author.age} `);
};

// 또다른 인덱스 액세스 타입 예시

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];
// 배열로 만든다.

//인덱스 0번을 가져온다. 직접 0을 줘도 되고 number를 줘도 된다
const post01: PostList[number] = {
  title: "채색주의자",
  content: "채색을 하자!",
  author: {
    id: 1,
    name: "한강",
    age: 24,
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number을 가져온다. 그래서 number타입이 된다.

type Tup01 = Tup[number]; // 유니온 타입이 된다.
