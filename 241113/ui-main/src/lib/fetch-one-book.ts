import { BookData } from "@/type";

const FetchOneBook = async (id: number): Promise<BookData> | null => {
  const url = `http://localhost:12345/book/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default FetchOneBook;
