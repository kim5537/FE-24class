import React, { ReactNode } from "react";
// import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log(context);
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  //string | string[] | undefinde 3개의 경우가 나올수있다고 타입 에러가 나서 타입 가드해줌
  return {
    props: { books },
  };
};

const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const router = useRouter();
  // // console.log(router);
  // //next는 data를 가져올 때 받아오기 전 후 둘 다 보여준다. 그래서 데이터를 두번씩 찍어준다.
  // const {
  //   query: { q },
  // } = router;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
//next.js는 프레임워크이나 react를 기틀로 만들어 져서 똑같이 훅이라고 부르고 있다.
