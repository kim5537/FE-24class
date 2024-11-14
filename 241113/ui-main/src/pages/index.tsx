import React, { ReactNode } from "react";
import style from "./index.module.css";
import books from "@/mock/book.json";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
//@ = src를 의미

const Home = () => {
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
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
