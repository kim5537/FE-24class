import styles from "./page.module.css";
import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import { BookData } from "@/types";

const RecoBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    // { cache: "force-cache" }
    {
      next: {
        revalidate: 3,
      },
    }
  );
  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const AllBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Home = async () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 도서 </h3>
      </section>
      <AllBooks />
    </div>
  );
};

export default Home;
