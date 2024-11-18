import { BookData } from "@/type"; // 타입정의 한 것

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  //asyne와 await가 있다? promise를 반환한다는 뜻이다.
  //서버의 데이터를 찾아올 예정.
  let url = "https://onebite-books-server-nine-tan.vercel.app/book";

  if (q) {
    url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchBooks;
