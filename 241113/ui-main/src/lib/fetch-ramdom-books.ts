import { BookData } from "@/type";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = "https://onebite-books-server-nine-tan.vercel.app/book/random";

  try {
    const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error(); //에러 커스텀
    // }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchRandomBooks;
