import React, { ReactNode } from "react";
import style from "./index.module.css";
import books from "@/mock/book.json";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-ramdom-books";
//@ = src를 의미

//ssr방식으로 데이터 패칭을 한다.
export const getServerSideProps = async () => {
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();

  //서로 상관없는 데이터라 서로를 기다릴 필욘 없음
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, recoBooks },
  };
};

const Home = ({
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

//index의 컴포넌트는 특정한 layout을 가져가 쓰고 싶다는 뜻으로 직접 지정하겠다는 것.
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
