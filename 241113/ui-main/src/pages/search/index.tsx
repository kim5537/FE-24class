import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/type";
import Head from "next/head";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   // const q = context.query.q; //서버를 통해 새로운 데이터를 찾아오는게 아니기 때문에 에러가 난다. 그래서 csr방식 처럼 굳이 서버가 아닌 state값에서 가져오게 변경하면 된다.
//   const books = await fetchBooks(q as string);
//   //string | string[] | undefinde 3개의 경우가 나올수있다고 타입 에러가 나서 타입 가드해줌
//   return {
//     props: { books },
//   };
// };

const Page = () => {
  // const Page = ({
  //   books,
  // }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const router = useRouter();
  // // console.log(router);
  // //next는 data를 가져올 때 받아오기 전 후 둘 다 보여준다. 그래서 데이터를 두번씩 찍어준다.
  // const {
  //   query: { q },
  // } = router;
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    //상단에 data에 값이 들어와야 setbook에 넣을 수 있어
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      //예외 조항 처리. q값이 있을 때만 실행
      fetchSearchResult();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 고서들을 만나보세요"
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
//next.js는 프레임워크이나 react를 기틀로 만들어 져서 똑같이 훅이라고 부르고 있다.
