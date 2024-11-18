import React, { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-ramdom-books";
import Head from "next/head";
//@ = src를 의미

//ssr방식으로 데이터 패칭을 한다.
export const getStaticProps = async () => {
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();

  //서로 상관없는 데이터라 서로를 기다릴 필욘 없음
  console.log("인덱스 페이지");
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, recoBooks },
    // revalidate: 3, //재검증하다라는 의미로 3초에 한번식 재검증하라는 의미.
  };
};

const Home = ({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 고서들을 만나보세요"
        />
      </Head>
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
    </>
  );
};

//index의 컴포넌트는 특정한 layout을 가져가 쓰고 싶다는 뜻으로 직접 지정하겠다는 것.
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
